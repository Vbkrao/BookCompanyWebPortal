import { memo } from "react";
import styled from "styled-components";

const BtnChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-6xs);
  border: 1px solid var(--color-darkslateblue-200);
  box-sizing: border-box;
  width: 197px;
  height: 61px;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 16.39%;
  width: 6.6%;
  top: 40.98%;
  right: 17.77%;
  bottom: 42.62%;
  left: 75.63%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const ViewMore = styled.div`
  position: absolute;
  top: 12px;
  left: 35px;
  letter-spacing: 0.1em;
  line-height: 220%;
  text-transform: uppercase;
`;
const BtnRoot = styled.div`position: absolute;
  top: 483px;
  left: 533px;
  width: 197px;
  height: 61px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-darkslateblue-200);
  font-family: var(--font-inter);
  top: ${(p) => p.propTop}
  left: ${(p) => p.propLeft}
`;

const ViewMoreButton = memo(({ buttonText, propTop, propLeft }) => {
  return (
    <BtnRoot propTop={propTop} propLeft={propLeft}>
      <BtnChild />
      <VectorIcon alt="" src="/vector.svg" />
      <ViewMore>{buttonText}</ViewMore>
    </BtnRoot>
  );
});

export default ViewMoreButton;
