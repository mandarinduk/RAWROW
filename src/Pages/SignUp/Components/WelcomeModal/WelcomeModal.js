import React from "react";
import { Link } from "react-router-dom";
import "./WelcomeModal.scss";

class WelcomeModal extends React.Component {
  render() {
    const { modal, modalLayer } = this.props;

    return (
      <div>
        <div className={modal ? "WelcomeModal active" : "WelcomeModal"}>
          <div className="contents">
            <div className="box">
              <h1>NICE TO MEET YOU!</h1>
              <div className="greeting">
                <span>우리 더 가까운 사이가 되었네요, 반갑습니다!</span>
                <span>
                  친구 된 기념으로 로우로우가 준비한 작은 서비스도 확인해보세요.
                </span>
                <span>좋은 인연입니다.</span>
              </div>
            </div>

            <div className="btnArea">
              <div className="btn">
                <button className="serviceBtn">SERVICE PROGRAM</button>
                <button className="loginBtn">
                  <Link to="/login" className="link">
                    LOGIN
                  </Link>
                </button>
                +
              </div>
            </div>
          </div>
        </div>
        <div className={modalLayer ? "modalLayer active" : "modalLayer"}></div>
      </div>
    );
  }
}
export default WelcomeModal;
