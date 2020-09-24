import React from "react";
import "./Main.scss";
import { MAINDATA } from "./data";

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <div className="mainContent test">
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
