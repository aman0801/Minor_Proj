import { useEffect, useState } from 'react'
import { projectAuth,db } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch,user } = useAuthContext()
  
  const logout = async () => {
    setError(null)
    setIsPending(true)

    try {
      //change user status to offline
      console.log("changing user status to offline");
      await db.collection('users').doc(user.uid).update({online:false})
      // sign the user out
      console.log("signing out");
      await projectAuth.signOut()
      // dispatch logout action
      console.log("dispatching logout");
      dispatch({ type: 'LOGOUT' })

      // update state
      if (!isCancelled) {
        
        setError(null)
      }
      setIsPending(false)
      
    } 
    catch(err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { logout, error, isPending }
}