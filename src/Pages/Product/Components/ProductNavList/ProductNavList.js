import React from "react";

class ProductNavList extends React.Component {
  render() {
    const { content, nameChange, index, checkTitle } = this.props;

    return (
      <li
        className={checkTitle === content ? "productNav lineOn" : "productNav"}
        key={content}
        index={index}
        onClick={() => nameChange(content)}
      >
        <span
          className={
            (content === "CLEARANCE" || content === "SALE") && "colorOrange"
          }
        >
          {content}
        </span>
      </li>
    );
  }
}

export default ProductNavList;
