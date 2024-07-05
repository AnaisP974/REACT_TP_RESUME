import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './views/Home'
import About from './views/About'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './views/Contact'
import Resume from './views/Resume'
import Portfolio from './views/Portfolio'
import Services from './views/Services'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
