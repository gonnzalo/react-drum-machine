import React, { Component } from "react";
import "./App.css";
import samples from "./samples";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: ""
    };

    this.handleKeys = this.handleKeys.bind(this);
    this.handleT = this.handleT.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeys);
    document.addEventListener("transitionend", this.handleT);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeys);
    document.addEventListener("transitionend", this.handleT);
  }

  handleKeys(event) {
    const { key } = event;
    if (samples[key]) {
      samples[key].currentTime = 0;
      samples[key].play();
    }
    this.setState({ key });
  }

  handleT(event) {
    if (event.propertyName === "transform") this.setState({ key: "" });
  }

  render() {
    const { key } = this.state;
    return (
      <div>
        <header>
          <h1>Drum Machine</h1>
        </header>
        <div className="keys">
          <div className={`key ${key === "a" ? "active" : ""}`}>
            <kbd>A</kbd>
            <span>Hit Hat</span>
          </div>
          <div className={`key ${key === "s" ? "active" : ""}`}>
            <kbd>S</kbd>
            <span>Kick</span>
          </div>
          <div className={`key ${key === "d" ? "active" : ""}`}>
            <kbd>D</kbd>
            <span>Snare</span>
          </div>
          <div className={`key ${key === "f" ? "active" : ""}`}>
            <kbd>F</kbd>
            <span>Hit Hat</span>
          </div>
          <div className={`key ${key === "g" ? "active" : ""}`}>
            <kbd>G</kbd>
            <span>Crash</span>
          </div>
          <div className={`key ${key === "h" ? "active" : ""}`}>
            <kbd>H</kbd>
            <span>Tom</span>
          </div>
          <div className={`key ${key === "j" ? "active" : ""}`}>
            <kbd>J</kbd>
            <span>Tom</span>
          </div>
          <div className={`key ${key === "k" ? "active" : ""}`}>
            <kbd>K</kbd>
            <span>Tom</span>
          </div>
          <div className={`key ${key === "l" ? "active" : ""}`}>
            <kbd>L</kbd>
            <span>Ride</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
