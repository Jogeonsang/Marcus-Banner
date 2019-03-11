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
}

class App extends React.Component<Props, State> {
  state: State = {
    text: "",
    color: "black",
    fontSize: "24px",
    backgroundColor: "white"
  };

  handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      text: e.currentTarget.value
    });
  };
  render() {
    const { text, color, fontSize, backgroundColor } = this.state;
    return (
      <div className={cx(`${moduleName}`)}>
        <Preview
          text={text}
          color={color}
          fontSize={fontSize}
          backgroundColor={backgroundColor}
        />
        <Input handleInputChange={this.handleInputChange} />
        <Palette />
      </div>
    );
  }
}

export default App;
