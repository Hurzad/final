import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient("https://kdrhsrfvohgclkddtqmk.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkcmhzcmZ2b2hnY2xrZGR0cW1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5NTMxODMsImV4cCI6MjAzNTUyOTE4M30.xvBWyjLYp6fHy-5r9O27LbYx3lAVtiCkOxi99JBqHx4");
