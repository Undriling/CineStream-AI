import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import lang from "../langConstants";

import useHandleGenaiSearch from "../hooks/useHandleGenaiSearch";

const GptSearchBar = () => {
  const langKey = useSelector(
    (store) => store.langConfig.langSelect
  );

  const { gptSearchInput, handleGenaiSearch } =
    useHandleGenaiSearch();

  //  Animated Placeholder Text for Search Input
  const fullPlaceholder = lang[langKey].searchPlaceholder;
  const [animatedPlaceholder, setAnimatedPlaceholder] =
    useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setAnimatedPlaceholder(
        fullPlaceholder.slice(0, index)
      );
      index++;
      if (index > fullPlaceholder.length) {
        index = 0;
      }
    }, 100);

    return () => clearInterval(interval);
  }, [fullPlaceholder]);

  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center">
      <form
        className="w-[90%] md:w-1/2 bg-black grid grid-cols-12 font-serif rounded-lg"
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={gptSearchInput}
          className="p-2 m-2 col-span-9 rounded-lg"
          name="GPT Search Box"
          placeholder={animatedPlaceholder}
        />
        <button
          className="p-2 m-2 col-span-3 bg-red-600 text-black text-lg rounded-lg"
          onClick={handleGenaiSearch}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
