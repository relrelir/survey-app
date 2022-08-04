export function TypographyStyle() {
  return {
    fontFamily: "Kanit",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "30px",
    color: "#000000",
  };
}
export function InputStyle(width, height, borderTop, borderBottom) {
  return {
    boxSizing: "border-box",

    paddingInlineStart: "10%",
    paddingInlineEnd: "10%",

    textDecoration: "none",
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
export function InputNumberStyle(width, height, borderTop, borderBottom) {
  return {
    boxSizing: "border-box",

    paddingInlineStart: "30%",
    paddingInlineEnd: "20%",

    textDecoration: "none",
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
export function TypoQuestionsStyle() {
  return {
    mt: "10%",
    width: "58px",
    height: "21px",
    fontFamily: "Kanit",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "27px",
    lineHeight: "21px",
    textAlign: "center",
    color: "#9C9B9B",
    alignSelf: "start",
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
export function numbersStyle() {
  return {
    width: "17px",
    height: "45px",

    fontFamily: "Kanit",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "30px",
    lineHeight: "45px",

    textTransform: "none",
    color: "#1374F9",
  };
}
export function tabTitleStyle() {
  return {
    position: "relative",
    width: "240px",
    height: "36px",
    textTransform: "none",
    fontFamily: "Kanit",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "55px",
    color: "#000000",
    "&:hover": { fontWeight: 500, fontSize: "26px", ml: "3px" },
  };
}
export function tabHeaderStyle() {
  return {
    fontSize: 33,
    textTransform: "none",
    fontFamily: "Kanit",
    color: "black",
    fontWeight: 700,
    lineHeight: 2.5,
    "&:hover": { fontWeight: 800, fontSize: "33", textTransform: "none" },
  };
}
export function AddChoiceStyle() {
  return {
    // width: "139px",
    height: "42px",
    fontFamily: "Kanit",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "28px",
    lineHeight: "42px",
    textTransform: "none",
    color: "#1374F9",
  };
}
