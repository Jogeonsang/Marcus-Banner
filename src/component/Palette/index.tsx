import React from "react";
import classnames from "classnames/bind";

import styles from "./index.scss";

const moduleName = "PaletteBox";
const cx = classnames.bind(styles);
/** @type {{hover: React.CSSProperties}} */

interface Props {
  paletteBox: Array<{ color: string; name: string }>;
}

const Palette: React.SFC<Props> = ({ paletteBox }) => (
  <div className={cx(`${moduleName}`)}>
    {paletteBox.map(palette => (
      <ul>
        <li
          className={cx(`${moduleName}-palette`)}
          style={{ color: "#868e96" }}
        >
          <span
            className={cx(`${moduleName}-palette-box`)}
            style={{ backgroundColor: palette.color }}
          />
          {palette.name}
        </li>
      </ul>
    ))}
  </div>
);

export default Palette;
