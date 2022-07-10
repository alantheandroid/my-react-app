import React from "react";
import { HelloWorld } from "./HelloWorld";

export class App extends React.Component {
  render() {
    return (
      <div>
        <hi>My Awesome Application</hi>
        <HelloWorld />
      </div>
    );
  }
}
