import { memo } from "react";
import styled from "styled-components";

const FrameChild = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 98px;
  left: 0px;
  background-color: var(--color-tomato-100);
  width: 309px;
  height: 3px;
  z-index: 0;
`;
const UtEnimAd = styled.div`
  position: relative;
  font-weight: 600;
  display: inline-block;
  width: 552px;
  flex-shrink: 0;
  z-index: 1;
`;
const RectangleParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: var(--gap-3xs);
`;
const UtEnimAd1 = styled.div`
  position: relative;
  font-size: var(--font-size-xl);
  font-family: var(--font-lato);
  color: var(--color-gray-200);
  display: inline-block;
  width: 528px;
  height: 103px;
  flex-shrink: 0;
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xl);
`;
const FrameWrapper = styled.div`
  position: absolute;
  top: 224px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameItem = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 98px;
  left: 310px;
  background-color: var(--color-tomato-100);
  width: 309px;
  height: 3px;
  z-index: 0;
`;
const UtEnimAd2 = styled.div`
  position: relative;
  font-weight: 600;
  display: inline-block;
  width: 618px;
  flex-shrink: 0;
  z-index: 1;
`;
const RectangleGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
  gap: var(--gap-3xs);
`;
const UtEnimAd3 = styled.div`
  position: relative;
  font-size: var(--font-size-xl);
  font-family: var(--font-lato);
  color: var(--color-gray-200);
  display: inline-block;
  width: 528px;
  height: 102px;
  flex-shrink: 0;
`;
const FrameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-6xl);
`;
const FrameContainer = styled.div`
  position: absolute;
  top: 754px;
  left: 459px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  text-align: right;
`;
const UtEnimAd4 = styled.a`
  position: relative;
  font-size: var(--font-size-xl);
  font-family: var(--font-lato);
  color: var(--color-gray-200);
  display: inline-block;
  width: 528px;
  height: 107px;
  flex-shrink: 0;
  text-decoration: none;
`;
const FrameWrapper1 = styled.div`
  position: absolute;
  top: 1339px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Frame = styled.div`
  position: absolute;
  top: 382px;
  left: 602px;
  width: 213.8px;
  height: 67.5px;
  overflow: hidden;
`;
const Frame1 = styled.div`
  position: absolute;
  top: 189px;
  left: 951px;
  width: 36.2px;
  height: 35px;
  overflow: hidden;
`;
const Frame2 = styled.div`
  position: absolute;
  top: 740px;
  left: 329px;
  width: 36.2px;
  height: 35px;
  overflow: hidden;
`;
const NequePorroQuisquam = styled.div`
  position: relative;
  font-weight: 600;
`;
const FrameIcon = styled.img`
  position: relative;
  width: 283.6px;
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
`;
const NequePorroQuisquamEstQuiDParent = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 421px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-mini);
  font-size: var(--font-size-26xl);
`;
const FrameParentRoot = styled.div`
  position: absolute;
  top: 911px;
  left: 169px;
  width: 1077px;
  height: 1559px;
  text-align: left;
  font-size: var(--font-size-17xl);
  color: var(--color-black);
  font-family: var(--font-inter);
`;

const ContainerCardForm = memo(() => {
  return (
    <FrameParentRoot>
      <FrameWrapper>
        <FrameGroup>
          <RectangleParent>
            <FrameChild />
            <UtEnimAd>
              Ut enim ad minima veniam, quis nostrum exercitationem
            </UtEnimAd>
          </RectangleParent>
          <UtEnimAd1>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            al
          </UtEnimAd1>
        </FrameGroup>
      </FrameWrapper>
      <FrameContainer>
        <FrameDiv>
          <RectangleGroup>
            <FrameItem />
            <UtEnimAd2>
              Ut enim ad minima veniam, quis nostrum exercitationem
            </UtEnimAd2>
          </RectangleGroup>
          <UtEnimAd3>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            al
          </UtEnimAd3>
        </FrameDiv>
      </FrameContainer>
      <FrameWrapper1>
        <FrameGroup>
          <RectangleParent>
            <FrameChild />
            <UtEnimAd>
              Ut enim ad minima veniam, quis nostrum exercitationem
            </UtEnimAd>
          </RectangleParent>
          <UtEnimAd4 href="https://paccounting.id/" target="_blank">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            al
          </UtEnimAd4>
        </FrameGroup>
      </FrameWrapper1>
      <Frame />
      <Frame1 />
      <Frame2 />
      <NequePorroQuisquamEstQuiDParent>
        <NequePorroQuisquam>
          Neque porro quisquam est qui dolorem 
        </NequePorroQuisquam>
        <FrameIcon alt="" src="/frame.svg" />
      </NequePorroQuisquamEstQuiDParent>
    </FrameParentRoot>
  );
});

export default ContainerCardForm;
