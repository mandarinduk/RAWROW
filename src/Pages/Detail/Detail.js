import React from "react";
import InfoTitle from "./Components/InfoTitle";
import Review from "./Components/Review";
import { DETAIL_DATA, DESC_DATA, CHANGE_DATA } from "./data";
import "./Detail.scss";

class Detail extends React.Component {
  constructor() {
    super();

    this.state = {
      activeInfo: false,
      activeNotice: false,
      activePolicy: false,
      activeRelated: false,
      detail: [],
      count: 1,
    };
  }

  handleInfo = (idx) => {
    this.setState((prev) => {
      return {
        [ACTIVE_LIST[idx]]: !prev[ACTIVE_LIST[idx]],
      };
    });
  };

  changePrice = (num) => {
    if (!num) return 0;
    return num.toLocaleString();
  };

  handleCount = (e) => {
    const { innerText } = e.target;
    const { count } = this.state;

    if (count > 1 && innerText === "-") {
      this.setState({
        count: count - 1,
      });
    } else if (innerText === "+") {
      this.setState({
        count: count + 1,
      });
    }
  };

  componentDidMount() {
    fetch(`http://10.58.1.166:8002/detail/202`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          detail: result.data[0],
        });
      });
  }

  render() {
    const {
      detailimage,
      name: mainName,
      price: mainPrice,
      sale_price,
      point,
      sub_text,
      group_thumbnail,
    } = this.state.detail;

    const { orangeTitle, subTitle, noticeTitle, noticeContent } = DETAIL_DATA;

    const {
      activeInfo,
      activeNotice,
      activePolicy,
      activeRelated,
      detail,
      count,
    } = this.state;

    return (
      <div className="Detail">
        {detail && (
          <div className="detailContents">
            <div className="imageSection">
              <div className="productImage">
                {detailimage?.map((el, i) => {
                  return (
                    <img
                      key={i}
                      alt="detail"
                      src={
                        i === detailimage.length - 1
                          ? el.slice(2, el.length - 2)
                          : el.slice(2, el.length - 1)
                      }
                    />
                  );
                })}
              </div>
              <Review />
            </div>
            <div className="infoSection">
              <ul className="titleList">
                <li className="productTitle">{mainName}</li>
                {mainPrice && (
                  <li
                    className={
                      sale_price ? "mainPrice lineThrough" : "mainPrice"
                    }
                  >
                    {this.changePrice(mainPrice)}원
                  </li>
                )}
                {sale_price !== 0 && (
                  <li className="salePrice">
                    {sale_price && (
                      <span>{this.changePrice(sale_price)}원</span>
                    )}
                    <span>
                      {` ${parseInt(
                        ((mainPrice - sale_price) / mainPrice) * 100
                      )}%`}
                    </span>
                  </li>
                )}
                <li className="pointText">
                  {point && <span>{this.changePrice(point)}P</span>}
                  <span>
                    {` (${parseInt(
                      (point / (sale_price === 0 ? mainPrice : sale_price)) *
                        100
                    )}%)`}
                  </span>
                </li>
                {sub_text && <li className="subText">{sub_text}</li>}
              </ul>
              <div className="productColor">
                {group_thumbnail?.map((el, i) => {
                  return <img key={i} alt="img" src={el} />;
                })}
              </div>
              <div className="orderCounter">
                <div className="countTitle">{mainName}</div>
                <div className="counter">
                  <span onClick={this.handleCount}>-</span>
                  <span>{count}</span>
                  <span onClick={this.handleCount}>+</span>
                </div>
                <div className="pricePoint">
                  {mainPrice && (
                    <div>{this.changePrice(mainPrice * count)}원</div>
                  )}
                  {point && (
                    <div>{`(${this.changePrice(point * count)}P)`}</div>
                  )}
                </div>
              </div>
              {mainPrice && (
                <div className="finalPrice">{`총 상품금액 : ${this.changePrice(
                  (sale_price ? sale_price : mainPrice) * count
                )}원`}</div>
              )}
              <div className="orderBox">
                <div className="buyNow">BUY NOW</div>
                <div className="addCart">ADD TO CART</div>
              </div>
              <div className="description">
                <p>
                  <span className="orange bold">{orangeTitle}</span>
                  <span className="bold">{subTitle}</span>
                </p>
                {DESC_DATA?.map((el, i) => {
                  return (
                    <div key={i}>
                      <p className="bold">{el.contentTitle}</p>
                      <p>{el.content}</p>
                    </div>
                  );
                })}
              </div>
              <div className="information">
                <div className={activeInfo ? "infoBox activeInfo" : "infoBox"}>
                  <InfoTitle
                    handler={() => this.handleInfo(0)}
                    active={activeInfo}
                    title={"INFO"}
                  />
                  <p>MATERIAL : COTTON 100%</p>
                  <p>WEIGHT : 650g</p>
                  <p>SIZE : W 30 x H 48 x D 14.5 cm</p>
                </div>
                <div
                  className={activeNotice ? "infoBox activeInfo" : "infoBox"}
                >
                  <InfoTitle
                    handler={() => this.handleInfo(1)}
                    active={activeNotice}
                    title={"NOTICE"}
                  />
                  <p className="bold">{noticeTitle}</p>
                  <p>{noticeContent}</p>
                </div>
                <div
                  className={activePolicy ? "infoBox activeInfo" : "infoBox"}
                >
                  <InfoTitle
                    handler={() => this.handleInfo(2)}
                    active={activePolicy}
                    title={"POLICY"}
                  />
                  {CHANGE_DATA?.map((el, i) => {
                    return (
                      <div key={i}>
                        <p
                          className={
                            i === 0
                              ? "bold"
                              : i === 5
                              ? "bold secondPolicy"
                              : ""
                          }
                        >
                          {el}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div
                  className={activeRelated ? "infoBox activeInfo" : "infoBox"}
                >
                  <InfoTitle
                    handler={() => this.handleInfo(3)}
                    active={activeRelated}
                    title={"RELATED"}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Detail;

const ACTIVE_LIST = [
  "activeInfo",
  "activeNotice",
  "activePolicy",
  "activeRelated",
];
