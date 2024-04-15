
import React, { useState } from "react";

export default function TweetEditorInput() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 150) {
      setText(inputText);
    }
  };

  return (
    <input
      className="tweet-editor-input "
      placeholder="What's happening?"
      value={text}
      onChange={handleChange}
    />
  );
}