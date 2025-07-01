import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"; //
import Login from "./Login";
import Browse from "./Browse";
import Favorites from "./AddToFav";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
      // children: [
      //     {
      //         path: "favorites", // no leading slash
      //         element: <Favorites />,
      //     },
      // ],
    },
    {
      path: "/browse/favorites",
      element: <Favorites />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
