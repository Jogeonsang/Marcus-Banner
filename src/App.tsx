import React, { Component } from "react";
import classnames from "classnames/bind";
import styles from "./App.scss";

import Input from "./component/Input";

const moduleName = "App";
const cx = classnames.bind(styles);
interface Props {}

interface State {
  text: string;
}

class App extends React.Component<Props, State> {
  state: State = {
    text: ""
  };

  handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      text: e.currentTarget.value
    });
  };
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <Input handleInputChange={this.handleInputChange} />
      </div>
    );
  }
}

export default App;
