import React, { Component } from "react";

class RegionList extends Component {
  render() {
    const { regionName } = this.props;
    return (
      <>
        <option value="">{regionName}</option>
      </>
    );
  }
}

export default RegionList;
