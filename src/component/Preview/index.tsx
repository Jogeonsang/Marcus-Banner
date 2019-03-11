import React from "react";
import classnames from "classnames/bind";
import styles from "./index.scss";

const moduleName = "Preview";
const cx = classnames.bind(styles);

interface Props {
  text: string;
  color: string;
  fontSize: string;
  backgroundColor: string;
}

const Preview: React.SFC<Props> = ({
  text,
  color,
  fontSize,
  backgroundColor
}) => (
  <div className={cx(`${moduleName}`)}>
    <div
      className={cx(`${moduleName}-container`)}
      style={{
        color: `${color}`,
        fontSize: `${fontSize}`,
        backgroundColor: `${backgroundColor}`
      }}
    >{`${text}`}</div>
  </div>
);
export default Preview;
