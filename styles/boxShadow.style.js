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
export function ButtonDeleteTabs() {
  return {
    mr: "74%",
    "&:hover": {
      backgroundColor: "#002984",
      opacity: [0.0, 0.0, 0.9],
    },
  };
}
