const { useState } = require("react");

const initialState = (width) => {
  if (width <= 900) {
    return "small";
  } else if (width <= 1200) {
    return "middle";
  } else {
    return "large";
  }
};

export const useWindowSizeObserver = () => {
  const [windowSize, setWindowSize] = useState(initialState(window.innerWidth));
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 900 && windowSize !== "small") {
      setWindowSize("small");
    } else if (window.innerWidth > 900 && window.innerWidth <= 1200 && windowSize !== "middle") {
      setWindowSize("middle");
    } else if (window.innerWidth > 1200 && windowSize !== "large") {
      setWindowSize("large");
    }
  });
  return windowSize;
};
