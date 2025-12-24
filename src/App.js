import "../index.css";   // Tailwind setup (with @tailwind directives)
import "./App.css";     // Your own custom CSS
import React, { lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
//import Grocery from "./component/Grocery";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestaurantMenu from "./component/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./component/Cart";


const Grocery = lazy(() => import("./component/Grocery"));

const AppLayout = () => {

  //authentication
  const [userName, setUserName] = useState ();

  useEffect(()=> {
    const data = {name: "Riddhi Patel"};
 
  setUserName(data.name);
 }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
   </UserContext.Provider>
   </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
       {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
