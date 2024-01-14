import React, { useState, useRef, useEffect } from "react";
import "./PromptBox.css";

function PromptBox() {
  // box to take in prompts with plus next to it (submit button)

  const [text, setText] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    // Automatically focus the input when the component is mounted
    inputRef.current.focus();
  }, []);

  const endpoint = 'http://127.0.0.1:8000/add/';

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

    const handleKeyPress = async (e) => {
        if (e.key === 'Enter') {
        try {
            await fetch(endpoint+encodeURIComponent(text));
        } catch (error) {
            console.error("Error sending data:", error);
        }
    }
    };

  return (
    <form>
      <input ref={inputRef} className="promptBox-inputForm" placeholder="Add Item(s) " onChange={handleTextChange} onKeyPress={handleKeyPress}></input>
    </form>
  );
}

export default PromptBox;

