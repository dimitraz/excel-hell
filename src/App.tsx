import React, { useState } from "react";
import "./App.css";
import "animate.css";

import Cursor from "./components/cursor";
import InputBorder from "./components/border";
import Draggable from "react-draggable";

function App() {
  const [selected, setSelected] = useState({
    show: false,
  });

  const handleChange = (e: any) => {
    if (e.target.value === "five") {
      setSelected({ show: true });
    } else {
      setSelected({ show: false });
    }
  };

  return (
    <div className="App wrapper">
      <Cursor />

      <p className="marquee">
        <span className="glow">
          Congratulations, you are the 9999th user of this website!
        </span>
      </p>

      <h1 className="rainbow animate__animated animate__wobble">
        Welcome to my page!
      </h1>

      <div className="content">
        <InputBorder />
        <p>
          <img src="https://trashparadise.neocities.org/pegasus.gif" alt="" />
        </p>
        <p>
          This is a little exercise to brush up on React hooks and Typescript.
          Look at all of the checkboxes and radios!
        </p>
        <InputBorder />
        <p>
          By the way: the page you're currently on was built on 07-09-2022 .
          Don't get too excited, we even have dropdowns here:
        </p>
        <p>
          <label htmlFor="cars">Choose an option:</label>
          <select onChange={handleChange} name="cars" id="cars">
            <option value="one">hello</option>
            <option value="two">not much</option>
            <option value="three">is here</option>
            <option value="four">just yet</option>
            <option value="five">
              imagine if this displayed conditional data?
            </option>
          </select>
        </p>
      </div>

      <div className="clown-wrapper">
        {selected.show ? (
          <Draggable>
            <div className="clown"> </div>
          </Draggable>
        ) : (
          <div className="empty-hack"></div>
        )}
      </div>
    </div>
  );
}

export default App;
