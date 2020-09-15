import React from "react";
import { Link } from 'react-router-dom'
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      memberId: "",
      memberPw: "",
    }
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  handleClick = () => {
    const { memberId, memberPw } = this.state
    if (!memberId.length) alert("아이디 항목은 필수 입력값입니다.")
    else if (memberPw.length < 4) alert("패스워드 항목이 4자(개) 이상으로 해주십시오.")
  }
  

  enterValue = (e) => {
    const { memberId, memberPw} = this.state
    if (e.key !== "Enter") return
    if(!memberId.length) alert("아이디 항목은 필수 입력값입니다.")
    else if (memberPw.length < 4) alert("패스워드 항목이 4자(개) 이상으로 해주십시오.")
  }

  

  render() {
    return (
    <div>
      <div className="loginTitle">
        <div className="titleAnimation">
          <h2>LOGIN</h2>
        </div>
        <div className="login">
          <article>
            <div className="loginBox first">
              <span className="loginBoxTitle">아이디</span>
              <label className="loginBoxDesc">
                <input onKeyUp={this.enterValue} onChange={this.handleInput} id="memberId" name="memberId" type="text" placeholder="아이디를 입력해주세요."></input>
              </label>
            </div>
            <div className="loginBox">
              <span className="loginBoxTitle">비밀번호</span>
              <label className="loginBoxDesc">
                <input onKeyUp={this.enterValue} onChange={this.handleInput} id="memberPw" name="memberPw" type="text" placeholder="비밀번호를 입력해주세요."></input>
              </label>
            </div>
            <a href="#none"><button onClick={this.handleClick} className="loginBtnBlack">로그인</button></a>
            <a href="#none"><button className="loginBtnWhite">비회원 주문조회</button></a>
            <ul className="snsArea">
              <li>
                <a href="#none">
                  <span className="snsBg"><img src="https://rawrow.com/web/upload/mundane/login_naver.png" alt="네이버계정 로그인" /></span>
                  <span className="snsText">naver login</span>
                </a>
              </li>
              <li>
                <a href="#none">
                  <span className="snsBg"><img src="https://rawrow.com/web/upload/mundane/login_kakao.png" alt="카카오계정 로그인"/></span>
                  <span className="snsText">kakao login</span>
                </a>
              </li>
            </ul>
            <ul className="button">
              <li><Link to="#none">아이디 찾기</Link></li>
              <li><Link to="#none">비밀번호 찾기</Link></li>
              <li><a href="/signup">회원 가입</a></li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  )}
}

export default Login;
