
import React from 'react'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Timeline from './Components/Timeline.jsx'
import Explore from './Explore/Explore.jsx'
import Notifications from './Notifications/Notifications.jsx'; 
import LayoutRoute from "./Routes/LayoutRoute.jsx";
import "./css/index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoute />,
    children: [
      {
        path: '/',
        element: <Timeline />,
      },
      {
        path: '/explore',
        element: <Explore />
      },
      {
        path: '/notifications',
        element: <Notifications />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
