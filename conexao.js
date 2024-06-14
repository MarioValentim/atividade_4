import { createClient } from "@supabase/supabase-js";

const link = "https://lqehdddyvrvrpmikzaof.supabase.co"
const chave = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxZWhkZGR5dnJ2cnBtaWt6YW9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0MDAzNjYsImV4cCI6MjAzMzk3NjM2Nn0.ypr8eCYuUGLcNyVR_VoI05bOw32oW1TY_Kjrfgcrx_g"

export const supabase = createClient(link, chave);