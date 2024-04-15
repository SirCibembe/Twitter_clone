import TweetAvatar from "./TweetAvatar";
import TweetContent from "./TweetContent";
import { useForm } from "react-hook-form";

export default function Tweet (props){
    return (
        <div className="tweet">
            <TweetAvatar value={props.table.avatar}/>
            <TweetContent value={props.table.content}/>
            
        </div>
    )
}