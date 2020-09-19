import React from "react";
import { Link } from "react-router-dom";
import idData from "./idData";
import "./SignUp.scss";

class SignUp extends React.Component {
  state = {
    memberId: "",
    memberPw: "",
    memberRePw: "",
    memberName: "",
    memberAddress: "",
    // phone: "",
    // memberMobile: "",
    memberEmail: "",
    // gender: "",
    // birth: "",
    // region: "",
    usableId: false,
    idCheck: false,
    idData: idData,
    idMsg: "",
    pwMsg: "",
    pwGuide: false,
  };

  handleId = () => {
    const { memberId } = this.state;
    const regExp = /[~!@#$%^&*()_+|<>?:{}]/;
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const capital = /[A-Z]/;
    // const checkNum = /[0-9]/;

    if (
      memberId.match(regExp) ||
      memberId.match(korean) ||
      memberId.match(capital)
      // || memberId.match(checkNum)
    ) {
      this.setState({
        idMsg: idData[3].msg,
      });
    } else if (memberId.length === 0) {
      this.setState({
        idMsg: idData[1].msg,
      });
    } else if (memberId.length < 4 || memberId.length > 16) {
      this.setState({
        idMsg: idData[2].msg,
      });
    } else {
      this.setState({
        idMsg: idData[0].msg,
      });
    }
  };

  handleInput = e => {
    const { value, name } = e.target;

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.handleId();
      }
    );
  };

  handleClick = () => {
    const { pwGuide } = this.state;
    this.setState({
      pwGuide: !pwGuide,
    });
  };

  clickSignUp = () => {
    const {
      memberId,
      memberPw,
      memberRePw,
      memberName,
      // birth,
      memberAddress,
      // memberMobile,
      memberEmail,
      // usableId,
    } = this.state;
    if (!memberId) {
      alert("아이디를 입력해주세요.");
    } else if (
      !memberPw ||
      !memberRePw ||
      !memberName ||
      !memberAddress ||
      // !memberMobile ||
      !memberEmail
    ) {
      alert("필수항목을 입력해주세요.");
    } else {
      alert("환영합니다!");
    }
  };

  render() {
    return (
      <div className="SignUp">
        <div className="title">
          <h2>SIGN UP</h2>
        </div>
        <form id="joinForm" name="joinForm">
          <section className="sectionLeft">
            <div className="list">
              <span className="standard">아이디 *</span>
              <div className="desc">
                <label className="inputIdPw">
                  <input
                    maxLength="16"
                    onKeyUp={this.enterValue}
                    onChange={this.handleInput}
                    name="memberId"
                    type="text"
                    placeholder="아이디를 입력해주세요."
                  />
                  <span
                    className={
                      !this.state.idCheck ? "isIdActive idCheck" : "idCheck"
                    }
                  >
                    {this.state.idMsg}
                  </span>
                </label>
              </div>
            </div>
            <div className="list">
              <span className="standard">비밀번호 *</span>
              <div className="desc">
                <label className="inputIdPw">
                  <input
                    maxLength="20"
                    onChange={this.handleInput}
                    onClick={this.handleClick}
                    name="memberPw"
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                  />
                </label>
                <span
                  className={
                    this.state.pwGuide ? "pwGuideNone pwGuide" : "pwGuide"
                  }
                >
                  ※ 비밀번호 입력 조건
                  <br />
                  -대소문자/숫자 4자~16자
                  <br />
                  -특수문자 및 공백 입력 불가능
                </span>
              </div>
            </div>
            <div className="list">
              <span className="standard">비밀번호 확인 *</span>
              <div className="desc">
                <label className="inputIdPw">
                  <input
                    maxLength="20"
                    // onClick={this.handleClick}
                    onChange={this.handleInput}
                    name="memberRePw"
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                  />
                </label>
              </div>
            </div>
            <div className="list">
              <span className="standard">이름 *</span>
              <div className="desc">
                <label className="inputName">
                  <input
                    maxLength="10"
                    // onKeyUp={this.enterValue}
                    onChange={this.handleInput}
                    name="memberName"
                    type="type"
                    placeholder="이름을 입력해주세요."
                  />
                </label>
              </div>
            </div>
            <div className="list">
              <span className="standard">주소 *</span>
              <div className="desc">
                <label className="inputName">
                  <input
                    className="address"
                    maxLength="40"
                    size="20"
                    // onKeyUp={this.enterValue}
                    onChange={this.handleInput}
                    name="memberAddress"
                    type="type"
                    placeholder="주소를 입력해주세요."
                  />
                </label>
              </div>
            </div>
            <div className="list">
              <span className="standard">일반전화</span>
              <div className="desc">
                <select id="phone">
                  <option>02</option>
                  <option>031</option>
                </select>
                <span className="hyphen">-</span>
                <input maxLength="4" className="block" type="text" />
                <span className="hyphen">-</span>
                <input maxLength="4" className="block" type="text" />
              </div>
            </div>
            <div className="list">
              <span className="standard">휴대전화 *</span>
              <div className="desc">
                <select className="block">
                  <option>010</option>
                  <option>011</option>
                </select>
                <span className="hyphen">-</span>
                <input
                  name="memberMobile"
                  maxLength="4"
                  className="block"
                  type="text"
                />
                <span className="hyphen">-</span>
                <input
                  name="memberMobile"
                  maxLength="4"
                  className="block"
                  type="text"
                />
              </div>
            </div>
            <div className="list">
              <span className="standard">이메일 *</span>
              <div className="desc">
                <label>
                  <input
                    maxLength="50"
                    className="email"
                    // onKeyUp={this.enterValue}
                    onChange={this.handleInput}
                    name="memberEmail"
                    type="text"
                  />
                </label>
              </div>
            </div>
            <div className="list">
              <span className="standard">성별</span>
              <div className="desc">
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="genderType0"
                      name="genderType"
                      value="M"
                    />
                    <label htmlFor="genderType0">남자</label>
                    <input
                      type="radio"
                      id="genderType1"
                      name="genderType"
                      value="F"
                    />
                    <label htmlFor="genderType1">여자</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="list">
              <span className="standard">생년월일</span>
              <div className="desc">
                <div className="birth">
                  <input
                    type="radio"
                    id="birthType0"
                    name="birthType"
                    value="S"
                    checked
                  />
                  <label htmlFor="birthType0">양력</label>
                  <input
                    type="radio"
                    id="birthType1"
                    name="birthType"
                    value="L"
                  />
                  <label htmlFor="birthType1">음력</label>
                </div>
                <input
                  maxLength="4"
                  className="block1"
                  placeholder="년"
                  type="text"
                />
                <span className="hyphen">-</span>
                <input
                  maxLength="2"
                  className="block1"
                  placeholder="월"
                  type="text"
                />
                <span className="hyphen">-</span>
                <input
                  maxLength="2"
                  className="block1"
                  placeholder="일"
                  type="text"
                />
              </div>
            </div>
            <div className="list">
              <span className="standard">지역</span>
              <div className="desc">
                <select className="region">
                  {/* <option value="region_00">선택</option> */}
                  {/* {<option value="region0" onClick={() => this.handleClick(1)}>선택</option>
                  <option value="region1" onClick={() =>this.handleClick(2)}>서울</option>} */}
                </select>
              </div>
            </div>
          </section>
          <section className="sectionRight">
            <div className="termsBox allCheck">
              <label>
                이용약관 및 개인정보수집 및 이용,
                <br />
                쇼핑정보 수신(선택)에 모두 동의합니다.
              </label>
              <span className="agreeAll">
                <input type="checkBox" />
              </span>
            </div>
            <div className="otherTermBox">
              <span>이용약관 동의 (필수)</span>
              <div className="termsBox">
                <p>
                  제1조(목적)이 약관은 로우로우(전자상거래 사업자)가 운영하는
                  로우로우 사이버 몰(이하 “몰”이라 한다)에서 제공하는 인터넷
                  관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과
                  이용자의 권리?의무 및 책임사항을 규정함을 목적으로 합니다.
                </p>
              </div>
              <div className="agreeCheck">
                <span>이용약관에 동의하십니까?</span>
                <span>
                  <label htmlFor="agreeService">동의함</label>
                  <input id="agreeService" name="agree" type="checkbox" />
                </span>
              </div>
            </div>
            <div className="otherTermBox">
              <span>개인정보 수집 및 이용 동의 (필수)</span>
              <div className="termsBox">
                <p>
                  {" "}
                  '로우로우'은 (이하 '회사'는) 고객님의 개인정보를 중요시하며,
                  "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고
                  있습니다.
                </p>
              </div>
              <div className="agreeCheck">
                <span>개인정보 수집 및 이용에 동의하십니까?</span>
                <span>
                  <label htmlFor="agreePrivacy">동의함</label>
                  <input id="agreePrivacy" name="agree" type="checkbox" />
                </span>
              </div>
            </div>
            <div className="otherTermBox">
              <span>쇼핑정보 수신 동의 (선택)</span>
              <div className="termsBox">
                <p>
                  할인쿠폰 및 혜택, 이벤트, 신상품 소식 등 쇼핑몰에서 제공하는
                  유익한 쇼핑정보를 SMS나 이메일로 받아보실 수 있습니다.
                </p>
              </div>
              <div className="agreeCheck">
                <span>SMS 수신을 동의하십니까?</span>
                <span>
                  <input id="agreeSms" name="agree" type="checkbox" />
                  <label htmlFor="agreeSms">동의함</label>
                </span>
              </div>
              <div className="agreeCheck">
                <span>이메일 수신을 동의하십니까??</span>
                <span>
                  <input id="agreeEmail" name="agree" type="checkbox" />
                  <label htmlFor="agreeEmail">동의함</label>
                </span>
              </div>
            </div>
            <div>
              <Link to="#none">
                <button onClick={this.clickSignUp} className="joinBtn">
                  회원가입
                </button>
              </Link>
            </div>
          </section>
        </form>
      </div>
    );
  }
}

export default SignUp;

// const region = ["선택", "서울"];
// const STATUS = {
//   1: "이메일을 입력해주세요",
//   2: "비밀번호를 입력해주세요",
// };
