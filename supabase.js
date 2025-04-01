import { createClient } from "@supabase/supabase-js";

export const SUPABASE_URL = "https://fseirqrzguzjakkqxusx.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzZWlycXJ6Z3V6amFra3F4dXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5Njc4MTMsImV4cCI6MjA1NzU0MzgxM30.ImkfVVqvpxOuIB94dmscxXJ-tVGP8F0-LMf2tLtf5Qs";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
