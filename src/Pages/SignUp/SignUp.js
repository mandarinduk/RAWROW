import React from "react";
import "./SignUp.scss";

class SignUp extends React.Component {
  render() {
    return (
    <div>
      <div className="signUpTitle">
        <h2>SIGN UP</h2>
      </div>
      <form id="joinForm" name="joinForm">
        <section className="sectionLeft">
          <div className="formWrite noBorder">
            <ul>
              <li>
                <div>회원구분 *</div>
                <div>            
                  <input type="radio"></input>
                  <label>개인회원</label>
                  <input type="radio"></input>
                  <label>사업자회원</label>
                </div>
              </li>
              <li>
                <div>
                  <div>회원인증 *</div>
                  <div>
                    <ul>
                      <li>
                        <input type="radio" />
                        <label>휴대폰인증</label>
                      </li>
                      <li>
                        <ul>
                          <li>
                            <ul>
                              <a href="#none">
                                <img src="https://img.echosting.cafe24.com/skin/base/common/btn_icon_mobile.gif" alt="phone ico"/>
                                휴대폰인증
                              </a>
                              <p>본인 명의의 휴대폰으로 본인인증을 진행합니다.</p>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* 일단 여기까지 마크업 */}
          <div className="formWrite">
            <span>회원구분 *</span>
              <input type="radio"></input>
              <label>휴대폰인증</label>
              <a href="#none"><img src="https://img.echosting.cafe24.com/skin/base/common/btn_icon_mobile.gif" alt=""></img></a>
          </div>
          <div>
            <div className="">
              <span className="">아이디 *</span>
              <label className="">
                <input id="memberId" name="memberId" type="text" placeholder="아이디를 입력해주세요."></input>
              </label>
            </div>
          </div>
          <div>
            <div className="formWrite">
              <span className="">비밀번호 *</span>
              <label className="">
                <input id="memberPw" name="memberPw" type="text" placeholder="비밀번호를 입력해주세요."></input>
              </label>
            </div>
          </div>
          <div>
            <div className="formWrite">
              <span className="">비밀번호 확인 *</span>
              <label className="">
                <input id="memberPw" name="memberPw" type="text" placeholder="비밀번호를 입력해주세요."></input>
              </label>
            </div>
          </div>
          <div className="formWrite address">
            <ul>
              <li>이름 *</li>
              <li>주소 *</li>
              <li><a href="#none">우편번호검색</a></li>
            </ul>
          </div>
          <div className="formWrite phone">
            <ul>
              <li>
                <div>일반전화 *</div>
                <div>
                  <span>
                    <select>
                      <option></option>
                      <span>-</span>
                      <input></input>
                      <span>-</span>
                      <input></input>
                    </select>
                  </span>
                </div>
              </li>
              <li>
                <div>휴대전화 *</div>
                  <div>
                    <span>
                      <select>
                        <option></option>
                        <span>-</span>
                        <input></input>
                        <span>-</span>
                        <input></input>
                    </select>
                  </span>
                </div>
              </li>
              <li>
                <div>이메일 *</div>
                <div>
                  <span>
                    <input></input>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        
          <div>
            <div className="formWrite">
              <ul>
                <li>
                  <span>성별</span>
                  <input type="radio"></input>
                  <label>남자</label>
                  <input type="radio"></input>
                  <label>여자</label>
                </li>
                <li>
                  <span>생년월일</span>
                  <input type="radio"></input>
                  <label>양력</label>
                  <input type="radio"></input>
                  <label>음력</label>
                  <span>
                    <input placeholder="년"></input>
                  </span>
                  <span>-</span>
                  <span>
                    <input placeholder="월"></input>
                  </span>
                  <span>-</span>
                  <span>
                    <input placeholder="일"></input>
                  </span>
                </li>
                <li>
                  <span>지역</span>
                  <div>
                    <select id="region">
                      <option value="region_00">선택</option>
                      <option value="region_01">경기</option>
                      <option value="region_02">서울</option>
                      <option value="region_03">인천</option>
                      <option value="region_04">강원</option>
                      <option value="region_05">충남</option>
                      <option value="region_06">충북</option>
                      <option value="region_07">대전</option>
                      <option value="region_08">경북</option>
                      <option value="region_09">경남</option>
                      <option value="region_10">대구</option>
                      <option value="region_11">부산</option>
                      <option value="region_12">울산</option>
                      <option value="region_13">전북</option>
                      <option value="region_14">전남</option>
                      <option value="region_15">광주</option>
                      <option value="region_16">제주</option>
                      <option value="region_17">해외</option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>
          </div>
    
        </section>

        <section className="sectionRight">
          <div>
            <label>이용약관 및 개인정보수집 및 이용,
                  쇼핑정보 수신(선택)에 모두 동의합니다.
            </label>
            <span><input type="checkbox"/></span>
          </div>
          <div>
          <ul>
            <li>
              <div>이용약관 동의 (필수)</div>
              <div>
                <div></div>
                <span>이용약관에 동의하십니까?</span>
                <span>
                  <input type="checkbox"/>
                  <label>동의함</label>
                </span>
              </div>
            </li>
            <li>
              <div>개인정보 수집 및 이용 동의 (필수)</div>
              <div>
                <div></div>
                <span>개인정보 수집 및 이용에 동의하십니까?</span>
                <span>
                  <input type="checkbox"/>
                  <label>동의함</label>
                </span>
              </div>
            </li>
            <li>
              <div>쇼핑정보 수신 동의 (선택)</div>
              <div>
                <div></div>
                <span>SMS 수신을 동의하십니까?</span>
                <span>
                  <input type="checkbox"/>
                  <label>동의함</label>
                </span>
                <span>이메일 수신을 동의하십닉까?</span>
                <span>
                  <input type="checkbox"/>
                  <label>동의함</label>
                </span>
              </div>
            </li>
          </ul>
          </div>
          <div>
          <a href="#none"><button onClick={this.handleClick} className="loginBtnBlack">로그인</button></a>
          </div>
        </section>
      </form>
    </div>)
  }
}

export default SignUp;
