// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uotjvmrviawfekvywcml.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvdGp2bXJ2aWF3ZmVrdnl3Y21sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2ODA0OTYsImV4cCI6MjA2MzI1NjQ5Nn0.iiPgGkVwkgdXqpmYCno2tutAqLQ0_rJek2WLveRyPtM';
export const supabase = createClient(supabaseUrl, supabaseKey);