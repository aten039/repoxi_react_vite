import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/layouts/Layout";
import Home from "./components/main/home/Home";
import DiscoverNeon from "./components/main/discoverNeon/DiscoverNeon";
import CreateNeonContent from "./components/main/CreateNeonContent/CreateNeonContent";
import ContentListNeon from "./components/main/contentListNeon/ContentListNeon";
import RefundPolicy from "./components/policies/RefundPolicy";
import WarrantyPolicy from "./components/policies/WarrantyPolicy";
import ShippingPolicy from "./components/policies/ShippingPolicy";
import ContactPolicy from "./components/policies/ContactPolicy";


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
    },{
      path:'/refund',
      element:<RefundPolicy/>
    },{
      path:'/warranty',
      element:<WarrantyPolicy/>
    },{
      path:'/contact',
      element:<ContactPolicy/>
    },{
      path:'/shipping',
      element:<ShippingPolicy/>
    },
]}])

export default function RouterContent() {
    return (
      
      <RouterProvider router={router}/>
    )
  }