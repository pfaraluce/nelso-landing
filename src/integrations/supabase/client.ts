// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://sadpjdainytbeiteunin.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZHBqZGFpbnl0YmVpdGV1bmluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5OTE3OTksImV4cCI6MjA0OTU2Nzc5OX0.mGLTzmNdUyJ3oY526mgu-xsOvG-EhJ6sXAvbg6mGNXE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);