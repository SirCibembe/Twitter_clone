export default function TweetAction(props) {
    return (
        <div className="tweet-action">
            <img 
                onClick={props.handleClick}
                src={props.icon} 
                alt="" 
                className="rounded-full hover:rounded-lg transition duration-300 ease-in-out hover:cursor-pointer hover:"
            />
            <p>{props.value}</p>
        </div>
    )
}