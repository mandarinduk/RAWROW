import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      searchOn: false,
      popupOn: true,
      searchResult: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/searchData.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ searchResult: result.data });
      });
  }

  handleSearch = () => {
    this.setState((prev) => {
      return { searchOn: !prev.searchOn };
    });
  };

  handlePopup = () => {
    this.setState((prev) => {
      return { popupOn: !prev.popupOn };
    });
  };

  render() {
    const { searchOn, popupOn, searchResult } = this.state;
    return (
      <div className="Nav">
        <div className="navWrapper">
          <div className={popupOn ? "navPopup" : "popupClose"}>
            <p>
              <a href="/main">
                오직 이곳에서만, 로우로우
                <span> 써비스</span>
              </a>
            </p>
            <div onClick={this.handlePopup}>
              <span />
              <span />
            </div>
          </div>
          <div className="navContent">
            <div className="navHome">
              <a href="/main">
                <img
                  src="https://www.rawrow.com/web/upload/mundane/logo.png"
                  alt="logo"
                />
                <span />
              </a>
            </div>
            <ul className="navCenter">
              <li className="navCenterList">
                <a href="main" className="">
                  PRODUCT
                </a>
                <ul className="productItems">
                  {NAV_TITLE.PRODUCT.map((title, i) => {
                    return (
                      <li key={i} className={i > 4 ? "orangeItems" : ""}>
                        {title}
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="navCenterList">
                <a href="main">EXPLORE</a>
                <ul className="exploreItems">
                  {NAV_TITLE.EXPLORE.map((title, i) => {
                    return <li key={i}>{title}</li>;
                  })}
                </ul>
              </li>
              <li className="navCenterList">
                <a href="main">CENTER</a>
                <ul className="centerItems">
                  {NAV_TITLE.CENTER.map((title, i) => {
                    return <li key={i}>{title}</li>;
                  })}
                </ul>
              </li>
            </ul>
            <ul className="navRight">
              <li onClick={this.handleSearch}>SEARCH</li>
              <li>MY PAGE</li>
              <li>LOGIN</li>
              <li>CART</li>
              <li>KR /</li>
            </ul>
          </div>
          <div className={searchOn ? "search searchOn" : "search"}>
            <form>
              <input type="text" placeholder="검색어를 입력하세요" />
              <div>
                <div onClick={this.handleSearch}>
                  <span className="closeBtnOne" />
                  <span className="closeBtnTwo" />
                </div>
              </div>
            </form>
          </div>
          <div className="searchResult searchNone">
            {searchResult?.map((el) => {
              return (
                <div key={el.id} className="resultBox">
                  <img alt="resultImage" src={el.image} />
                  <span className="category">{el.category}</span>
                  <span className="searchName">{el.name}</span>
                  <div>
                    <span className="price">{el.price}원</span>
                    <span className="salePrice">{el.sale_price}원</span>
                  </div>
                  <span className="buyNow">BUYNOW</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;

const NAV_TITLE = {
  PRODUCT: [
    "NEW ARRIVAL",
    "R BAG",
    "R EYE",
    "R TRUNK",
    "ACCESSORY",
    "CLEARANCE",
    "SALE",
  ],
  EXPLORE: ["SERIES", "PROJECT", "NEWS", "STOCKIST", "ABOUT"],
  CENTER: ["Q&A", "FAQ", "LIFETIME WARRANTY", "REVIEW", "RENTAL SERVICE"],
};
