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
export function BoxShadowTabs() {
  return {
    my: "8px",
    width: "250px",
    height: "61px",
    backgroundColor: "#FFFFFF",
    borderRadius: "18px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

    "&:hover": {
      backgroundColor: "#c7cdd6",
      opacity: [0.9, 0.8, 0.7],
    },
  };
}
export function TextTabsStyle() {
  return {
    customLabelColor: {
      width: "22px",
      height: "45px",
      fontFamily: "Kanit",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "30px",
      lineHeight: "45px",
      color: "#1374F9",
    },
  };
}
