import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/layouts/Layout";
import Home from "./components/main/home/Home";
import DiscoverNeon from "./components/main/discoverNeon/DiscoverNeon";


const router = createBrowserRouter([{
    path:'/',
    element:<Layout/>,
    children:[{
      index:true,
      element:<Home/>
    },{
      path:'/discover_neon',
      element:<DiscoverNeon/>
    }]
}])

export default function RouterContent() {
    return (
      
      <RouterProvider router={router}/>
    )
  }