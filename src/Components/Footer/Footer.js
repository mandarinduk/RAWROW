import React from "react";
import "./Footer.scss";
import { FOOTER } from "./data";

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <div className="footerWrapper">
          <ul>
            <div className="aboutSection">
              <li className="aboutItems lightBold">
                {FOOTER.first.map((el, i) => {
                  return <div key={i}>{el}</div>;
                })}
              </li>
              <li>
                {FOOTER.second.map((el, i) => {
                  return (
                    <div
                      key={i}
                      className={i === 0 ? "lightBold" : i >= 4 ? "bold" : ""}
                    >
                      {el}
                    </div>
                  );
                })}
              </li>
              <li>
                {FOOTER.third.map((el, i) => {
                  return <div key={i}>{el}</div>;
                })}
              </li>
            </div>
            <li className="copyrightSection">
              <p className="lightBold">COPYRIGHT 2020</p>
              <p className="lightBold">HELLROWWORLD. ALL RIGHTS RESERVED.</p>
              <div className="footerIcon">
                {FOOTER.images.map((el, i) => {
                  return <img key={i} alt={`snsIcon_${i}`} src={el} />;
                })}
              </div>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
