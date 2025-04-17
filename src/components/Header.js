import React, { useEffect } from 'react'
import { Logo_URL } from '../constants'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
          navigate("/browse")
        } else {
          // User is signed out
          dispatch(removeUser())
          navigate("/")
        }
      })

      return () => unsubscribe ;
}, [dispatch, navigate]);

  return (
    <div className='absolute px-4 md:px-20 md:mx-20 py-4 z-10'>
        <img src={Logo_URL} alt='logo' className='w-[200px]' />
    </div>
  )
}

export default Header;