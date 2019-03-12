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
  href: string;
  color: string;
  fontSize: string;
  backgroundColor: string;
  paletteBox: Array<{ color: string; name: string }>;
}

class App extends React.Component<Props, State> {
  state: State = {
    text: "SAMPLE TEXT",
    href: "",
    color: "white",
    fontSize: "24px",
    backgroundColor: "#4263EB",
    paletteBox: [
      { color: "#495057", name: "GRAY" },
      { color: "#AE3EC8", name: "GRAPE" },
      { color: "#1C7ED5", name: "BLUE" },
      { color: "#36B24D", name: "GREEN" },
      { color: "#F76706", name: "ORANGE" },
      { color: "#F03D3F", name: "RED" },
      { color: "#7048E7", name: "VIOLET" },
      { color: "#0F98AD", name: "CYAN" },
      { color: "#D6326C", name: "PINK" },
      { color: "#4263EB", name: "INDIGO" },
      { color: "#0DA678", name: "TEAL" },
      { color: "#F59F01", name: "YELLOW" },
      { color: "#F7E017", name: "JAVASCRIPT" },
      { color: "#007ACC", name: "TYPESCRIPT" },
      { color: "#81D8F7", name: "REACT" },
      { color: "#00BD7D", name: "VUE" }
    ]
  };

  handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      text: e.currentTarget.value
    });
  };

  handleColorChange = (color: string): void => {
    this.setState({
      backgroundColor: color
    });
  };

  handleCanvasChange = (href: string): void => {
    this.setState({
      href: href
    });
  };
  render() {
    const {
      text,
      color,
      fontSize,
      backgroundColor,
      paletteBox,
      href
    } = this.state;
    return (
      <div className={cx(`${moduleName}`)}>
        <Preview
          text={text}
          color={color}
          fontSize={fontSize}
          backgroundColor={backgroundColor}
          handleCanvasChange={this.handleCanvasChange}
          href={href}
        />
        <Input handleInputChange={this.handleInputChange} />
        <Palette
          paletteBox={paletteBox}
          handleColorChange={this.handleColorChange}
        />
        <a href={href} download="banner-image.png">
          Download
        </a>
      </div>
    );
  }
}

export default App;
