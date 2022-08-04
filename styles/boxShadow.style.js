export function BoxShadow(width, height) {
  return {
    width,
    height,
    backgroundColor: "#FFFFFF",
    borderRadius: "18px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#c7cdd6",
      opacity: [0.9, 0.8, 0.7],
    },
  };
}
export function BoxShadowTabs(my) {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    my,
    // mr: "40px",
    // width: "285px",
    height: "55px",
    backgroundColor: "#FFFFFF",
    borderRadius: "15px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    "&:hover": {
      backgroundColor: "#c7cdd6",
      opacity: [0.9, 0.8, 0.7],
    },
  };
}

export function SignInPaperStyle() {
  return {
    backgroundColor: "#FFFFFF",
    borderRadius: "18px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

    "&:hover": {
      boxShadow: "4px 16px 16px rgba(0, 0, 0, 0.7)",
      opacity: [0.9, 0.9, 0.9],
    },

    maxWidth: 400,
    mx: "auto",
    my: 4,
    py: 3,
    px: 2,
    display: "flex",
    flexDirection: "column",
    gap: 2,
  };
}
export function createTabStyle() {
  return {
    textTransform: "none",
    // width: "162px",

    height: "36px",
    fontFamily: "Kanit",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "30px",
    color: "#000001",

    "&:hover": {
      color: "#1374F9",
      // boxShadow: "4px 16px 16px rgba(0, 0, 0, 0.7)",
      // opacity: [0.9, 0.9, 0.9],
    },
  };
}
