import React, { Component } from "react";

class RegionList extends Component {
  render() {
    const { regionName } = this.props;
    return (
      <>
        <option>{regionName}</option>
      </>
    );
  }
}

export default RegionList;
