
import React from "react";

export default function TweetAction(props) {
    return (
        <div className="tweet-action">
            <img 
                src={props.icon} 
                alt="" 
                className="rounded-full hover:rounded-lg transition duration-300 ease-in-out"
            />
            <p>{props.value}</p>
        </div>
    )
}