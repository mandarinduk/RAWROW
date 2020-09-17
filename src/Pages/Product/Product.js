import React from "react";
import ProductNavList from "./Components/ProductNavList/ProductNavList";
import ItemList from "./Components/ItemList/ItemList";
import "./Product.scss";

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "ALL",
      navList: DEFAULT_LIST,
    };
  }

  titleChange = (contents) => {
    if (
      contents === "ALL" ||
      contents === "NEW ARRIVAL" ||
      contents === "SALE"
    ) {
      this.setState({
        title: contents,
      });
    } else if (LIST_OBJ[contents]) {
      this.setState({
        title: contents,
        navList: LIST_OBJ[contents],
      });
    }
  };

  render() {
    const { title, navList } = this.state;

    return (
      <div className="Product">
        <h2
          className={(title === "CLEARANCE" || title === "SALE") && "h2Orange"}
        >
          {title}
        </h2>
        <div className="category">
          <ul>
            {title === "ALL" || title === "NEW ARRIVAL" || title === "SALE"
              ? DEFAULT_LIST?.map((content, index) => {
                  return (
                    <ProductNavList
                      key={index}
                      content={content}
                      index={index}
                      nameChange={(contents) => this.titleChange(contents)}
                      checkTitle={title}
                    />
                  );
                })
              : navList?.map((content, index) => {
                  return (
                    <ProductNavList
                      key={index}
                      content={content}
                      index={index}
                      nameChange={(contents) => this.titleChange(contents)}
                      checkTitle={title}
                    />
                  );
                })}
          </ul>
          <div>
            <select>
              <option>FILTER</option>
              <option>신상품</option>
              <option>인기순</option>
              <option>낮은가격순</option>
              <option>높은가격순</option>
            </select>
          </div>
        </div>
        <ItemList />
      </div>
    );
  }
}

export default Product;

const DEFAULT_LIST = [
  "ALL",
  "NEW ARRIVAL",
  "R BAG",
  "R EYE",
  "R TRUNK",
  "ACCESSORY",
  "CLEARANCE",
  "SALE",
];

const R_BAG = ["BACKPACK", "TOTE", "CROSS", "POUCH"];

const R_EYE = ["ULTRA THIN", "THIN", "CONDENSE", "BOLD", "R SUN"];

const R_TRUNK = [
  "37L",
  "63L",
  "72L",
  "88L",
  "92L",
  "SET",
  "TRAVEL ACC",
  "COLLABORATION",
];

const ACCESSORY = ["WALLET", "ETC"];

const CLEARANCE = ["BACKPACK", "CROSS", "TOTE", "POUCH", "TRUNK"];

const LIST_OBJ = {
  "R BAG": R_BAG,
  "R EYE": R_EYE,
  "R TRUNK": R_TRUNK,
  ACCESSORY: ACCESSORY,
  CLEARANCE: CLEARANCE,
};
