// 자주 사용하는 색을 객체로 만들자.
const colors = {
  gray_hex: "#f2f4ff",
  orange_rgb: "254, 185, 145",
  $purple_rgb: "140, 75, 255",
};

const windowSize = {
  small: "600px",
};
// theme 객체에 감싸서 반환한다.
const theme = {
  colors,
  windowSize,
};

export default theme;
