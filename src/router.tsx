import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/layouts/Layout";
import Home from "./components/main/home/Home";
import DiscoverNeon from "./components/main/discoverNeon/DiscoverNeon";
import CreateNeonContent from "./components/main/CreateNeonContent/CreateNeonContent";
import ContentListNeon from "./components/main/contentListNeon/ContentListNeon";


const router = createBrowserRouter([{
    path:'/',
    element:<Layout/>,
    children:[{
      index:true,
      element:<Home/>
    },{
      path:'/discover_neon',
      element:<DiscoverNeon/>
    },{
      path:'/create_neon',
      element:<CreateNeonContent/>
    },{
      path:'/neon',
      element:<ContentListNeon/>
    },
]}])

export default function RouterContent() {
    return (
      
      <RouterProvider router={router}/>
    )
  }