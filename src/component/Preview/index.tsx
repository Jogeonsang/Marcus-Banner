import React, { Component, createRef } from "react";
import classnames from "classnames/bind";
import styles from "./index.scss";

const moduleName = "Preview";
const cx = classnames.bind(styles);

interface Props {
  text: string;
  color: string;
  fontSize: string;
  backgroundColor: string;
  href: string;
  handleCanvasChange(href: string): void;
}

class Preview extends Component<Props> {
  canvasRef: any = createRef<HTMLDivElement>();

  constructor(props: Props) {
    super(props);
  }
  componentDidMount() {
    const canvas: any = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    const {
      text,
      color,
      fontSize,
      backgroundColor,
      href,
      handleCanvasChange
    } = this.props;

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.setFont(canvas, text, {
      color: "white",
      size: fontSize
    });
    this.drawText(canvas, text);

    const url = canvas.toDataURL();
    href !== url && handleCanvasChange(url);
  }
  componentDidUpdate() {
    const canvas: any = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    const {
      text,
      color,
      fontSize,
      backgroundColor,
      href,
      handleCanvasChange
    } = this.props;

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.setFont(canvas, text, {
      color: "white",
      size: fontSize
    });
    this.drawText(canvas, text);

    const url = canvas.toDataURL();
    href !== url && handleCanvasChange(url);
  }

  setFont = (canvas: any, text: string, args: any) => {
    const ctx = canvas.getContext("2d");
    const { color, size } = args;
    ctx.font = `${size} SE Pro`;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
  };

  drawText = (canvas: any, text: string): void => {
    const ctx = canvas.getContext("2d");
    const defaultWidth = canvas.width / 2;
    const defaultHeight = canvas.height / 2;
    const fontHeight = 24 * 10;
    const SEPARATOR = "\\n";
    const lines: string[] = text.split(SEPARATOR);

    if (lines.length % 2) {
      lines.map((line: string, index: number) => {
        const middle = lines.length / 2;
        const h = defaultHeight + (index - middle);
        ctx.fillText(line, defaultWidth, h);
        return null;
      });
    } else {
      const mid = (lines.length - 1) / 2;
      const offsets: Array<any> = lines
        .map((line, index) => index)
        .reduce((prev: Array<Object>, curr) => {
          const subtract = curr - mid;
          prev.push([subtract < 0, subtract]);
          return prev;
        }, []);
      offsets.map(([sign, offset], index: number) => {
        const position = offset * fontHeight;
        const e = sign ? (fontHeight / 2) * -1 : fontHeight / 2;
        const h = defaultHeight + position + e;
        ctx.fillText(lines[index], defaultWidth, h);
        return null;
      });
    }
  };
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <canvas
          className={cx(`${moduleName}-container`)}
          ref={this.canvasRef}
          width="800px"
          height="400px"
        />
      </div>
    );
  }
}
export default Preview;
