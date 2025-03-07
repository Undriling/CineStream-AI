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
    const [gptSearchBtn, setGptSearchBtn] = useState("AI Search");


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
        setGptSearchBtn((text) => text === "AI Search" ? "Home" : "AI Search" )
    };


    const handleLangChange = (e) => {
        dispatch(changeLang(e.target.value))
    };

    

    
    return (
        <div className='w-full absolute pt-1 md:pt-0 md:px-15 md:mx-15 md:py-3 z-10 bg-gradient-to-b from-black flex justify-between flex-wrap md:flex-row md:bg-transparent bg-black'>
            <img src={Logo_URL} alt='logo' className='mx-auto md:mx-0 w-[140px] cursor-pointer'/>
            <select className='md:px-1 my-6 md:my-2 md:mx-2 md:ml-[60%] rounded-xl bg-purple-600 text-white font-serif hover:bg-purple-800' onChange={handleLangChange}>
                {SupportedLanguages.map((lang) => <option key={lang.identifier} value={lang.identifier} className='text-[8px] md:text-[15px] my-1'>{lang.name}</option>)}
            </select>
            <button className='px-2 md:px-3 my-6 md:my-2 mx-3 md:mx-2 rounded-xl md:ml-auto bg-purple-600 text-white font-serif hover:bg-purple-800' onClick={handleGptSearch}>{gptSearchBtn}</button>
            <div className='grid place-items-center w-auto md:mt-0 md:h-10 my-2 md:my-0 -ml-2 md:-ml-0 mr-4 md:mr-0 md:mx-2'>
                <img src={NetflixPofileImage} alt='profile-image'className='w-10 h-10 rounded-md  cursor-pointer'/>
                <button className='font-serif text-xs md:text-sm font-light w-20 h-6 text-white my-[2px] rounded-lg hover:text-red-500' onClick={handleSignOut}>{lang[langKey].signOutText}</button>
            </div>
        </div>
      )
}

export default HeaderHome;