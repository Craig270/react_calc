import React from "react";

import "./App.css";

function App() {
  const [text, setText] = React.useState({
    firstName: "",
    lastName: " ",
    clicks: 0,
  });
  console.log(text);
  function handleChange(event) {
    setText((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function doMath(e) {
    e.preventDefault();
    setText((prevData) => {
      return {
        ...prevData,
        [e.target.value]: text.clicks + 1,
      };
    });
  }

  return (
    <div className="App">
      <h1>This is App.js</h1>
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
        />
      </form>
      <h3>Try this math worker below:</h3>
      <form>
        <input
          type="text"
          placeholder="Math prob"
          onChange={handleChange}
          name="clicks"
        />
        <button type="submit" onClick={doMath}>
          Do math with numbers
        </button>
      </form>
    </div>
  );
}

export default App;
