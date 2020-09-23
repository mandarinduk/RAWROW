import React from "react";
import ProductNavList from "./Components/ProductNavList/ProductNavList";
import ItemList from "./Components/ItemList/ItemList";
import { api } from "../../config/api";
import "./Product.scss";

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "ALL",
      navList: DEFAULT_LIST,
      itemList: [],
      category: "ALL",
      subCategoryId: "ALL",
    };
  }

  componentDidMount() {
    fetch(`${api}/products`)
      // fetch("http://localhost:3000/data/productItemListData.json")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        this.setState({ itemList: res.data });
      });
  }

  componentDidUpdate(preProps, preState) {
    const { category, subCategoryId } = this.state;
    console.log("this.preState.category: ", preState.category);
    console.log("this.state.category: ", category);
    if (preState.category !== category) {
      fetch(
        `${api}/p?category=${CATEGORY_OBJ[category]}&subcategory=${SUB_CATEGORY_OBJ[subCategoryId]}`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res, "update");
          this.setState({ itemList: res.data });
        });
    }
  }

  titleChange = (contents) => {
    const OVERLAP_CATEGORY =
      contents === "BACKPACK" ||
      contents === "TOTE" ||
      contents === "CROSS" ||
      contents === "POUCH";
    const isDefaultList =
      contents === "ALL" || contents === "NEW ARRIVAL" || contents === "SALE";
    const isNavList = isDefaultList ? DEFAULT_LIST : LIST_OBJ[contents];
    const { title, navList } = this.state;

    this.setState({
      title: isNavList ? contents : title,
      navList: isNavList ? isNavList : navList,
      category: contents,
      subCategoryId:
        OVERLAP_CATEGORY && title === "CLEARANCE" ? contents + 1 : contents,
    });
  };

  // test = () => {
  //   fetch("http://10.58.5.137:8002/user/login", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       userid: "hellrowworld",
  //       password: "1q2w3e4r",
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((result) => console.log("결과: ", result))
  //     .catch((err) => console.log(err));
  // };

  render() {
    const { title, navList, itemList, category } = this.state;
    const isDefaultList =
      title === "ALL" || title === "NEW ARRIVAL" || title === "SALE";
    const isDefault = isDefaultList ? DEFAULT_LIST : navList;
    console.log(this.state.subCategoryId);
    return (
      <div className="Product">
        <div className="titleCenter">
          <div
            className={
              title === "CLEARANCE" || title === "SALE"
                ? "h2Orange title"
                : "title"
            }
          >
            {title}
            <div
              className="titleBackground"
              // style={{ transform: "translate(0%, 0%)" }}
            ></div>
          </div>
        </div>
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
              key={item.name + idx}
              itemSrc={item.thumbnail}
              itemHoverSrc={item.hover_image}
              itemName={item.name}
              itemPrice={item.price}
              itemSalePrice={item.sale_price}
              itemSubText={item.sub_text}
              itemLastText={title}
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

const CATEGORY_OBJ = {
  "NEW ARRIVAL": 1,
  "R BAG": 2,
  "R EYE": 3,
  "R TRUNK": 4,
  ACCESSORY: 5,
  CLEARANCE: 6,
  SALE: 7,
};

const SUB_CATEGORY_OBJ = {
  BACKPACK: 1,
  TOTE: 2,
  CROSS: 3,
  POUCH: 4,
  "ULTRA THIN": 5,
  THIN: 6,
  CONDENSE: 7,
  BOLD: 8,
  "R SUN": 9,
  "37L": 10,
  "63L": 11,
  "72L": 12,
  "88L": 13,
  SET: 14,
  "TRAVEL ACC": 15,
  COLLABORATION: 16,
  WALLET: 17,
  ETC: 18,
  BACKPACK1: 19,
  CROSS1: 20,
  TOTE1: 21,
  POUCH1: 22,
  TRUNK: 23,
};
