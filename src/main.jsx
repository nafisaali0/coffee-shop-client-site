import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        loader:() => fetch('http://localhost:5000/coffee'),
        element:<Home></Home> ,
      },
      {
        path:"/addcoffee",
        element:<AddCoffee></AddCoffee>
      },
      {
        path:"/updatecoffee/:id",
        loader:({params}) => fetch(`http://localhost:5000/coffee/${params.id}`),
        element:<UpdateCoffee></UpdateCoffee>
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
