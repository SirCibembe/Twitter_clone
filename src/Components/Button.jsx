
import React, { useState } from "react";

export default function Button() {
    const [buttonSize, setButtonSize] = useState(16);
    const [isReduced, setIsReduced] = useState(false);

    const handleClick = () => {
        setTimeout(() => {
            setButtonSize(buttonSize * 0.9)
        }, 20)
        // if (!isReduced) {
        //     setButtonSize(16);
        // } else {
        //     setButtonSize(buttonSize * 0.9);
        // }
        // setIsReduced(!isReduced);
        //setButtonSize(16)
    };

    return (
        <button 
            className="text-transform: capitalize px-4 py-2 rounded-full bg-[#1D9BF0] text-white text-sm" 
            style={{ fontSize: buttonSize }} 
            onClick={handleClick} 
        >
            Tweet
        </button>
    );
}
