import { memo } from "react";
import styled from "styled-components";

const SliderDotsIconRoot = styled.img`
  position: absolute;
  top: 394px;
  left: 0px;
  width: 132px;
  height: 39px;
`;

const SliderDotsIcon = memo(() => {
  return <SliderDotsIconRoot alt="" src="/slider-dots.svg" />;
});

export default SliderDotsIcon;
