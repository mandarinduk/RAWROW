import React from "react";
import "./Main.scss";
import { MAINDATA } from "./data";

class Main extends React.Component {
  // constructor() {
  //   super();
  //   window.addEventListener("scroll", this.handleScrollEvent);

  //   this.state = {
  //     scrollValue: 0,
  //   };
  // }
  // handleScrollEvent = () => {
  //   this.setState({
  //     scrollValue: window.pageYOffset,
  //   });
  //   // console.log(window.pageYOffset, "windowPageY");

  //   if (this.state.scrollValue > 218 && this.state.scrollValue < 400) {
  //     console.log("나는 218위치다.");
  //   }
  // };
  render() {
    // const { scrollValue } = this.state;
    // console.log(scrollValue, "scrollValue");
    return (
      <div className="Main">
        <div className="mainContent">
          <ul>
            {MAINDATA?.map((el, i) => {
              return (
                <li key={i}>
                  <img alt={`mainImage${i}`} src={el.url} />
                  <div className="textBox">
                    <span className="title">{el.title}</span>
                    <div className="contentBox">
                      <p className="contents">{el.contents}</p>
                      <p className="subText">{el.subText}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Main;
