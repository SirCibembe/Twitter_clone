import React from "react";
import PageTitle from "./PagesTitle";
import TopTweets from "./TopTweets";

export default function Header ({title}) {
    return (
        <header className="header"class="px-4 py-6 flex items-center justify-between border-b border-[#2F3336]" >
            <PageTitle title={title} />
            <TopTweets />
        </header>
    )
}