export const Logo_URL = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const Bg_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_small.jpg";

export const API_Options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY
    }
  };

export const Movie_Banner_URL = "https://image.tmdb.org/t/p/w500";

export const NowPlayingMovie_URL = "https://api.themoviedb.org/3/movie/now_playing";

export const PopularMovie_URL = "https://api.themoviedb.org/3/movie/popular";

export const TrendingMovie_URL = "https://api.themoviedb.org/3/movie/top_rated";

export const UpcomingMovie_URL = "https://api.themoviedb.org/3/movie/upcoming";

export const SupportedLanguages = [{identifier: "en", name: "English"}, {identifier: "assamese", name: "অসমীয়া"},
   {identifier: "hindi", name: "हिन्दी"}, {identifier: "punjabi", name: "Punjabi"}, 
   {identifier: "marathi", name: "Marathi"}, {identifier: "gujarati", name: "Gujarati"}, 
   {identifier: "french", name: "French"}];

export const MoviePage_URLPi = "https://www.themoviedb.org/movie/";
export const MoviePage_URLPii = "/watch?translate=true&locale=IN";

export const geminiApi_Key = process.env.REACT_APP_GEMINI_KEY;
