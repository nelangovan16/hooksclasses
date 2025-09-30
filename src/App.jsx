import React, { useState } from "react";
import "./App.css";
const items = [
  "Apple", "Banana", "Orange", "Carrot", "Lettuce",
  "Tomato", "Grapes", "Broccoli", "Strawberry", "Cucumber"
];
function getRandomItems(count = 5) {
  return Array.from({ length: count }, () => items[Math.floor(Math.random() * items.length)]);
}
function Search({ searchText, setSearchText, inStockOnly, setInStockOnly }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search fruits & veggies..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
        />
        Only show fresh items
      </label>
    </div>
  );
}
function List({ lis, searchText, inStockOnly }) {
  const filteredList = lis.filter(
    (item) =>
      item.toLowerCase().includes(searchText.toLowerCase()) &&
      (!inStockOnly || Math.random() > 0.3) 
  );

  return (
    <div className="list">
      {filteredList.length === 0 ? (
        <p>No items found.</p>
      ) : (
        filteredList.map((item, index) => (
          <p key={index}>{item}</p>
        ))
      )}
    </div>
  );
}
export default function App() {
  const [message, setMessage] = useState("");
  const [searchText, setSearchText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [itemsList, setItemsList] = useState(getRandomItems());

  const changeBackground = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
    setMessage("Background Active");
  };

  const handleEmojiClick = (emojiName) => {
    setMessage("Picture Active");
    setItemsList(getRandomItems());
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h1 className="main-heading">React is Fun</h1>

      {}
      <div className="emoji-section">
        <button onClick={() => handleEmojiClick("🎉")}>🎉</button>
        <button onClick={() => handleEmojiClick("🦄")}>🦄</button>
        <button onClick={() => handleEmojiClick("🔥")}>🔥</button>
      </div>

      {}
      <button className="bg-button" onClick={changeBackground}>
        Change Background
      </button>

      {}
      <p className="message">{message}</p>

      {}
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
      />
      <List lis={itemsList} searchText={searchText} inStockOnly={inStockOnly} />
    </div>
  );
}
