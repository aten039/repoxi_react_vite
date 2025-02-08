import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/layouts/Layout";
import Home from "./components/main/home/Home";


const router = createBrowserRouter([{
    path:'/',
    element:<Layout/>,
    children:[{
      index:true,
      element:<Home/>
    }]
}])

export default function RouterContent() {
    return (
      <RouterProvider router={router}/>
    )
  }