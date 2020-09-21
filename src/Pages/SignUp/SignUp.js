import React from "react";

import RegionList from "./regionList";
import REGION from "./regionData";
import PhoneList from "./phoneList";
import PHONE from "./phoneData";
import MobileList from "./mobileList";
import MOBILE from "./mobileData";

import idData from "./idData";
import "./SignUp.scss";

class SignUp extends React.Component {
  state = {
    memberId: "",
    memberPw: "",
    memberRePw: "",
    memberName: "",
    memberAddress: "",
    memberPhone1: "",
    memebrPhone2: "",
    memberMobile1: "",
    memberMobile2: "",
    memberEmail: "",
    idCheck: false,
    idData: idData,
    idMsg: "",
    pwMsg: "",
    pwGuide: false,
    pwCheck: false,
    nameCheck: false,
    nameMsg: "",
    phoneList: [],
    mobileList: [],
    regionList: [],
    phoneName: "",
    mobileName: "",
    agreeAll: false,
    useAgree: false,
    collectAgree: false,
    smsAgree: false,
    mailAgree: false,
  };

  componentDidMount() {
    this.setState({
      phoneList: PHONE,
      mobileList: MOBILE,
      regionList: REGION,
    });
  }

  handleInput = e => {
    const { value, name } = e.target;

    this.setState(
      {
        [name]: value,
      },
      () => {
        const { memberId, memberPw, memberRePw, memberName } = this.state;
        const regExp = /[~!@#$%^&*()_+|<>?:{}]/;
        const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        const english = /^[a-zA-Z]*$/;
        const upper = /[A-Z]/;
        const checkNum = /[0-9]/;
        // id validation
        if (
          memberId.match(regExp) ||
          memberId.match(korean) ||
          memberId.match(upper)
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
        // password validation
        if (memberPw !== memberRePw) {
          this.setState({
            pwMsg: pwData[1].msg,
          });
        }
        if (memberPw === memberRePw) {
          this.setState({
            pwMsg: pwData[0].msg,
          });
        }
        // name validation
        if (
          (memberName.match(english) && memberName.match(korean)) ||
          memberName.length === 0
        ) {
          this.setState({
            nameMsg: nameData[0].msg,
          });
        }

        if (memberName.match(regExp) || memberName.match(checkNum)) {
          this.setState({
            nameMsg: nameData[1].msg,
          });
        }
      }
    );
  };

  handleClick = () => {
    const { pwGuide } = this.state;
    this.setState({
      pwGuide: !pwGuide,
    });
  };

  clickSignUp = e => {
    e.preventDefault();
    const {
      memberId,
      memberPw,
      memberRePw,
      memberName,
      memberAddress,
      phoneName,
      memberPhone1,
      memberPhone2,
      mobileName,
      memberMobile1,
      memberMobile2,
      memberEmail,
    } = this.state;
    const checkEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const english = /^[a-zA-Z]*$/;
    if (!memberId) {
      alert("아이디를 입력해주세요.");
    } else if (!memberPw) {
      alert("비밀번호를 입력해주세요.");
    } else if (isNaN(Number(memberPw && memberRePw))) {
      alert("올바른 비밀번호를 입력해주세요.");
    } else if (!memberRePw) {
      alert("비밀번호를 입력해주세요.");
    } else if (memberPw !== memberRePw) {
      alert("비밀번호가 일치하지 않습니다.");
    } else if (!memberName) {
      alert("이름을 입력해주세요.");
    } else if (!memberName.match(korean) && !memberName.match(english)) {
      alert("이름은 한글과 영문만 입력 가능합니다.");
    } else if (!memberAddress) {
      alert("주소를 입력해주세요.");
    } else if (!memberPhone1 || !memberPhone2) {
      alert("일반전화 번호를 입력해주세요.");
    } else if (
      isNaN(Number(memberPhone1)) ||
      memberPhone1.length < 4 ||
      isNaN(Number(memberPhone2)) ||
      memberPhone2.length < 4
    ) {
      alert("올바른 일반전화 번호를 입력해주세요");
    } else if (!memberMobile1 || !memberMobile2) {
      alert("휴대폰 번호를 입력해주세요.");
    } else if (
      isNaN(Number(memberMobile1)) ||
      memberMobile1.length < 4 ||
      isNaN(Number(memberMobile2)) ||
      memberMobile2.length < 4
    ) {
      alert(mobileData[1].msg);
    } else if (!memberEmail) {
      alert("이메일을 입력해주세요.");
    } else if (!memberEmail.match(checkEmail)) {
      alert(emailData[1].msg);
    } else if (!this.state.useAgree) {
      alert("이용약관에 동의 하세요");
    } else if (!this.state.collectAgree) {
      return alert("개인정보 수집 및 이용 방침에 동의하세요.");
    }
    fetch("http://10.58.5.137:8002/signup", {
      method: "POST",
      body: JSON.stringify({
        userid: memberId,
        password: memberPw,
        user_name: memberName,
        address: memberAddress,
        telephone: phoneName + memberPhone1 + memberPhone2 + "",
        phonenumber: mobileName + memberMobile1 + memberMobile2 + "",
        email: memberEmail,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === "SUCCESS") {
          localStorage.setItem("token", result.Authorization);
          alert("회원가입 성공!");
          this.props.history.push("/main");
        } else if (result.message === "UNAUTHORIZED") {
          alert("필수 항목을 입력해주세요");
        }
      });
  };

  useAgreeAll = () => {
    const { useAgree, collectAgree, smsAgree, mailAgree } = this.state;
    if (
      // if문 안으로 들어가면 무조건 true!
      useAgree &&
      collectAgree &&
      smsAgree &&
      mailAgree
    ) {
      this.setState({
        agreeAll: true,
      });
    } else {
      this.setState({
        agreeAll: false,
      });
    }
  };

  checkUseAgree = () => {
    const { useAgree } = this.state;

    this.setState(
      {
        useAgree: !useAgree,
      },
      () => this.useAgreeAll()
    );
  };

  collectAgreeAll = () => {
    const { useAgree, collectAgree, smsAgree, mailAgree } = this.state;
    if (useAgree && collectAgree && smsAgree && mailAgree) {
      this.setState({
        agreeAll: true,
      });
    } else {
      this.setState({
        agreeAll: false,
      });
    }
  };

  checkCollectAgree = () => {
    const { collectAgree } = this.state;
    this.setState(
      {
        collectAgree: !collectAgree,
      },
      () => this.collectAgreeAll()
    );
  };

  smsAgreeAll = () => {
    const { useAgree, collectAgree, smsAgree, mailAgree } = this.state;
    if (useAgree && collectAgree && smsAgree && mailAgree) {
      this.setState({
        agreeAll: true,
      });
    } else {
      this.setState({
        agreeAll: false,
      });
    }
  };

  checkSmsAgree = () => {
    const { smsAgree } = this.state;
    this.setState(
      {
        smsAgree: !smsAgree,
      },
      () => {
        this.smsAgreeAll();
      }
    );
  };

  mailAgreeAll = () => {
    const { useAgree, collectAgree, smsAgree, mailAgree } = this.state;
    if (useAgree && collectAgree && smsAgree && mailAgree) {
      this.setState({
        agreeAll: true,
      });
    } else {
      this.setState({
        agreeAll: false,
      });
    }
  };

  checkMailAgree = () => {
    const { mailAgree } = this.state;
    this.setState(
      {
        mailAgree: !mailAgree,
      },
      () => this.mailAgreeAll()
    );
  };

  agreeAllToggle = () => {
    const { agreeAll } = this.state;
    this.setState({
      agreeAll: !agreeAll,
      useAgree: !agreeAll,
      collectAgree: !agreeAll,
      smsAgree: !agreeAll,
      mailAgree: !agreeAll,
    });
  };

  phoneSelect = e => {
    this.setState({
      phoneName: e.target.value,
    });
  };

  mobileSelect = e => {
    this.setState({
      mobileName: e.target.value,
    });
  };

  render() {
    const { phoneList, mobileList, regionList } = this.state;
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
                    onChange={this.handleInput}
                    name="memberRePw"
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                  />
                  <span
                    className={
                      !this.state.pwCheck ? "isPwActive pwCheck" : "pwCheck"
                    }
                  >
                    {this.state.pwMsg}
                  </span>
                </label>
              </div>
            </div>
            <div className="list">
              <span className="standard">이름 *</span>
              <div className="desc">
                <label className="inputName">
                  <input
                    maxLength="10"
                    onChange={this.handleInput}
                    name="memberName"
                    type="type"
                    placeholder="이름을 입력해주세요."
                  />
                  <span
                    className={
                      !this.state.nameCheck
                        ? "isNameActive nameCheck"
                        : "nameCheck"
                    }
                  >
                    {this.state.nameMsg}
                  </span>
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
                    size="30"
                    onChange={this.handleInput}
                    name="memberAddress"
                    type="type"
                    placeholder="주소를 입력해주세요."
                  />
                </label>
              </div>
            </div>
            <div className="list">
              <span className="standard">일반전화 *</span>
              <div className="desc">
                <select id="phone" onChange={this.phoneSelect}>
                  {phoneList.map(phone => {
                    return (
                      <PhoneList phoneId={phone.Id} phoneName={phone.name} />
                    );
                  })}
                </select>
                <span className="hyphen">-</span>
                <input
                  name="memberPhone1"
                  onChange={this.handleInput}
                  maxLength="4"
                  className="block"
                  type="text"
                />
                <span className="hyphen">-</span>
                <input
                  name="memberPhone2"
                  onChange={this.handleInput}
                  maxLength="4"
                  className="block"
                  type="text"
                />
              </div>
            </div>
            <div className="list">
              <span className="standard">휴대전화 *</span>
              <div className="desc">
                <select className="block" onChange={this.mobileSelect}>
                  {mobileList.map(mobile => {
                    return (
                      <MobileList
                        mobileId={mobile.Id}
                        mobileName={mobile.name}
                      />
                    );
                  })}
                </select>
                <span className="hyphen">-</span>
                <input
                  name="memberMobile1"
                  maxLength="4"
                  onChange={this.handleInput}
                  className="block"
                  type="text"
                />
                <span className="hyphen">-</span>
                <input
                  name="memberMobile2"
                  maxLength="4"
                  onChange={this.handleInput}
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
                    defaultChecked
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
                <select className="dropdown">
                  {regionList.map(region => {
                    return <RegionList regionName={region.name} />;
                  })}
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
                <input
                  onChange={this.agreeAllToggle}
                  name="agreeAll"
                  type="checkbox"
                  checked={this.state.agreeAll ? "true" : ""}
                />
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
                  <input
                    onChange={this.checkUseAgree}
                    name="useAgree"
                    type="checkbox"
                    checked={this.state.useAgree ? "true" : ""}
                  />
                </span>
              </div>
            </div>
            <div className="otherTermBox">
              <span>개인정보 수집 및 이용 동의 (필수)</span>
              <div className="termsBox">
                <p>
                  '로우로우'은 (이하 '회사'는) 고객님의 개인정보를 중요시하며,
                  "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고
                  있습니다.
                </p>
              </div>
              <div className="agreeCheck">
                <span>개인정보 수집 및 이용에 동의하십니까?</span>
                <span>
                  <label htmlFor="agreePrivacy">동의함</label>
                  <input
                    onChange={this.checkCollectAgree}
                    name="collectAgree"
                    type="checkbox"
                    checked={this.state.collectAgree ? "true" : ""}
                  />
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
                  <input
                    name="smsAgree"
                    type="checkbox"
                    onChange={this.checkSmsAgree}
                    checked={this.state.smsAgree ? "true" : ""}
                  />
                  <label htmlFor="agreeSms">동의함</label>
                </span>
              </div>
              <div className="agreeCheck">
                <span>이메일 수신을 동의하십니까??</span>
                <span>
                  <input
                    name="mailAgree"
                    type="checkbox"
                    onChange={this.checkMailAgree}
                    checked={this.state.mailAgree ? "true" : ""}
                  />
                  <label htmlFor="agreeEmail">동의함</label>
                </span>
              </div>
            </div>
            <div>
              <button onClick={this.clickSignUp} className="joinBtn">
                회원가입
              </button>
            </div>
          </section>
        </form>
      </div>
    );
  }
}

export default SignUp;

const pwData = [
  {
    id: 1,
    msg: "",
  },
  {
    id: 2,
    msg: "비밀번호가 일치하지 않습니다.",
  },
];

const nameData = [
  {
    id: 1,
    msg: "",
  },
  {
    id: 2,
    msg: "한글과 영문만 입력 가능합니다.",
  },
];

const mobileData = [
  {
    id: 1,
    msg: "",
  },
  {
    id: 2,
    msg: "올바른 휴대전화번호를 입력하세요.",
  },
];

const emailData = [
  {
    id: 1,
    msg: "",
  },
  {
    id: 2,
    msg: "입력하신 이메일을 사용할 수 없습니다.",
  },
];
