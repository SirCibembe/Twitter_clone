
import React, { useState } from "react";
import Tweet from "./Tweet";
import TweetTitleData from "./../data/initial-data.json";

export default function Tweets() {
  const [tweets, setTweets] = useState(TweetTitleData.media);

  return (
    <div className="tweets">
      {tweets?.map((item) => (
        <Tweet key={item.id} table={item} />
      ))}
    </div>
  );
}
   