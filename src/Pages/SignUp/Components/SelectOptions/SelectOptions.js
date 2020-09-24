import React, { Component } from "react";

class SelectOptions extends Component {
  render() {
    const { children } = this.props;
    return <option>{children}</option>;
  }
}

export default SelectOptions;
