import React from "react";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        {this.props.name ? (
          <h2>Hello, {this.props.name}</h2>
        ) : (
          <h2>Hello World!</h2>
        )}
      </div>
    );
  }
}
