import React from "react";
import "./CartList.scss";

class CartList extends React.Component {
  render() {
    return (
      <li className="CartList">
        <div className="thumbnail">
          <input type="checkbox" />
          <a href="">
            <img
              alt="thumbImg"
              src="https://rawrow.com/web/product/tiny/202009/f23332a67f46de3cdd7062a781341615.jpg"
            />
          </a>
        </div>
        <div className="listInfo">
          <a href="">STRING CANVAS BACKPACK 701 15 CHARCOAL</a>
          <div className="deleteBox">
            <span className="delete1"></span>
            <span className="delete2"></span>
          </div>
        </div>
      </li>
    );
  }
}

export default CartList;
