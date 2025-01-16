import React from "react";
import Person from "./components/Person";

class Day1 extends React.Component {
  constructor() {
    super();
    // Model: State of this component
    this.state = {
      name: "Mr. Pounds",
    };

    this.changeName = this.changeName.bind(this);
  }

  // controller
  changeName() {
    if (this.state.name === "Mr. Pounds") {
      // change the name in our state to Rowan
      this.setState({
        name: "Rowan",
      });
    } else if (this.state.name === "Rowan") {
      this.setState({
        name: "Christian",
      });
    } else {
      this.setState({
        name: "Mr. Pounds",
      });
    }
  }

  // View
  render() {
    return (
    <div className="center-screen">
    <Person  changeName={this.changeName} name={this.state.name} />
    </div>);
  }
}

export default Day1;
