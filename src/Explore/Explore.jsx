import React from "react";
import ExploreFill from '../assets/icon/iconblanc/Explore.svg';
import Header from "../Components/Header";

/**
 * Explore Screen UI Component
 * @returns {React.JSX.Element}
 */

const Explore = () => {
   return (
      <main role="main" className="main-container timeline w-[600px]">
         <Header
            title="Explore"
            imgURL={ExploreFill}
         />
         <div className="p-4">
            <h1>Explore Screen</h1>
         </div>
      </main>
   );
};
export default Explore;
