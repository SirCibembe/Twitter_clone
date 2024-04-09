
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Timeline from './Components/Timeline.jsx';
import Explore from './Explore/Explore.jsx';
import Messages from './Messages/Messages.jsx';
import Notifications from './Notifications/Notifications.jsx';
import Lists from './Lists/Lists.jsx';
import Profile from './Profile/Profile.jsx';
import ProfileDetails from './ProfileDetail/ProfileDetails.jsx';
import LayoutRoute from "./Routes/LayoutRoute.jsx";
import More from './Notifications/More.jsx/More.jsx'
import Bookmarks from './Bookmarks/Bookmarks.jsx';
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
      {
        path: '/messages',
        element: <Messages />
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />
      },
      {
        path: '/lists',
        element: <Lists />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/profileDetail',
        element: <ProfileDetails />
      },
      {
        path: '/more',
        element: <More />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
