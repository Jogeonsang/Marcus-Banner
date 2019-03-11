import React, { Component } from "react";
import classnames from "classnames/bind";
import styles from "./App.scss";

import Input from "./component/Input";
import Preview from "./component/Preview";
import Palette from "./component/Palette";

const moduleName = "App";
const cx = classnames.bind(styles);

interface Props {}

interface State {
  text: string;
  color: string;
  fontSize: string;
  backgroundColor: string;
  paletteBox: Array<{ color: string; name: string }>;
}

class App extends React.Component<Props, State> {
  state: State = {
    text: "",
    color: "white",
    fontSize: "24px",
    backgroundColor: "#4263EB",
    paletteBox: [
      { color: "#495057", name: "GRAY" },
      { color: "#AE3EC8", name: "GRAFE" },
      { color: "#1C7ED5", name: "BLUE" },
      { color: "#36B24D", name: "GREEN" },
      { color: "#F76706", name: "ORANGE" },
      { color: "#F03D3F", name: "RED" },
      { color: "#7048E7", name: "VIOLET" },
      { color: "#0F98AD", name: "CYAN" },
      { color: "#D6326C", name: "PINK" },
      { color: "#4263EB", name: "INDIGO" },
      { color: "#0DA678", name: "TEAL" },
      { color: "#F59F01", name: "YELLOW" }
    ]
  };

  handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      text: e.currentTarget.value
    });
  };
  render() {
    const { text, color, fontSize, backgroundColor, paletteBox } = this.state;
    return (
      <div className={cx(`${moduleName}`)}>
        <Preview
          text={text}
          color={color}
          fontSize={fontSize}
          backgroundColor={backgroundColor}
        />
        <Input handleInputChange={this.handleInputChange} />
        <Palette paletteBox={paletteBox} />
      </div>
    );
  }
}

export default App;
