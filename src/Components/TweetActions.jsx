import { useState } from "react";
import TweetAction from "./TweetAction";
import Reply from "../assets/icon/iconblanc/Reply.svg";
import heartIcon from '../assets/img/red-react-icon.svg';
import Retweet from "../assets/icon/iconblanc/Retweet.svg"
import Reacti from "../assets/icon/iconblanc/React.svg"
import Share from "../assets/icon/iconblanc/Share.svg"


export default function TweetActions (props){
    const [isShown, setIsShown] = useState(false);
    const changeValue = () => {
        setIsShown(!isShown);
        console.log('clicked');
    }
    return (
        <div className="tweet-actions">
            <TweetAction 
                icon={Reply}   
                value={props.value?.reply}
            />
            <TweetAction icon={Retweet} value={props.value?.retweet} />
            <TweetAction 
                icon={isShown ? heartIcon : Reacti} 
                value={isShown ? +props.value.react + 1 : props.value?.react } 
                handleClick={changeValue}
            />
            <TweetAction icon={Share} value={props.value?.share} />
        </div>
    )
}
