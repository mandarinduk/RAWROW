import React from "react";
import Review from "./Components/Review";
import { DETAIL_MOCK } from "./data";
import "./Detail.scss";

class Detail extends React.Component {
  render() {
    console.log(this.state);
    const {
      name: relatedName,
      price: relatedPrice,
      thumbnail,
    } = DETAIL_MOCK.related_product_list;

    const {
      name: mainName,
      price: mainPrice,
      images,
      sale_price,
      point,
      sub_text,
      product_color,
      description,
      info,
      notice,
    } = DETAIL_MOCK;

    return (
      <div className="Detail">
        <div className="detailContents">
          <div className="imageSection">
            <div className="productImage">
              {images.map((el, i) => {
                return <img key={i} alt="detail" src={el} />;
              })}
            </div>
            <Review />
          </div>
          <div className="infoSection">
            <ul className="titleList">
              <li className="productTitle">{mainName} NAVY </li>
              <li
                className={sale_price ? "mainPrice lineThrough" : "mainPrice"}
              >
                {mainPrice.toLocaleString()}원
              </li>
              {sale_price !== 0 && (
                <li className="salePrice">
                  <span>{sale_price.toLocaleString()}원</span>
                  <span>
                    {` ${parseInt(
                      ((mainPrice - sale_price) / mainPrice) * 100
                    )}%`}
                  </span>
                </li>
              )}
              <li className="pointText">
                <span>{point.toLocaleString()}P</span>
                <span>
                  {` (${parseInt(
                    (point / (sale_price === 0 ? mainPrice : sale_price)) * 100
                  )}%)`}
                </span>
              </li>
              {sub_text.length && <li className="subText">{sub_text}</li>}
            </ul>
            <div className="productColor">
              {product_color.map((el) => {
                return <img alt="img" src={el} />;
              })}
            </div>
            <div className="orderCounter">
              <div className="countTitle">{mainName}</div>
              <div className="counter">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <div className="pricePoint">
                <div>{mainPrice.toLocaleString()}원</div>
                <div>{`(${point.toLocaleString()}P)`}</div>
              </div>
            </div>
            <div className="finalPrice">{`총 상품금액 : ${mainPrice.toLocaleString()}원`}</div>
            <div className="orderBox">
              <div className="buyNow">BUY NOW</div>
              <div className="addCart">ADD TO CART</div>
            </div>
            <div className="description">
              <p>
                <span className="orange bold">STRING CANVAS SERIES </span>
                <span className="bold"> with SEOULMADE</span>
              </p>
              <p className="bold">EASY OPEN AND CLOSE</p>
              <p>
                스트링을 당기고 풀면서 쉽게 여닫을 수 있고, 입구가 넓어 물건을
                넣고 뺄 때도 편리합니다.
              </p>
              <p className="bold">WAXED CANVAS</p>
              <p>
                왁스를 코팅해 내구성과 발수성을 높인 왁스드 원단. 쓸수록
                습관으로 만들어진 주름이 드러나고, 자연스럽게 사용감이
                반영됩니다.
              </p>

              <p className="bold">DOUBLE FASTENING</p>
              <p>
                본체 고리에 한 번 더 끈을 걸면 스트링이 쉽게 풀리거나 가방이
                벌어지지 않습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
