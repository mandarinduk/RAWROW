import React from "react";
import { DETAIL_MOCK } from "./data";
import "./Detail.scss";

class Detail extends React.Component {
  componentDidMount() {
    fetch("http://127.0.0.1:8000/user/login", {
      method: "POST",
      body: {
        userid: "sdfsdfsdf",
        password: "34857298347589",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  render() {
    const { images } = DETAIL_MOCK;
    return (
      <div className="Detail">
        <div className="detailContents">
          <div className="imageSection">
            <div className="productImage">
              {images.map((el, i) => {
                return <img key={i} alt="detail" src={el} />;
              })}
            </div>
            <div className="reviewBox">
              <div className="scoreBox">
                <div className="scoreTitle">
                  <div className="title">REVIEW</div>
                  <div className="subtitle">
                    <div>
                      <span>REVIEW</span>
                      <span>
                        로그인 후 리뷰 작성이 가능합니다. 문의글 혹은 악의적인
                        비방글은 무통보 삭제될 수도 있습니다.
                      </span>
                    </div>
                    <span className="reviewBoard">후기게시판</span>
                  </div>
                </div>
                <div className="scoreGraph">
                  <div className="graphWrapper">
                    <div className="graphBox">
                      <div className="score">
                        <div>5.0</div>
                        <div>1개 리뷰 평점</div>
                      </div>
                      <div className="graph">
                        <ul>
                          <li>
                            <span>5 Stars</span>
                            <span className="orangeGraph"></span>
                            <span>(1)</span>
                          </li>
                          <li>
                            <span>4 Stars</span>
                            <span></span>
                            <span>(0)</span>
                          </li>
                          <li>
                            <span>3 Stars</span>
                            <span></span>
                            <span>(0)</span>
                          </li>
                          <li>
                            <span>2 Stars</span>
                            <span></span>
                            <span>(0)</span>
                          </li>
                          <li>
                            <span>1 Stars</span>
                            <span></span>
                            <span>(0)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="scoreText">
                      <span>100%</span> 의 구매자들이 이 상품을 좋아합니다. (
                      1명 중 1명 )
                    </div>
                  </div>
                  <div className="divideLine" />
                  <div className="thumnailBox">
                    <div>
                      <div className="reviewImg"></div>
                      <div className="reviewImg"></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>이 상품의 포토리뷰 모아보기</div>
                  </div>
                </div>
              </div>
              <div className="listBox">
                <div className="filter">
                  <ul className="textList">
                    <li>추천순</li>
                    <li>리뷰(1)</li>
                    <li>최신순</li>
                    <li>평점순</li>
                  </ul>
                  <span className="filterInfo">ㅇ 리뷰 정렬 기준</span>
                </div>
                <div className="reviewContents">
                  <div className="starText">
                    <div className="starTitle">
                      <span className="star">★★★★★</span>
                      <span className="likeText">
                        &nbsp;&nbsp; - 아주 좋아요 (<strong> 5 </strong>명
                        중&nbsp;
                        <strong> 3 </strong>
                        명이 이 리뷰가 도움이 된다고 선택 했습니다)
                      </span>
                    </div>
                    <div className="textBox">
                      <div>
                        로우로우만의 캔버스백 감성을 너무 잘 느낄 수 있어 무척
                        만족합니다!! <br />
                        로우로우하면 캔버스 감성을 떠올리게 될 정도로 디자인을
                        잘 뽑는 거 같아요!! <br />
                        이 가방은 키와 덩치도 작은 저에게는 조금 큽니다. <br />
                        하지만 큰 가방이 필요해서 저는 만족해요! 참고하시라고
                        적습니다!
                      </div>
                    </div>
                    <div className="reviewThumbnail">
                      <div className="reviewImg"></div>
                      <div className="reviewImg"></div>
                    </div>
                    <div className="commentBox">
                      <div className="moreComment">
                        <span>1 개의 댓글이 있습니다.</span>
                        <span>|</span>
                        <span>이 리뷰가 도움이 되었나요?</span>
                      </div>
                      <div className="opinionBtn">
                        <span>네</span>
                        <span>아니오</span>
                        <span className="add">+1</span>
                      </div>
                    </div>
                  </div>
                  <div className="reviewInfo">
                    <div className="userDate">
                      <p>작성자</p>
                      <p>
                        <strong>이****</strong>
                      </p>
                    </div>
                    <div className="line"></div>
                    <div className="userDate">
                      <p>작성일</p>
                      <p>
                        <strong>2020. 09. 25</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="infoSection"></div>
        </div>
      </div>
    );
  }
}

export default Detail;
