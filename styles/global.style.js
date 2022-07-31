export function TypographyStyle() {
  return {
    width: "267px",
    height: "45px",
    fontFamily: "Kanit",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "30px",
    lineHeight: "45px",
    color: "#000000",
  };
}
export function InputStyle(height, width, borderTop, borderBottom) {
  return {
    boxSizing: "border-box",

    textIndent: "50%",

    borderTop,
    borderBottom,
    height,
    width,
    fontSize: "250%",
    background: "#FFFFFF",
    border: "2px solid #1374F9",
    borderRadius: "40px",
  };
}
export function InputAnsStyle(height, width) {
  return {
    boxSizing: "border-box",

    textIndent: "50%",

    height,
    width,
    fontSize: "150%",
    background: "#FFFFFF",
    border: "2px solid #1374F9",
    borderRadius: "40px",
  };
}
export function NavigateButtonsStyle() {
  return {
    width: "77px",
    height: "45px",
    fontFamily: "Kanit",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "30px",
    lineHeight: "45px",
    color: "#9C9B9B",

    "&:hover": {
      opacity: [0.9, 0.8, 0.7],
      color: "#1374F9",
    },
  };
}
export function AvatarStyle(width, height) {
  return {
    width,
    height,
    border: "6px solid #1374F9",
    borderRadius: "206px",
  };
}
export function ButtonRoundStyle(width, height) {
  return {
    width,
    height,
    background: "#1374F9",
    borderRadius: "40px",
  };
}
export function TypoUserEditStyle() {
  return {
    fontFamily: "Kanit",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "30px",
    lineHeight: "45px",
    color: "#FFFFFF",
    textTransform: "none",
  };
}
export function FormLabelStyle() {
  return {
    fontFamily: "Kanit",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "30px",
    lineHeight: "45px",
    color: "#BDBCBC",
    textTransform: "none",
  };
}
export function deleteButtonStyle(width, height) {
  return {
    width,
    height,
    background: "#FDFDFD",
    border: "2px solid #9C9B9B",
    borderRadius: "11px",

    "&:hover": {
      cursor: "pointer",
      borderRadius: "8px",
      border: "2px solid #1374F9",
    },
  };
}
export function numbersStyleStyle() {
  return {
    width: "17px",
    height: "45px",

    fontFamily: "Kanit",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "30px",
    lineHeight: "45px",
    /* identical to box height */

    color: "#1374F9",
  };
}
