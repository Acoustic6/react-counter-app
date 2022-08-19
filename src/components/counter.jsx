import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  constructor() {
    super(); // this is not alowed before super()
    this.handleIncrement = this.handleIncrement.bind(this);
  }

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

  handleIncrement() {
    console.log("Increment Clicked", this);
    // console.log(this.state.count); this won't work like that!
    // obj.method(): this = obj
    // function(): this = window
    // function(): this = undefined (strict mode: on)
  }

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
