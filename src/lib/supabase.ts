import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

let supabase: SupabaseClient<Database> | null = null;

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
}

export { supabase };
