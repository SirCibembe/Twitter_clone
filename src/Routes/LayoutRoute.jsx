import React from "react";
import Sidebar from "../sideBar/SideBar";
import Trends from '../trends/Trends';
import { Outlet } from "react-router-dom";

/**
 * UI Definition of Route
 * @returns {React.JSX.Element}
 */

const LayoutRoute = () => {
   return (
      <main role="main" className='flex justify-center'>
         <Sidebar />
         <Outlet />
         <Trends />
      </main>
   );
};

export default LayoutRoute;