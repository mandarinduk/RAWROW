import React, { Component } from "react";

class PhoneList extends Component {
  render() {
    const { phoneName, phoneId } = this.props;
    return (
      <>
        <option value={phoneId}>{phoneName}</option>
      </>
    );
  }
}

export default PhoneList;
