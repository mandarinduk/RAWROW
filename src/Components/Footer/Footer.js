import React from "react";
import "./Footer.scss";
import { FOOTER } from "./data";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="footerWrapper">
          <ul>
            <div className="footerSectionOne">
              <li className="footerItemOne listBold">
                {FOOTER.first.map((el) => {
                  return <div>{el}</div>;
                })}
              </li>
              <li className="footerItemTwo">
                {FOOTER.second.map((el, i) => {
                  return (
                    <div
                      className={
                        i < 1 || i >= 4
                          ? i >= 4
                            ? "listBoldKR"
                            : "listBold"
                          : ""
                      }
                    >
                      {el}
                    </div>
                  );
                })}
              </li>
              <li className="footerItemThree">
                {FOOTER.third.map((el) => {
                  return <div>{el}</div>;
                })}
              </li>
            </div>
            <li className="footerSectionTwo">
              <div className="listBold">COPYRIGHT 2020</div>
              <div className="listBold">HELLROWWORLD. ALL RIGHTS RESERVED.</div>
              <div className="footerIcon">
                {FOOTER.images.map((el, i) => {
                  return <img alt={`snsIcon_${i}`} src={el} />;
                })}
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
