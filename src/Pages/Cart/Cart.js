import React from "react";
import CartList from "./Components/CartList/CartList";
import "./Cart.scss";

class Cart extends React.Component {
  render() {
    return (
      <div className="Cart">
        <div className="cartTitle">
          <ul>
            <li>국내배송상품 (0)</li>
            <li>해외배송상품 (0)</li>
            <p>장바구니에 담긴 상품은 10일 동안 보관됩니다.</p>
          </ul>
        </div>
        <div className="cartList">
          <ul>
            <CartList />
          </ul>
        </div>
        <div className="cartPrice"></div>
        <div className="cartButton"></div>
      </div>
    );
  }
}

export default Cart;
