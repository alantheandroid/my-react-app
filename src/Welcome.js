import React from "react";
import { HelloWorld } from "./HelloWorld";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        {!!this.props.name && <h2>Hello, {this.props.name}!</h2>}
        {!this.props.name && <HelloWorld renderGreeting />}
      </div>
    );
  }
}
