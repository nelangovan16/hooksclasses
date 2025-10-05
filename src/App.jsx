import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [message, setMessage] = useState("");
  const [emojiName, setEmojiName] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff");

  const changeBackground = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
    setMessage("Background Active");
    setEmojiName("");
  };

  const handleEmojiClick = (name) => {
    setEmojiName(name);
    setMessage("Picture Active");
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }} onClick={changeBackground}>
      <h1 className="main-heading">React is Fun!!</h1>
      <h2 className="sub-heading">I am writing JSX</h2>

      <div className="emoji-section" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => handleEmojiClick("Smiling")}>😀</button>
        <button onClick={() => handleEmojiClick("Party Popper")}>🎉</button>
        <button onClick={() => handleEmojiClick("Dancing Woman")}>💃</button>
      </div>

      {emojiName && <p className="message">{emojiName}</p>}
      <p className="message">{message}</p>
    </div>
  );
}
