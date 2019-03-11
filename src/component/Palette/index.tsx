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
    <ul className={cx(`${moduleName}-wrap`)}>
      {paletteBox.map(palette => (
        <li className={cx(`${moduleName}-palettes`)}>
          <div
            className={cx(`${moduleName}-palette`)}
            style={{
              color: "#868e96",
              ":hover": { color: `${palette.color}` }
            }}
          >
            <span
              className={cx(`${moduleName}-palette-box`)}
              style={{ backgroundColor: palette.color }}
            />
            {palette.name}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Palette;
