import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllArtAndCraftItems from "../pages/AllArtAndCraftItems/AllArtAndCraftItems";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import MyArtAndCraftList from "../pages/MyArtAndCraftList/MyArtAndCraftList";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>, 
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/allArtAndCraftItems',
            element: <AllArtAndCraftItems></AllArtAndCraftItems>
        },
        {
            path:'/addCraftItem',
            element: <AddCraftItem></AddCraftItem>
        },
        {
            path:'/myArtAndCraftList',
            element: <MyArtAndCraftList></MyArtAndCraftList>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
      ]
    },
  ]);
  export default router;