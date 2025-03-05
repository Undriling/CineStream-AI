import React, { useEffect, useState } from 'react'
import { Logo_URL, SupportedLanguages } from '../constants';
import NetflixPofileImage from '../assets/netflixProfileImg.jpg'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGptSearch } from '../utils/gptSlice';
import { changeLang } from '../utils/langConfigSlice';
import lang from '../langConstants';

const HeaderHome = () => {
    const langKey = useSelector((store) => store.langConfig.langSelect);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [gptSearchBtn, setGptSearchBtn] = useState(lang[langKey].gptSearchText);


    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    };
   
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user.uid;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
              navigate("/browse")
            } else {
              // User is signed out
              dispatch(removeUser())
              navigate("/")
            }
          })

          return () => unsubscribe;
    },[]);

    const handleGptSearch = () => {
        dispatch(toggleGptSearch())
        setGptSearchBtn((text) => text === lang[langKey]?.gptSearchText ? lang[langKey]?.gptReturnText : lang[langKey]?.gptSearchText )
    };


    const handleLangChange = (e) => {
        dispatch(changeLang(e.target.value))
    };

    

    
    return (
        <div className='w-full absolute px-15 mx-15 py-3 z-10 bg-gradient-to-b from-black flex justify-between flex-wrap'>
            <img src={Logo_URL} alt='logo' className='w-[140px] cursor-pointer'/>
            <select className='px-1 my-2 mx-2 ml-[60%] rounded-xl bg-purple-600 text-white font-serif hover:bg-purple-800' onChange={handleLangChange}>
                {SupportedLanguages.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select>
            <button className='px-3 my-2 mx-2 rounded-xl ml-auto bg-purple-600 text-white font-serif hover:bg-purple-800' onClick={handleGptSearch}>{gptSearchBtn}</button>
            <div className='grid place-items-center w-auto h-10 mx-2'>
                <img src={NetflixPofileImage} alt='profile-image'className='w-10 h-10 rounded-md  cursor-pointer'/>
                <button className='font-serif font-light w-20 h-6 text-white my-[2px] rounded-lg hover:text-red-500' onClick={handleSignOut}>{lang[langKey].signOutText}</button>
            </div>
        </div>
      )
}

export default HeaderHome;