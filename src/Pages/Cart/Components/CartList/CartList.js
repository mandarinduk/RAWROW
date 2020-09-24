import React from "react";
import "./CartList.scss";

class CartList extends React.Component {
  render() {
    const {
      amount,
      handlePlus,
      handleMinus,
      idx,
      name,
      price,
      salePrice,
      thumbnail,
    } = this.props;

    return (
      <li className="CartList">
        <div className="thumbnail">
          <input type="checkbox" />
          <a href="">
            <img alt="thumbImg" src={thumbnail} />
          </a>
        </div>
        <div className="listInfo">
          <a href="">{name}</a>
          <div className="deleteBox">
            <span className="delete1"></span>
            <span className="delete2"></span>
          </div>
          <span>
            <div className="minus" onClick={() => handleMinus(idx)}></div>
            <input type="text" value={amount} />
            <div className="plus" onClick={() => handlePlus(idx)}></div>
          </span>
          <span className={salePrice ? "price lineOn" : "price"}>
            {price.toLocaleString()}원
          </span>
          {salePrice !== 0 && (
            <span className="salePrice">{salePrice.toLocaleString()}원</span>
          )}
        </div>
        <div className="listPrice">
          <div>
            {((salePrice ? salePrice : price) * amount).toLocaleString()}원
          </div>
          <div>배송:기본배송 / 무료</div>
        </div>
      </li>
    );
  }
}

export default CartList;
