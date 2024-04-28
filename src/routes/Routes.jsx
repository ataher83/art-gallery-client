import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllArtAndCraftItems from "../pages/AllArtAndCraftItems/AllArtAndCraftItems";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import MyArtAndCraftList from "../pages/MyArtAndCraftList/MyArtAndCraftList";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateCraft from "../pages/UpdateCraft/UpdateCraft";
import Users from "../pages/Users/Users";
import CraftDetails from "../pages/CraftDetails/CraftDetails";
import ViewDetails from "./ViewDetails/ViewDetails";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>, 
      children: [
        {
            path:'/',
            element: <Home></Home>,
            loader: () => fetch('https://art-gallery-server-one.vercel.app/craft')
        
        },
        {
            path:'/allArtAndCraftItems',
            element: <AllArtAndCraftItems></AllArtAndCraftItems>,
            loader: () => fetch('https://art-gallery-server-one.vercel.app/craft')
        },
        {
            path:'/addCraftItem',
            element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
        },
        {
            path:'/craftDetails/:id',
            element: <PrivateRoute><CraftDetails></CraftDetails></PrivateRoute>,

            // loader: ({params}) => fetch(`https://art-gallery-server-one.vercel.app/craft/${params.id}`)

            loader: () => fetch('https://art-gallery-server-one.vercel.app/craft')
        },
        {
            path:'/updateCraft/:id',
            element: <UpdateCraft></UpdateCraft>,
            loader: ({params}) => fetch(`https://art-gallery-server-one.vercel.app/craft/${params.id}`)
        },
        {
            path:'/myArtAndCraftList',
            element: <PrivateRoute><MyArtAndCraftList></MyArtAndCraftList></PrivateRoute>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path:'/users',
            element: <Users></Users>,
            loader: () => fetch('https://art-gallery-server-one.vercel.app/user')
        },
        {
            path:'/viewDetails',
            element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
            
        }

      ]
    },
  ]);
  export default router;