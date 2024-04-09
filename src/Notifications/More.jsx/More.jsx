import React from "react";
import Header from "../../Components/Header";

/**
 * More Screen UI Component
 * @returns {React.JSX.Element}
 */

const More = () => {
   return (
      <main role="main" className="main-container timeline w-[600px]">
         <Header
            title="More"
         />
         <div className="p-4">
            <h1>More Screen</h1>
         </div>
      </main>
   );
};

export default More;