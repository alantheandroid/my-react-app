import React from "react";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My Awesome Application</h1>
        <Welcome name="Jimmy" />
        <Counter initialValue={30} incrementBy={2} timeout={500} />
        <Clock />
      </div>
    );
  }
}
