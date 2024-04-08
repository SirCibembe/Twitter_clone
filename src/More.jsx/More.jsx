import React from "react";
import Header from "../Components/Header";
import MoreFill from '../assets/icon/iconblanc/More.svg';

/**
 * More Screen UI Component
 * @returns {React.JSX.Element}
 */

const More = () => {
   return (
      <main role="main" className="main-container">
         <Header
            title="More"
            imgURL={MoreFill}
         />
         <div className="p-4">
            <h1>More Screen</h1>
         </div>
      </main>
   );
};

export default More;