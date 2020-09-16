import React from "react";
import "./Main.scss";

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      mainData: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/commonData.json")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        this.setState({
          mainData: result.data,
        });
      });
  }
  render() {
    const { mainData } = this.state;
    console.log(mainData);
    return (
      <div className="Main">
        <div className="mainContent">
          <ul>
            {mainData.length &&
              mainData.map((el, i) => {
                return (
                  <li>
                    <img alt={`mainImage${i}`} src={el.url} />
                    <div className="textBox">
                      <span className="title">{el.title}</span>
                      <div className="contentBox">
                        <p className="contentOne">{el.contentOne}</p>
                        <p className="contentTwo">{el.contentTwo}</p>
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
