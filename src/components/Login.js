import React, { useRef, useState } from "react";
import Header from "./Header";
import { Bg_URL } from "../constants";
import { validateSignIn } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const HandleSignInData = () => {
    const message = validateSignIn(
      email.current.value,
      password.current.value
    );
    setErrMsg(message);

    // Sign Up/ Sign In logic
    if (isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // const user = userCredential.user;
          setErrMsg("Successfully Signing Up.Sign In Now");
        })
        .catch((error) => {
          const errorCode = error.code;
          setErrMsg(errorCode);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // const user = userCredential.user;
          setErrMsg("Successfully Signing In");
        })
        .catch((error) => {
          error.code =
            "Email/Password isn't valid! Please Try again";
          setErrMsg(error.code);
        });
    }
  };

  const toggleSignInBtn = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      <Header />
      <div className="absolute  bg-[length:200%]">
        <img
          src={Bg_URL}
          alt="bg-image"
          className="filter blur-[1.6px] md:blur-[1.5px] h-screen object-cover md:h-auto opacity-60"
        />
      </div>
      <form
        className="absolute p-7 my-[200px] md:my-[100px] rounded-lg mx-5 md:mx-auto right-0 left-0 w-[90%] md:w-4/12 h-auto bg-gradient-to-br from-black bg-opacity-70"
        onSubmit={(e) => e.preventDefault()}>
        <h1 className="text-white font-extrabold my-5 text-2xl md:text-3xl">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>

        {isSignUp && (
          <div className="my-5 bg-gradient-to-br rounded-md focus:outline-none">
            <input
              type="text"
              placeholder="Name"
              required
              className="p-2 m-3 h-5 w-80 bg-transparent text-white focus:outline-none"
            />
          </div>
        )}

        <div className="my-5 bg-gradient-to-br rounded-md focus:outline-none">
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            required
            className="p-2 m-3 h-5 w-80 bg-transparent text-white focus:outline-none"
          />
        </div>

        {isSignUp && (
          <div className="my-5 bg-gradient-to-br rounded-md focus:outline-none">
            <input
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Enter 10-digit phone number"
              required
              className="p-2 m-3 h-5 w-80 bg-transparent text-white focus:outline-none"
            />
          </div>
        )}

        <div className="my-5 bg-gradient-to-br rounded-md focus:outline-none">
          <input
            ref={password}
            type="password"
            placeholder="Password"
            required
            className="p-2 m-3 h-5 w-80 bg-transparent text-white focus:outline-none"
          />
        </div>
        <p className="text-red-600 font-bold p-2">
          {errMsg}
        </p>
        <div
          className="my-3 bg-red-600 text-center rounded-md hover:bg-red-700 cursor-pointer"
          onClick={HandleSignInData}>
          <button className="text-white bg-transparent text-center text-lg h-9">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </div>
        <div className="flex flex-wrap p-1">
          <input
            type="checkbox"
            className="cursor-pointer w-5 h-5 my-[5px] border-[1px] rounded-sm accent-white bg-black checked:bg-[#f0f0f0]"
          />
          <p className="text-white bg-transparent px-2 text-lg">
            Remember me
          </p>
        </div>
        <p
          onClick={toggleSignInBtn}
          className="text-white my-7 cursor-pointer hover:font-semibold">
          {isSignUp
            ? "Already a user?Sign in now"
            : "New to Netflix?Sign up now"}
        </p>
        {!isSignUp && (
          <p className="text-gray-200 font-light text-sm">
            This page is protected by Google reCAPTCHA to
            ensure you're not a bot.
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
