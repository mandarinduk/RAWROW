import React from "react";
import CartList from "./Components/CartList/CartList";
import "./Cart.scss";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
  }

  componentDidMount() {
    fetch("/data/cartListData.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ cartList: res.data });
      });
  }

  handlePlus = (idx) => {
    const { cartList } = this.state;
    const newCartList = cartList.length > 0 && [...cartList];
    newCartList[idx].quantity = newCartList[idx].quantity + 1;

    this.setState({ cartList: newCartList });
  };

  handleMinus = (idx) => {
    const { cartList } = this.state;
    const newCartList = cartList.length > 0 && [...cartList];
    newCartList[idx].quantity =
      newCartList[idx].quantity > 1
        ? newCartList[idx].quantity - 1
        : newCartList[idx].quantity;

    this.setState({ cartList: newCartList });
  };

  render() {
    const { cartList } = this.state;

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
            {cartList?.map((content, i) => (
              <CartList
                key={i}
                idx={i}
                amount={content.quantity}
                handlePlus={this.handlePlus}
                handleMinus={this.handleMinus}
              />
            ))}
          </ul>
        </div>
        <div className="cartPrice">
          <div>
            <p>PRICE</p>
            <p>SHIPPING</p>
            <p>DISCOUNT SEE DETAIL</p>
            <p>TOTAL</p>
          </div>
          <div>
            <p>99,000원</p>
            <p>+ 0원</p>
            <p>0원</p>
            <p>{(`99000` * cartList.quantity).toLocaleString()}원</p>
          </div>
        </div>
        <div className="cartButtonBox">
          <div className="cartButton">ORDER</div>
        </div>
      </div>
    );
  }
}

export default Cart;
