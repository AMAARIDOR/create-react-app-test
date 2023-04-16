import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  render() {
    const characters = [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspiring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
      {
        name: "Amaari",
        job: "Developer",
      },
    ];

    return (
      <React.StrictMode>
        <div className="Container">
          <Table characterData={characters} />
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
