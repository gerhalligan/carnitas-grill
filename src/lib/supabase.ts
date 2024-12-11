import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ggypbisikjjqwgzbnapx.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdneXBiaXNpa2pqcXdnemJuYXB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4Nzg0OTgsImV4cCI6MjA0OTQ1NDQ5OH0.1sK1s0i9LB_7sWsM43_V1_d1ichOp6yHWLIfE2P_qEM";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase configuration');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);