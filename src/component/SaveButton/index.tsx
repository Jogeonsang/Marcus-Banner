import React from "react";
import classnames from "classnames/bind";
import styles from "./styles.scss";

const moduleName = "SaveButton";
const cx = classnames.bind(styles);

interface Props {
  href: string;
  backgroundColor: string;
}

const SaveButton: React.SFC<Props> = ({ href, backgroundColor }) => (
  <div className={cx(`${moduleName}`)}>
    <a
      href={href}
      download="banner-image.png"
      className={cx(`${moduleName}-button`)}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      SAVE ME!
    </a>
  </div>
);

export default SaveButton;
