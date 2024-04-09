import React from "react";
import Header from "../Components/Header";
import NotificationsFill from '../assets/icon/iconblanc/Notifications-Fill.svg';

/**
 * Notification Screen UI Component
 * @returns {React.JSX.Element}
 */

const Notifications = () => {
   return (
      <main role="main" className="main-container timeline w-[600px]">
         <Header
            title="Notifications"
            imgURL={NotificationsFill}
         />
         <div className="p-4">
            <h1>Notifications Screen</h1>
         </div>
      </main>
   );
};

export default Notifications;