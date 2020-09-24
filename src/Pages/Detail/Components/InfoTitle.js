import React from "react";

class InfoTitle extends React.Component {
  render() {
    const { handler, active, title } = this.props;
    return (
      <div onClick={handler}>
        <span className="infoTitle">{title}</span>
        <span className="plusMinus">{active ? "-" : "+"}</span>
      </div>
    );
  }
}

export default InfoTitle;
