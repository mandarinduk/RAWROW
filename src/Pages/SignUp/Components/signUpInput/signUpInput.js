import React, { Component } from "react";
import "./signUpInput.scss";

class SignUpInput extends Component {
  render() {
    const {
      title,
      maxLength,
      handleInput,
      handleClick,
      name,
      type,
      placeholder,
      idMsg,
      pwMsg,
      nameMsg,
      validationCheckProp,
    } = this.props;

    return (
      <div className="basicArea">
        <span className="basicTitle">{title}</span>
        <div className="basicDesc">
          <label className="basicInput">
            <input
              maxLength={maxLength}
              onChange={handleInput}
              name={name}
              // 조건부 렌더링을 태그 전체가 아닌 속성에 줄 때는 다음과 같이 적용할 수 있다.
              onClick={name === "memberPw" ? handleClick : ""}
              type={type}
              placeholder={placeholder}
            />
          </label>

          {name === "memberId" && validationCheckProp && (
            <span
              className={validationCheckProp ? "idCheck active" : "idCheck"}
            >
              {idMsg}
            </span>
          )}

          {/* 조건부 렌더링: 다음의 조건이 맞을 때만 실행함 */}
          {name === "memberPw" && validationCheckProp && (
            <span
              className={
                validationCheckProp
                  ? `pwGuide pwGuideShow " : "pwGuide"`
                  : `${validationCheckProp}`
              }
            >
              ※ 비밀번호 입력 조건
              <br />
              -대소문자/숫자 4자~16자
              <br />
              -특수문자 및 공백 입력 불가능
            </span>
          )}

          {name === "memberRePw" && validationCheckProp && (
            <span
              className={validationCheckProp ? `pwCheck isPwActive` : `pwCheck`}
            >
              {pwMsg}
            </span>
          )}

          {name === "memberName" && validationCheckProp && (
            <span
              className={
                validationCheckProp ? `nameCheck isNameActive` : `isNameActive`
              }
            >
              {nameMsg}
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default SignUpInput;
