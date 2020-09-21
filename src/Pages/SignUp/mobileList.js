import React, { Component } from "react";

class MobileList extends Component {
  render() {
    const { mobileName, mobileId } = this.props;
    return (
      <>
        <option value={mobileId}>{mobileName}</option>
      </>
    );
  }
}

export default MobileList;
