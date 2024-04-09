import React from "react";
import Header from "../Components/Header";

/**
 * Bookmarks Screen UI Component
 * @returns {React.JSX.Element}
 */

const Bookmarks = () => {
   return (
      <main role="main" className="main-container timeline w-[600px]" >
         <Header
            title="Bookmarks"
         />
         <div className="p-4">
            <h1>Bookmarks Screen</h1>
         </div>
      </main>
   );
};

export default Bookmarks;