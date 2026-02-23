import { company } from '@data/company';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'MedicalBusiness'],
    name: company.name,
    alternateName: company.nameKo,
    url: company.url,
    logo: `${company.url}${company.logo}`,
    description: company.description,
    foundingDate: company.foundingDate,
    address: {
      '@type': 'PostalAddress',
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      addressCountry: company.address.country,
    },
    sameAs: [company.urlEn],
    hasCredential: company.certifications.map((cert) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: cert,
    })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${company.url}${item.href}`,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function medicalDeviceSchema(product: {
  name: string;
  nameKo: string;
  description: string;
  specialty?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalDevice',
    name: product.name,
    alternateName: product.nameKo,
    description: product.description,
    manufacturer: {
      '@type': 'Organization',
      name: company.name,
    },
    medicalSpecialty: 'Dermatology',
    relevantSpecialty: product.specialty ?? 'Aesthetic Medicine',
  };
}

export function beautyDeviceSchema(product: {
  name: string;
  nameKo: string;
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    alternateName: product.nameKo,
    description: product.description,
    category: 'Beauty Device',
    manufacturer: {
      '@type': 'Organization',
      name: company.name,
    },
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  slug: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `${company.url}/blog/${article.slug}`,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: company.name,
      logo: { '@type': 'ImageObject', url: `${company.url}${company.logo}` },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    image: article.image ? `${company.url}${article.image}` : undefined,
  };
}
