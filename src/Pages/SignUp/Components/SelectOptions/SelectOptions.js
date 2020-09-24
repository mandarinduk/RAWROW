import React, { Component } from "react";

class SelectOptions extends Component {
  render() {
    const { value, children } = this.props;
    return <option value={value}>{children}</option>;
  }
}

export default SelectOptions;
