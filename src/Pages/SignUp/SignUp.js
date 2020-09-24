import React from "react";
import UserTerms from "./Components/UserTerms/UserTerms";
import WelcomeModal from "./Components/WelcomeModal/WelcomeModal";
import SelectOptions from "./Components/SelectOptions/SelectOptions";
import REGION from "./regionData";
import PHONE from "./phoneData";
import MOBILE from "./mobileData";
import SignUpInput from "./Components/signUpInput/signUpInput";
import { signUpTitleData } from "./Components/signUpInput/signUpTitleData";
import {
  idData,
  pwData,
  nameData,
  mobileData,
  emailData,
} from "./basicValidationData";
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
    pwGuide: false,
    pwCheck: false,
    nameCheck: false,
    idMsg: "",
    pwMsg: "",
    nameMsg: "",
    idData: idData,
    pwData: pwData,
    nameData: nameData,
    emailData: emailData,
    phoneList: PHONE,
    mobileList: MOBILE,
    regionList: REGION,
    phoneDigit: "",
    mobileDigit: "",
    value: "",
    children: "",
    agreeAll: false,
    useAgree: false,
    collectAgree: false,
    smsAgree: false,
    mailAgree: false,
    modal: false,
    modalLayer: false,
  };

  clickSignUp = e => {
    e.preventDefault();
    const {
      memberId,
      memberPw,
      memberRePw,
      memberName,
      memberAddress,
      phoneDigit,
      memberPhone1,
      memberPhone2,
      mobileDigit,
      memberMobile1,
      memberMobile2,
      memberEmail,
    } = this.state;
    const regExp = /[~!@#$%^&*()_+|<>?:{}]/;
    const checkEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const english = /^[a-zA-Z]*$/;

    if (!memberId) {
      alert("아이디를 입력해주세요.");
    } else if (memberId.match(regExp) || memberId.match(korean)) {
      alert(
        "공백/특수문자가 포함되었거나, 숫자로 시작 또는 숫자로만 이루어진 아이디는 사용할 수 없습니다."
      );
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

    fetch("http://10.58.1.181:8002/signup", {
      method: "POST",
      body: JSON.stringify({
        userid: memberId,
        password: memberPw,
        user_name: memberName,
        address: memberAddress,
        telephone: phoneDigit + memberPhone1 + memberPhone2 + "",
        phonenumber: mobileDigit + memberMobile1 + memberMobile2 + "",
        email: memberEmail,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === "SUCCESS") {
          localStorage.setItem("token", result.Authorization);
          this.setState({
            modal: !this.state.modal,
            modalLayer: !this.state.modalLayer,
          });

          // this.props.history.push("/main");
        } else if (result.message === "INVALID_USER") {
          alert("필수 항목을 입력해주세요");
        }
      });
  };

  handleLogin = e => {};

  handleInput = e => {
    const { value, name } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validator();
      }
    );
  };

  validator = () => {
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
      memberId.match(upper) ||
      memberId.match(checkNum)
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
  };

  handleClick = nam => {
    const { pwGuide } = this.state;
    if (nam === "memberPw") {
      this.setState({
        pwGuide: !pwGuide,
      });
    }
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

  numberSelect = e => {
    this.setState({
      phoneDigit: e.target.value,
      mobileDigit: e.target.value,
    });
  };

  render() {
    const {
      phoneList,
      mobileList,
      regionList,
      idCheck,
      pwGuide,
      pwCheck,
      nameCheck,
      idMsg,
      pwMsg,
      nameMsg,
    } = this.state;

    return (
      <div className="SignUp">
        <WelcomeModal
          modalLayer={this.state.modalLayer}
          modal={this.state.modal}
        />
        <div className="subject">
          <h2>SIGN UP</h2>
        </div>
        <form id="joinForm" name="joinForm">
          <section className="sectionLeft">
            {signUpTitleData.map((el, i) => {
              let validationCheckProp;
              if (el.name === "memberId") validationCheckProp = !idCheck;
              if (el.name === "memberPw") validationCheckProp = pwGuide;

              if (el.name === "memberRePw") validationCheckProp = !pwCheck;
              if (el.name === "memberName") validationCheckProp = !nameCheck;
              if (el.name === "memberAddress") validationCheckProp = "";

              return (
                <SignUpInput
                  key={i}
                  {...el}
                  validationCheckProp={validationCheckProp}
                  idMsg={idMsg}
                  pwMsg={pwMsg}
                  nameMsg={nameMsg}
                  handleInput={this.handleInput}
                  handleClick={this.handleClick}
                />
              );
            })}

            <div className="phoneArea">
              <span className="phone">일반전화 *</span>
              <div className="phoneDesc">
                <select className="phoneDropDown" onChange={this.numberSelect}>
                  {phoneList.map((phone, i) => {
                    return <SelectOptions key={i} children={phone.name} />;
                  })}
                </select>
                <span>-</span>
                <input
                  name="memberPhone1"
                  onChange={this.handleInput}
                  maxLength="4"
                  className="phoneInput"
                  type="text"
                />
                <span>-</span>
                <input
                  name="memberPhone2"
                  onChange={this.handleInput}
                  maxLength="4"
                  className="phoneInput"
                  type="text"
                />
              </div>
            </div>
            <div className="mobileArea">
              <span className="mobile">휴대전화 *</span>
              <div className="mobileDesc">
                <select className="mobileDropDown" onChange={this.numberSelect}>
                  {mobileList.map((mobile, i) => {
                    return <SelectOptions key={i} children={mobile.name} />;
                  })}
                </select>
                <span>-</span>
                <input
                  name="memberMobile1"
                  maxLength="4"
                  onChange={this.handleInput}
                  className="mobileInput"
                  type="text"
                />
                <span>-</span>
                <input
                  name="memberMobile2"
                  maxLength="4"
                  onChange={this.handleInput}
                  className="mobileInput"
                  type="text"
                />
              </div>
            </div>
            <div className="emailArea">
              <span className="email">이메일 *</span>
              <div className="emailDesc">
                <label>
                  <input
                    maxLength="50"
                    className="emailInput"
                    onChange={this.handleInput}
                    name="memberEmail"
                    type="text"
                  />
                </label>
              </div>
            </div>
            <div className="genderArea">
              <span className="gender">성별</span>
              <div className="genderDesc">
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
            <div className="birthdateArea">
              <span className="birthdate">생년월일</span>
              <div className="birthdateDesc">
                <div className="birthdateLine">
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
                  className="birthDateInput"
                  placeholder="년"
                  type="text"
                />
                <span>-</span>
                <input
                  maxLength="2"
                  className="birthDateInput"
                  placeholder="월"
                  type="text"
                />
                <span>-</span>
                <input
                  maxLength="2"
                  className="birthDateInput"
                  placeholder="일"
                  type="text"
                />
              </div>
            </div>
            <div className="regionArea">
              <span className="region">지역</span>
              <div className="regionDesc">
                <select className="regionDropdown">
                  {regionList.map((region, i) => {
                    return <SelectOptions key={i} children={region.name} />;
                  })}
                </select>
              </div>
            </div>
          </section>
          <UserTerms
            agreeAllToggle={this.agreeAllToggle}
            agreeAll={this.state.agreeAll}
            checkUseAgree={this.checkUseAgree}
            useAgree={this.state.useAgree}
            checkCollectAgree={this.checkCollectAgree}
            collectAgree={this.state.collectAgree}
            checkSmsAgree={this.checkSmsAgree}
            smsAgree={this.state.smsAgree}
            checkMailAgree={this.checkMailAgree}
            mailAgree={this.state.mailAgree}
            handleLogin={this.handleLogin}
            clickSignUp={this.clickSignUp}
          />
        </form>
      </div>
    );
  }
}

export default SignUp;
