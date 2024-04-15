import React from "react";
// import HeaderProfile from "../Profile/headerprofile";
import Header from "../Components/Header";
import Navigation from "../Profile/Navigation";
import ProfileDetails from "../ProfileDetail/ProfileDetails";
import { Outlet } from "react-router-dom";

/**
 * Profile Screen UI Component
 * @returns {React.JSX.Element}
 */

const Profile = () => {
   return (
      <main role="main" className="main-container relative main-container timeline w-[600px]">
         <Header
            title={"Profile"}
         />
         <ProfileDetails />
         <Navigation />
         <Outlet />
      </main>
   );
};

export default Profile;