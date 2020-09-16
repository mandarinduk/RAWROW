import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        <div className="navWrapper">
          <div className="navPopup">
            <p>
              <a href="http://localhost:3000/">
                오직 이곳에서만, 로우로우
                <span> 써비스</span>
              </a>
            </p>
            <div>
              <span className="closeBtnOne" />
              <span className="closeBtnTwo" />
            </div>
          </div>
          <div className="navContent">
            <div className="navHome">
              <a href="main">
                <img
                  src="https://www.rawrow.com/web/upload/mundane/logo.png"
                  alt="logo"
                />
                <span />
              </a>
            </div>
            <ul className="navCenter">
              <li className="navCenterList">
                <a href="main">PRODUCT</a>
                <ul className="productItems">
                  <li>NEW ARRIVAL</li>
                  <li>R BAG</li>
                  <li>R EYE</li>
                  <li>R TRUNK</li>
                  <li>ACCESSORY</li>
                  <li className="orangeItems">CLEARANCE</li>
                  <li className="orangeItems">SALE</li>
                </ul>
              </li>
              <li className="navCenterList">
                <a href="main">EXPLORE</a>
                <ul className="exploreItems">
                  <li>SERIES</li>
                  <li>PROJECT</li>
                  <li>NEWS</li>
                  <li>STOCKIST</li>
                  <li>ABOUT</li>
                </ul>
              </li>
              <li className="navCenterList">
                <a href="main">CENTER</a>
                <ul className="centerItems">
                  <li>Q&A</li>
                  <li>FAQ</li>
                  <li>LIFETIME WARRANTY</li>
                  <li>REVIEW</li>
                  <li>RENTAL SERVICE</li>
                </ul>
              </li>
            </ul>
            <ul className="navRight">
              <li>SEARCH</li>
              <li>MY PAGE</li>
              <li>LOGIN</li>
              <li>CART</li>
              <li>KR /</li>
            </ul>
          </div>
        </div>
        <div className="search">
          <form>
            <input type="text" placeholder="검색어를 입력하세요" />
            <div>
              <button />
              <div>
                <span className="closeBtnOne" />
                <span className="closeBtnTwo" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Nav;
