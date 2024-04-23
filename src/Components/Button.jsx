import React, { useState } from "react";

export default function Button() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if (!clicked) {
            setClicked(true);
            setTimeout(() => {
                setClicked(false);
            }, 1000); // Retour à l'état initial après 1000 millisecondes (1 seconde)
        }
    };

    const buttonStyle = {
        fontSize: "1rem",
        width: "100px" ,
        heigth:"20px",
        padding: "0.5rem 1rem",
        borderRadius: "9999px",
        backgroundColor: "#1D9BF0",
        color: "white",
        transition: "transform 0.955s ",
        transform: clicked ? "translateX(-10px)" : "translateX(0)",
    };

    return (
        <button
            className="text-transform:capitalize"
            style={buttonStyle}
            onClick={handleClick}
        >
            Tweet
        </button>
    );
}