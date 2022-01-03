import { useState } from "react";
import "./styles.css";

var foodDict = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🫐": "Blueberries",
  "🥝": "Kiwi Fruit",
  "🍅": "Tomato",
  "🫒": "Olive",
  "🥥": "Coconut",
  "🥑": "Avocado",
  "🍆": "Eggplant",
  "🥔": "Potato",
  "🥕": "Carrot",
  "🌽": "Ear of Corn",
  "🌶️": "Hot Pepper"
};
// list of keys from object dict
const emojiKnown = Object.keys(foodDict);

export default function App() {
  //------input Handler & state

  var [meaning, setMeaning] = useState("");
  function changeHandler(event) {
    var userInput = event.target.value;
    meaning = foodDict[userInput];
    if (userInput === undefined) {
      meaning = "No such valid input";
    }
    setMeaning(meaning);
  }
  function clickHandler(item) {
    meaning = foodDict[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 id="heading">IIInside ouTTT!</h1>

      <input
        onChange={changeHandler}
        id="input-styling"
        placeholder="paste any food emoji"
      />

      <h2 id="output">{meaning}</h2>

      <small>or select any food-emoji from below</small>

      {emojiKnown.map(function (item) {
        return (
          <span onClick={() => clickHandler(item)} id="emojishow" key={item}>
            {item}
          </span>
        );
      })}
    </div>
  );
}
