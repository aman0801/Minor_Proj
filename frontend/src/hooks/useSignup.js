import { useState, useEffect } from 'react'
import { projectAuth, db } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

import { useNavigate } from 'react-router-dom';
export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  const navigate=useNavigate();

  const signup = async (email, password,name,voterId,metamaskId) => {
    setError(null)
    setIsPending(true)
  
    try {
      // signup
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)

      if (!res) {
        throw new Error('Could not complete signup')
      }
      // create a user document
      await db.collection('users').doc(res.user.uid).set({ 
        online: true,
        name,
        email,
        voterId,
        metamaskId
      })

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
        navigate('/');
      }
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

  return { signup, error, isPending }
}