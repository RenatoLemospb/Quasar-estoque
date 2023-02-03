import { ref } from "vue"
import usesupabase from "src/boot/supabase"

const user = ref(null)
export default function useAuthUser () {

  const {supabase} = usesupabase()

  const login = async ({ email,password }) => {
    const { user, error } = await supabase.auth.signInWithOAuth({ email, password })
    if (error) throw error
    return user
  }

  const loginWithSocialProvider = async (provider) => {
    const { user, error } = await supabase.auth.signInWithOAuth({ provider })
    if (error) throw error
    return user
  }

  const logout = async () => {
    const { error} = await supabase.auth.signOut()
    if (error) throw error
  }
  const isloggedIn = () => {
    return !!user.value
  }

  const register = async ({ email, password, ...meta }) => {
    const { user, error } = await supabase.auth.signUp(
      { email, password },
      {
        // arbitrary meta data is passed as the second argument under a data key
        // to the Supabase signUp method
        data: meta,
        // the to redirect to after the user confirms their email
        // window.location wouldn't be available if we were rendering server side
        // but since we're all on the client it will work fine
        redirectTo: `${window.location.origin}/me?fromEmail=registrationConfirmation"`
      })
    if (error) throw error
    return user
  }

  const update = async (data) => {
    const { user, error } = await supabase.auth.update(data)
    if (error) throw error
    return user
  }

  const sendPasswordRestEmail = async (email) => {
    const { user, error } = await supabase.auth.api.resetPasswordForEmail(email)
    if (error) throw error
    return user
  }

  return {
    user,
    login,
    loginWithSocialProvider,
    logout,
    isloggedIn,
    register,
    update,
    sendPasswordRestEmail
  }
}
