import React, { useEffect, useState } from "react";
import { SupportedLanguages } from "../constants";
import NetflixPofileImage from "../assets/netflixProfileImg.jpg";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  clearGptResults,
  toggleGptSearch,
} from "../utils/gptSlice";
import { changeLang } from "../utils/langConfigSlice";
import lang from "../langConstants";
import Popover from "../components/custom/popover";
import { Home, Search } from "lucide-react";
import NotificationPopover from "./NotificationPopover";

const HeaderHome = () => {
  const langKey = useSelector(
    (store) => store.langConfig.langSelect
  );
  const userInfo = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isGptSearch, setIsGptSearch] = useState(false);
  // Step 2: State for cart modal
  // const [showCart, setShowCart] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } =
            user;

          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          navigate("/browse");
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
        }
      }
    );

    return () => unsubscribe;
  }, [dispatch, navigate]);

  const handleGptSearch = () => {
    if (isGptSearch) {
      dispatch(clearGptResults());
    }

    dispatch(toggleGptSearch());
    setIsGptSearch(!isGptSearch);
  };

  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <div className="w-full absolute pt-1 md:pt-0 lg:px-15 lg:mx-15 md:py-3 z-10 bg-gradient-to-b from-black flex justify-between items-center flex-wrap md:flex-row md:bg-transparent">
      <img
        src="/logo.png"
        alt="logo"
        className="mx-2 md:mx-2 w-[170px] md:w-[200px] md:h-[50px] h-8 cursor-pointer"
        onClick={() => navigate("/browse")}
      />
      <select
        className="md:px-1 h-[26px] hidden md:block md:h-10 my-6 md:my-2 md:mx-2 md:ml-[60%] rounded-lg bg-purple-600 text-white font-serif hover:bg-purple-800 cursor-pointer"
        onChange={handleLangChange}>
        {SupportedLanguages.map((lang) => (
          <option
            key={lang.identifier}
            value={lang.identifier}
            className="text-[10px] md:text-[15px] my-1">
            {lang.name}
          </option>
        ))}
      </select>

      {/* Notification Bell */}
      <NotificationPopover />

      {/* Search */}
      <button
        className="px-2 md:px-3 h-[26px] ml-0 md:h-10 my-6 md:my-2 mx-0 md:mx-2 rounded-lg md:ml-auto font-serif"
        onClick={handleGptSearch}>
        {isGptSearch ? (
          <Home className="w-5 h-5 text-gray-300 mr-2" />
        ) : (
          <Search className="w-5 h-5 text-gray-300 mr-2" />
        )}
      </button>

      {/* Profile */}
      <div className="flex flex-col items-center place-items-center w-auto md:h-10 md:my-0 -ml-2 md:-ml-2 md:mr-0 md:mx-2 text-center bg-opacity-10 backdrop-blur-md font-serif">
        <Popover
          imageSrc={NetflixPofileImage}
          imageAlt="User avatar">
          <img
            src="/profile-icon.gif"
            alt="profile-icon"
            className="w-10 h-10 items-center justify-center"
          />
          <p className="text-sm text-gray-700">
            {userInfo?.email}
          </p>
          <p className="text-[20px] text-gray-700 my-1 animated-text">
            {userInfo?.displayName}
          </p>
          <select
            className="md:px-1 h-[40px] ml-1 text-sm md:text-lg w-30 p-2 block md:hidden md:h-10 my-1 md:my-2 md:mx-2 md:ml-[60%] rounded-lg bg-purple-600 text-white font-serif hover:bg-purple-800"
            onChange={handleLangChange}>
            {SupportedLanguages.map((lang) => (
              <option
                key={lang.identifier}
                value={lang.identifier}
                className="text-[10px] md:text-[15px] my-1">
                {lang.name}
              </option>
            ))}
          </select>

          {/* Step 3: Add Cart Button */}
          {/* <button
            className="px-3 py-2 rounded-lg bg-yellow-400 text-black font-bold mx-2 hover:bg-yellow-500 transition"
            onClick={() => setShowCart(true)}>
            🛒 Cart
          </button> */}

          {/* Step 4: Show AddToCart as modal */}
          {/* {showCart && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
              <div className="relative">
                <button
                  className="absolute top-2 right-2 text-xl font-bold text-gray-700 hover:text-red-500"
                  onClick={() => setShowCart(false)}>
                  ×
                </button>
                <AddToCart />
              </div>
            </div>
          )} */}

          <button
            className="font-serif text-xs md:text-sm font-bold w-[150px] h-[40px] text-red-600 bg-black my-[2px] rounded-lg hover:text-red-400 animated-text"
            onClick={handleSignOut}>
            {lang[langKey].signOutText}
          </button>
        </Popover>
        {/* <img
          src={NetflixPofileImage}
          alt="profile-image"
          className="w-10 h-10 rounded-md  cursor-pointer"
        /> */}
        {/* <button
          className="font-serif text-xs md:text-sm font-light w-20 h-6 text-white my-[2px] rounded-lg hover:text-red-500"
          onClick={handleSignOut}>
          {lang[langKey].signOutText}
        </button> */}
      </div>
    </div>
  );
};

export default HeaderHome;
