import React from "react";
import Header from "../Components/Header";
import MessagesFill from '../assets/icon/iconblanc/Messages-Fill.svg';

/**
 * Messages Page UI Component
 * @returns {React.JSX.Element}
 */

const Messages = () => {
   return (
      <main role="main" className="main-container">
         <Header
            title="Messages"
            imgURL={MessagesFill}
         />
         <div className="p-4">
            <h1>Mesages Screen</h1>
         </div>
      </main>
   );
};

export default Messages;