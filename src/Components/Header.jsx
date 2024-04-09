import React from "react";
import PageTitle from "./PagesTitle";
import TopTweets from "./TopTweets";

export default function Header ({title}) {
    return (
        <header className="header" >
            <PageTitle title={title} />
            <TopTweets />
        </header>
    )
}