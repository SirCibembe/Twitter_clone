import React from "react";
import Header from "../Components/Header";
import ListsFill from '../assets/icon/iconblanc/Lists-Fill.svg';

/**
 * Lists Screen UI Element
 * @returns {React.JSX.Element}
 */

const Lists = () => {
   return (
      <main role="main" className="main-container timeline w-[600px]">
         <Header
            title='Lists'
            imgURL={ListsFill}
         />
         <div className="p-4">
            <h1>Lists Screen</h1>
         </div>
      </main>
   );
};

export default Lists;