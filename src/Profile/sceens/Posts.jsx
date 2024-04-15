import React from "react";
import db from '../../data/initial-data.json';
import Tweet from '../../Components/Tweet';


const Posts = () => {
   const tweetDB = db['current-user'].tweets;
   return (
      <>
         {
          tweetDB.map((item) => <Tweet key={item.id} table={item} />)
         }
      </>
   );
};

export default Posts;