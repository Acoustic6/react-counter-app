import React, { Component } from "react";

class Counter extends Component {
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
    //this.state.count++; // this wont work
    // react is now aware that state's property was changed
    // we need to use base React Component's method:
    //this.setState();

    // this way we notify React the state has changed
    // react figures out what part of the state was changed and based on that it will sync DOM and virtual DOM
    // in Angular all browser events are monkey patched and it detects changes automatuically
    // in React we tell it explicitly what was changed

    this.setState({ count: this.state.count + 1 }); // properties in this call will ovverride existed properties of current state.
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
