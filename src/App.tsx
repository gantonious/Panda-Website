import React from "react";
import logo from "./panda_1024.png";
import subreddit from "./assets/subreddit.png";
import panda1 from "./assets/panda1.png";
import panda2 from "./assets/panda2.png";
import panda3 from "./assets/panda3.png";
import panda4 from "./assets/panda4.png";
import panda5 from "./assets/panda5.png";
import "./App.css";

type SectionProps = {
  title: string;
};

function Section(props: SectionProps) {
  return (
    <div className="Section">
      <div className="SectionContent">
        <p className="App-title">
          <strong>{props.title}</strong>
        </p>
        <p>Look at this nice subreddit</p>
      </div>

      <div className="ImageContent">
        <img src={subreddit} width="300" />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-title">
          <strong>Panda</strong> for Reddit
        </p>
        <p className="App-title-subtext">
          A new way to experience Reddit on iOS coming soon
        </p>

        <div className="app-images">
          <div className="app-image-container">
            <img className="app-image" src={panda1} />
          </div>
          <div className="app-image-container">
            <img className="app-image" src={panda3} />
          </div>
          <div className="app-image-container">
            <img className="app-image" src={panda2} />
          </div>
          <div className="app-image-container">
            <img className="app-image" src={panda4} />
          </div>
          <div className="app-image-container">
            <img className="app-image" src={panda5} />
          </div>
        </div>

        {/* <p className="footer">Copyright 2020 © George Antonious</p> */}
      </header>
    </div>
  );
}

export default App;
