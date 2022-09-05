import React, { useState } from "react";
import "./styles.css";

var flagDictionary = {
  "🇦🇪": "United Arab Emirates",
  "🇦🇺": "Australia",
  "🇧🇩": "Bangladesh",
  "🇨🇦": "Canada",
  "🇫🇷": "France",
  "🇬🇧": "United Kingdom",
  "🇮🇳": "India",
  "🇯🇵": "Japan",
  "🇲🇾": "Malaysia",
  "🇳🇵": "Nepal",
  "🇳🇿": "New Zealand",
  "🇵🇰": "Pakistan",
  "🇸🇬": "Singapore",
  "🇺🇸": "United States",
  "🇿🇦": "South Africa"
};

export default function App() {
  var flagarray = Object.keys(flagDictionary);
  const [country, setcountry] = useState("Country will appear here..");

  function ClickHandler(item) {
    var country = flagDictionary[item];
    setcountry(country);
  }

  function changeHandler(event) {
    var flag = event.target.value;
    if (flag === "" || flag === " ") {
      var country = "Country will appear here..";
    } else if (!(flag in flagDictionary)) {
      country = "Oops! We didn't know this flag existed!";
    } else {
      country = flagDictionary[flag];
    }
    setcountry(country);
  }
  return (
    <div className="App">
      <nav>
        <h1>FLAGS OF THE WORLD</h1>
      </nav>

      <main>
        <div className="main-question-text">
          <p>Want to know which country a flag represents?</p>
          <p>Type a flag emoticon below or select from Library!</p>
        </div>
        <input
          className="main-input-flag"
          type="text"
          onChange={changeHandler}
        ></input>
        <p>
          <strong className="main-diplay-country">{country}</strong>
        </p>
        <div className="list-container" style={{ maxWidth: "700px" }}>
          <ul>
            {flagarray.map((item, index) => (
              <li
                style={{
                  display: "inline",
                  padding: "1rem",
                  fontSize: "3rem",
                  cursor: "pointer"
                }}
                onClick={() => ClickHandler(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer>
        <p>
          source of flag information:{" "}
          <a
            className="footer-link"
            href="https://emojipedia.org/flags/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            emojipedia
          </a>
        </p>
      </footer>
    </div>
  );
}
