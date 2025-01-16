import React from "react";
import Day1 from "./Day1";
import Day2 from "./Day2";
import "./index.css"

class App extends React.Component {
  constructor() {
    super();
    // Model: State of our app
    this.state = {
      day: null,
    };

    this.changeDay = this.changeDay.bind(this);
  }

  // controller
  changeDay(e) {
    const day = e.target.innerHTML.replace(" ", "");
    this.setState({
      day,
    });
  }

  // View
  render() {
    return this.state.day === "Day1" ? (
      <Day1 />
    ) : this.state.day === "Day2" ? (
      <Day2 />
    ) : (
      <>
        <div
          className="center-screen"
        >
          <button onClick={(e) => this.changeDay(e)}>Day 1</button>
          <button onClick={(e) => this.changeDay(e)}>Day 2</button>
        </div>
      </>
    );
  }
}

export default App;
