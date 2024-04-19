
import React, { useState } from "react";

export default function TweetEditorInput() {
  const [text, setText] = useState("");
  const [showError, setShowError] = useState(false);

  const handleChange = (event) => {
    const inputText = event.target.value;
    setText(inputText); 
    if (inputText.length > 180) {
      setShowError(true); 
    } else {
      setShowError(false);
    }
  };

  return (
    <div>
      <input
        className="tweet-editor-input"
        placeholder="What's happening?"
        value={text}
        onChange={handleChange}
      />
      {showError && <p style={{ color: "red" }}>You have exceeded the limit of 180 characters!</p>}
    </div>
  );
}