import React from "react";
import { HelloWorld } from "./HelloWorld";
/* import { Welcome } from "./Welcome"; */

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My Awesome Application</h1>
        <HelloWorld renderGreeting={true} />
      </div>
    );
  }
}
