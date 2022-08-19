import React, { Component } from "react";

class Map extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;