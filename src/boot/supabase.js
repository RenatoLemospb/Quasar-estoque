import{createClient} from '@supabase/supabase-js'

const supabaseUrl =  'https://soxtrvqoirqryrkojuge.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNveHRydnFvaXJxcnlya29qdWdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ5NDgyMDIsImV4cCI6MTk5MDUyNDIwMn0.dUUKp1q4ZzATBo1Bhpu_BUWEov0UMlYdxHJOCbZJ340'
const supabase = createClient(supabaseUrl, supabaseKey)

console.log ('init supabase:', supabase)
export default function usesupabase () {
  return {supabase}
}
