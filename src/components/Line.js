import { memo } from "react";
import styled from "styled-components";

const LineDivRoot = styled.div`
  border-top: 1px solid var(--color-gray-400);
  box-sizing: border-box;
  width: 36.2px;
  height: 1px;
  transform: rotate(45.19deg);
  transform-origin: 0 0;
`;

const Line = memo(() => {
  return <LineDivRoot />;
});

export default Line;
