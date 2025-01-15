import React from "react";
import Person from "./Person";

class App extends React.Component {
  constructor() {
    super();
    // Model: State of our app
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
    return <Person changeName={this.changeName} name={this.state.name} />;
  }
}

export default App;
