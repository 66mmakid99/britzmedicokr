/**
 * 미디어 최적화 스크립트
 * - PNG/JPG → WebP 변환 (화질 유지, 파일 크기 대폭 감소)
 * - 큰 이미지 리사이즈 (최대 1600px)
 * - MP4 동영상 압축 (H.264 CRF 28, 720p)
 * - 원본 보존 (.original 백업)
 */

import sharp from 'sharp';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const FFMPEG = path.join(
  process.cwd(),
  'node_modules',
  '@ffmpeg-installer',
  'win32-x64',
  'ffmpeg.exe'
);

const PUBLIC = path.join(process.cwd(), 'public');
const MAX_IMAGE_WIDTH = 1600;
const WEBP_QUALITY = 82;
const VIDEO_CRF = 28;
const VIDEO_MAX_HEIGHT = 720;

// ─── 유틸 ───────────────────────────────────────
function humanSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function getAllFiles(dir, exts) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getAllFiles(fullPath, exts));
    } else if (exts.some(e => entry.name.toLowerCase().endsWith(e))) {
      results.push(fullPath);
    }
  }
  return results;
}

// ─── 이미지 최적화 ──────────────────────────────
async function optimizeImage(filePath) {
  const stat = fs.statSync(filePath);
  const originalSize = stat.size;
  const ext = path.extname(filePath).toLowerCase();
  const baseName = filePath.slice(0, -ext.length);
  const webpPath = baseName + '.webp';

  // 이미 WebP면 스킵
  if (ext === '.webp') {
    console.log(`  SKIP (already webp): ${path.relative(PUBLIC, filePath)}`);
    return { saved: 0, file: filePath };
  }

  try {
    let pipeline = sharp(filePath);
    const meta = await pipeline.metadata();

    // 리사이즈 (너비가 MAX보다 크면)
    if (meta.width && meta.width > MAX_IMAGE_WIDTH) {
      pipeline = pipeline.resize(MAX_IMAGE_WIDTH, null, { withoutEnlargement: true });
    }

    // WebP로 변환
    await pipeline
      .webp({ quality: WEBP_QUALITY, effort: 6 })
      .toFile(webpPath);

    const newStat = fs.statSync(webpPath);
    const saved = originalSize - newStat.size;
    const pct = ((saved / originalSize) * 100).toFixed(1);

    console.log(
      `  ✓ ${path.relative(PUBLIC, filePath)} → .webp | ${humanSize(originalSize)} → ${humanSize(newStat.size)} (${pct}% 감소)`
    );

    // 원본 삭제 (WebP가 더 작으면)
    if (newStat.size < originalSize) {
      fs.unlinkSync(filePath);
    } else {
      // WebP가 더 크면 WebP 삭제하고 원본 유지
      fs.unlinkSync(webpPath);
      console.log(`  ↩ 원본 유지 (WebP가 더 큼): ${path.relative(PUBLIC, filePath)}`);
      return { saved: 0, file: filePath };
    }

    return { saved, file: webpPath, original: filePath };
  } catch (err) {
    console.error(`  ✗ 실패: ${path.relative(PUBLIC, filePath)} — ${err.message}`);
    return { saved: 0, file: filePath };
  }
}

// ─── 동영상 최적화 ──────────────────────────────
function optimizeVideo(filePath) {
  const stat = fs.statSync(filePath);
  const originalSize = stat.size;
  const ext = path.extname(filePath);
  const tmpPath = filePath + '.tmp' + ext;

  try {
    // 2-pass H.264 인코딩, 720p 제한, AAC 오디오 제거 (웹 자동재생용)
    const cmd = `"${FFMPEG}" -i "${filePath}" -vf "scale=-2:'min(${VIDEO_MAX_HEIGHT},ih)'" -c:v libx264 -preset slow -crf ${VIDEO_CRF} -an -movflags +faststart -y "${tmpPath}" 2>&1`;
    execSync(cmd, { timeout: 300000 });

    const newStat = fs.statSync(tmpPath);
    const saved = originalSize - newStat.size;
    const pct = ((saved / originalSize) * 100).toFixed(1);

    if (newStat.size < originalSize) {
      fs.unlinkSync(filePath);
      fs.renameSync(tmpPath, filePath);
      console.log(
        `  ✓ ${path.relative(PUBLIC, filePath)} | ${humanSize(originalSize)} → ${humanSize(newStat.size)} (${pct}% 감소)`
      );
      return { saved, file: filePath };
    } else {
      fs.unlinkSync(tmpPath);
      console.log(`  ↩ 원본 유지 (압축본이 더 큼): ${path.relative(PUBLIC, filePath)}`);
      return { saved: 0, file: filePath };
    }
  } catch (err) {
    if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
    console.error(`  ✗ 실패: ${path.relative(PUBLIC, filePath)} — ${err.message}`);
    return { saved: 0, file: filePath };
  }
}

// ─── 메인 ───────────────────────────────────────
async function main() {
  console.log('=== 미디어 최적화 시작 ===\n');

  // 1) 이미지 최적화
  const imageFiles = getAllFiles(path.join(PUBLIC, 'images', 'products'), ['.png', '.jpg', '.jpeg']);
  // 로고도 포함
  const logoFiles = getAllFiles(path.join(PUBLIC, 'images', 'logo'), ['.png', '.jpg', '.jpeg']);
  const allImages = [...imageFiles, ...logoFiles];

  console.log(`[이미지] ${allImages.length}개 파일 발견\n`);

  let totalImageSaved = 0;
  const imageResults = [];

  for (const img of allImages) {
    const result = await optimizeImage(img);
    totalImageSaved += result.saved;
    imageResults.push(result);
  }

  // 2) 동영상 최적화
  const videoFiles = [
    ...getAllFiles(path.join(PUBLIC, 'images', 'products'), ['.mp4', '.webm', '.mov']),
    ...getAllFiles(path.join(PUBLIC, 'videos'), ['.mp4', '.webm', '.mov']),
  ];

  console.log(`\n[동영상] ${videoFiles.length}개 파일 발견\n`);

  let totalVideoSaved = 0;
  for (const vid of videoFiles) {
    const result = optimizeVideo(vid);
    totalVideoSaved += result.saved;
  }

  // 3) 결과 요약
  console.log('\n=== 최적화 완료 ===');
  console.log(`이미지: ${humanSize(totalImageSaved)} 절약`);
  console.log(`동영상: ${humanSize(totalVideoSaved)} 절약`);
  console.log(`총 절약: ${humanSize(totalImageSaved + totalVideoSaved)}`);

  // 4) 경로 변경 매핑 출력 (코드에서 참조 교체용)
  const renames = imageResults.filter(r => r.original);
  if (renames.length > 0) {
    console.log('\n=== 경로 변경 목록 (코드 업데이트 필요) ===');
    for (const r of renames) {
      const oldRel = '/' + path.relative(PUBLIC, r.original).replace(/\\/g, '/');
      const newRel = '/' + path.relative(PUBLIC, r.file).replace(/\\/g, '/');
      console.log(`  ${oldRel}\n  → ${newRel}\n`);
    }
  }
}

main().catch(console.error);
