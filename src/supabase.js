import { createClient } from '@supabase/supabase-js';

// Replace these with your Supabase project's details
const supabaseUrl = 'https://oxpoxkcqwgcmxfjgyvxw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94cG94a2Nxd2djbXhmamd5dnh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyMjA0MDIsImV4cCI6MjA1MDc5NjQwMn0.17m5trt2_gvm8e7pPkcPykOIzM_Rd867cd_QRuY7XOI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
