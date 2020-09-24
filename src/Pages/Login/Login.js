import React from "react";
import { Link } from "react-router-dom";
import { api } from "../../config/apis";
import "./Login.scss";

class Login extends React.Component {
  state = {
    memberId: "",
    memberPw: "",
  };

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  enterValue = e => {
    const { memberId, memberPw } = this.state;
    if (e.key && e.key !== "Enter") return;
    if (!memberId.length) return alert("아이디 항목은 필수 입력값입니다.");
    else if (memberPw.length < 4)
      return alert("패스워드 항목이 4자(개) 이상으로 해주십시오.");

    fetch(`${api}/login`, {
      method: "POST",
      body: JSON.stringify({
        userid: this.state.memberId,
        password: this.state.memberPw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.Authorization) {
          localStorage.setItem("token", result.Authorization);
          alert("로그인 성공");
          this.props.history.push("/main");
        } else if (result.messgae === "INVALID_USER") {
          alert("아이디나 비밀번호를 확인해주세요");
        }
      });
  };

  render() {
    return (
      <div className="Login">
        <h2>LOGIN</h2>
        <article>
          <div className="loginBox first">
            <span className="title">아이디</span>
            <label className="desc">
              <input
                onKeyUp={this.enterValue}
                onChange={this.handleInput}
                name="memberId"
                type="text"
                placeholder="아이디를 입력해주세요."
              />
            </label>
          </div>
          <div className="loginBox">
            <span className="title">비밀번호</span>
            <label className="desc">
              <input
                onKeyUp={this.enterValue}
                onChange={this.handleInput}
                name="memberPw"
                type="password"
                placeholder="비밀번호를 입력해주세요."
              />
            </label>
          </div>
          <button onClick={this.enterValue} className="loginBtn black">
            로그인
          </button>
          <Link to="#none">
            <button className="loginBtn white">비회원 주문조회</button>
          </Link>
          <ul className="snsArea">
            <li>
              <a href="#none">
                <span className="snsBg">
                  <img
                    src="https://rawrow.com/web/upload/mundane/login_naver.png"
                    alt="네이버계정 로그인"
                  />
                </span>
                <span className="snsText">naver login</span>
              </a>
            </li>
            <li>
              <a href="#none">
                <span className="snsBg">
                  <img
                    src="https://rawrow.com/web/upload/mundane/login_kakao.png"
                    alt="카카오계정 로그인"
                  />
                </span>
                <span className="snsText">kakao login</span>
              </a>
            </li>
          </ul>
          <ul className="button">
            <li>아이디 찾기</li>
            <li>비밀번호 찾기</li>
            <li>
              <Link to="/signup">회원 가입</Link>
            </li>
          </ul>
        </article>
      </div>
    );
  }
}

export default Login;
