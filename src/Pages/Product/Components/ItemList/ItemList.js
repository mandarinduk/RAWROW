import React from "react";
import { Link } from "react-router-dom";
import "./ItemList.scss";

class ItemList extends React.Component {
  render() {
    const {
      itemId,
      itemSrc,
      itemHoverSrc,
      itemName,
      itemPrice,
      itemSalePrice,
      itemSubText,
      itemLastText,
    } = this.props;

    return (
      <div className="ItemList">
        {this.props.length !== 0 && (
          <li className="listEffect">
            <div className="itemImage">
              <Link to={`/detail/${itemId}`}>
                <img className="imgPic" alt="Item Pic" src={itemSrc} />
                {itemHoverSrc && (
                  <img
                    className="imgHover"
                    alt="Item Pic Hover"
                    src={itemHoverSrc}
                  />
                )}
              </Link>
            </div>
            <div className="itemInfo">
              <Link to={`/detail/${itemId}`}>
                <span>{itemName}</span>
                <span className={itemSalePrice ? "price priceLineOn" : "price"}>
                  {itemPrice && itemPrice.toLocaleString()}원
                </span>
                {itemSalePrice !== 0 && (
                  <span className="discountPrice">
                    {itemSalePrice.toLocaleString()}원
                  </span>
                )}
                {itemSubText && <span className="subText">{itemSubText}</span>}
                {itemLastText === "CLEARANCE" && (
                  <span className="lastText">LAST CHANCE</span>
                )}
              </Link>
            </div>
          </li>
        )}
      </div>
    );
  }
}

export default ItemList;
