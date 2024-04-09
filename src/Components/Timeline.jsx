import React from "react";
import Header from "./Header";
import TweetEditor from "./TweetEditor";
import Tweets from "./Tweets";

export default function Timeline(){

    return (
        <main className="timeline w-[600px]">
            <Header title="Home" />
            <TweetEditor />
            <Tweets />
        </main>
    )
}