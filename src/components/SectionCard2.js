import { memo } from "react";
import SectionCard3 from "./SectionCard3";
import styled from "styled-components";

const FrameWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1440px;
  height: 596px;
`;
const HomeInnerRoot = styled.div`
  position: absolute;
  top: 4077px;
  left: 0px;
  width: 1440px;
  height: 596px;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-white);
  font-family: var(--font-inter);
`;

const SectionCard2 = memo(() => {
  return (
    <HomeInnerRoot>
      <FrameWrapper>
        <FrameWrapper>
          <FrameWrapper>
            <SectionCard3 propTop="0px" />
          </FrameWrapper>
        </FrameWrapper>
      </FrameWrapper>
    </HomeInnerRoot>
  );
});

export default SectionCard2;
