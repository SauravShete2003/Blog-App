import './index.css'
import ReactDom from 'react-dom/client';
import Home from './views/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BlogView from './views/BlogView/BlogView';

const root = ReactDom.createRoot(document.getElementById("root"))

const router = createBrowserRouter([
    {
       path:"/",
       element:<Home/>
    },
    {
      path:"/Blog/:id",
      element:<BlogView/>
    }
])

root.render(
   <RouterProvider router={router}/>);
