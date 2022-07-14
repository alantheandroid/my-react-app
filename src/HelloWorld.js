import React from "react";

export class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        {this.props.renderGreeting && <h2>Hello, World!</h2>}
        <p>What a beautiful day!</p>
      </div>
    );
  }
}
