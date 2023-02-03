import{createClient} from '@supabase/supabase-js'
import useAuthUser from 'src/composables/UseAuthUser'

const supabaseUrl =  'https://soxtrvqoirqryrkojuge.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNveHRydnFvaXJxcnlya29qdWdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ5NDgyMDIsImV4cCI6MTk5MDUyNDIwMn0.dUUKp1q4ZzATBo1Bhpu_BUWEov0UMlYdxHJOCbZJ340'
const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
   const { user } = useAuthUser()

   user.value = session?.user || null
})

export default function usesupabase () {
  return {supabase}
}
