import React from "react";
import "./ItemList.scss";

class ItemList extends React.Component {
  render() {
    const {
      itemSrc,
      itemHoverSrc,
      itemName,
      itemPrice,
      itemSalePrice,
      itemSubText,
    } = this.props;

    return (
      <li className="ItemList">
        <div className="itemImage">
          <a href="">
            <img className="imgPic" alt="Item Pic" src={itemSrc} />
            {itemHoverSrc && (
              <img
                className="imgHover"
                alt="Item Pic Hover"
                src={itemHoverSrc}
              />
            )}
          </a>
        </div>
        <div className="itemInfo">
          <a href="">
            <span>{itemName}</span>
            <span className={itemSalePrice ? "price priceLineOn" : "price"}>
              {itemPrice.toLocaleString()}원
            </span>
            {itemSalePrice && (
              <span className="discountPrice">
                {itemSalePrice.toLocaleString()}원
              </span>
            )}
            {itemSubText && <span className="subText">{itemSubText}</span>}
          </a>
        </div>
      </li>
    );
  }
}

export default ItemList;
