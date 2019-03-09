import React from "react";
import classnames from "classnames/bind";
import styles from "./index.scss";

const moduleName = "Input";
const cx = classnames.bind(styles);

interface Props {
  handleInputChange(): void;
}

const Input: React.SFC<Props> = ({ handleInputChange }) => (
  <div>
    <input
      className={cx(`${moduleName}-input`)}
      type="text"
      placeholder="Please enter text"
      onChange={handleInputChange}
    />
  </div>
);
export default Input;
