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
      itemList: [],
      category: "ALL",
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/productItemListData.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ itemList: res.data });
      });
  }

  titleChange = (contents) => {
    const isDefaultList =
      contents === "ALL" || contents === "NEW ARRIVAL" || contents === "SALE";
    const isNavList = isDefaultList ? DEFAULT_LIST : LIST_OBJ[contents];
    const { title, navList } = this.state;

    this.setState({
      title: isNavList ? contents : title,
      navList: isNavList ? isNavList : navList,
      category: contents,
    });
  };

  render() {
    const { title, navList, itemList, category } = this.state;
    const isDefaultList =
      title === "ALL" || title === "NEW ARRIVAL" || title === "SALE";
    const isDefault = isDefaultList ? DEFAULT_LIST : navList;

    return (
      <div className="Product">
        <h2
          className={(title === "CLEARANCE" || title === "SALE") && "h2Orange"}
        >
          {title}
        </h2>
        <div className="category">
          <ul>
            {isDefault?.map((content, index) => (
              <ProductNavList
                key={index}
                content={content}
                index={index}
                nameChange={(contents) => this.titleChange(contents)}
                checkTitle={category}
              />
            ))}
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
        <ul>
          {itemList?.map((item, idx) => (
            <ItemList
              key={item.product_name + idx}
              itemSrc={item.thumbnail_image}
              itemHoverSrc={item.hover_image}
              itemName={item.product_name}
              itemPrice={item.price}
              itemSalePrice={item.sale_price}
              itemSubText={item.sub_text}
            />
          ))}
        </ul>
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
