import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/layouts/Layout";


const router = createBrowserRouter([{
    path:'/',
    element:<Layout/>,
    children:[{
    
    }]
}])

export default function RouterContent() {
    return (
      <RouterProvider router={router}/>
    )
  }