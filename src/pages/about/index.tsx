/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const baseStyled = css({
  backgroundColor: "red",
});

// const demo = css`
//   background-color: red;
//   width: 500px;
//   height: 500px;
// `;

const demo = css({
  backgroundColor: "red",
  width: "500px",
  height: "500px",
});

const Index = () => {
  return <div css={demo}>hello</div>;
};

export default Index;
