import React from "react";
import CartList from "./Components/CartList/CartList";
import "./Cart.scss";

class Cart extends React.Component {
  state = {
    cartList: [],
  };

  componentDidMount() {
    fetch("/data/cartListData.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ cartList: res.data });
      });
  }

  handleDelete = (name) => {
    const { cartList } = this.state;

    const filteredList = cartList.filter((content) => content.name !== name);
    this.setState({
      cartList: filteredList,
    });

    // fetch("/data/cartListData.json", {
    //   method: "DELETE",
    //   body: JSON.stringify({
    //     id: cartList[idx].id,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     cartList.filter((content) => !content[idx]);
    //   });
  };

  handlePlus = (idx) => {
    const { cartList } = this.state;
    const newCartList = cartList.length > 0 && [...cartList];
    newCartList[idx].quantity = newCartList[idx].quantity + 1;

    this.setState({
      cartList: newCartList,
    });
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

  calPrice = () => {
    const { cartList } = this.state;
    let totalPrice = 0;

    for (let i = 0; i < cartList.length; i++) {
      totalPrice += cartList[i].price * cartList[i].quantity;
    }

    return totalPrice.toLocaleString();
  };

  calSalePrice = () => {
    const { cartList } = this.state;
    let totalSalePrice = 0;

    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].sale_price !== 0) {
        totalSalePrice =
          (cartList[i].price - cartList[i].sale_price) * cartList[i].quantity;
      }
    }

    return totalSalePrice.toLocaleString();
  };

  calTotalPrice = () => {
    let totalPrice = 0;

    totalPrice =
      Number(this.calPrice().split(",").join("")) -
      Number(this.calSalePrice().split(",").join(""));
    return totalPrice.toLocaleString();
  };

  render() {
    const { cartList } = this.state;

    return (
      <div className="Cart">
        <div className="cartTitle">
          <ul>
            <li>국내배송상품 ({cartList.length})</li>
            <li>해외배송상품 (0)</li>
            <p>장바구니에 담긴 상품은 10일 동안 보관됩니다.</p>
          </ul>
        </div>
        <div className="cartList">
          <ul>
            {cartList?.map((content, i) => (
              <CartList
                key={content.name}
                idx={i}
                name={content.name}
                price={content.price}
                salePrice={content.sale_price}
                amount={content.quantity}
                thumbnail={content.thumbnail_image}
                handleDelete={this.handleDelete}
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
            <p>{this.calPrice()}원</p>
            <p>+ 0원</p>
            <p>{this.calSalePrice()}원</p>
            <p>{this.calTotalPrice()}원</p>
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
