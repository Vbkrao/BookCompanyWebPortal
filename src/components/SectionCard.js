import { memo } from "react";
import styled from "styled-components";
import ViewMoreButton from "./ViewMoreButton";
import SliderDotsIcon from "./SliderDotsIcon";

const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background: linear-gradient(78.83deg, #ffe6e6 10.79%, #f5fffe 68.55%, #fff);
  width: 1440px;
  height: 657px;
`;
const GroupItem = styled.img`
  position: absolute;
  top: 305px;
  left: 1343px;
  width: 48.7px;
  height: 48.7px;
  object-fit: contain;
`;
const LoremIpsumDolor = styled.div`
  position: absolute;
  top: 96px;
  left: 0px;
  letter-spacing: 0.04em;
  line-height: 180%;
  font-weight: 500;
  display: inline-block;
  width: 607px;
  height: 165px;
`;
const IpsumDolorSi = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: var(--font-size-41xl);
  letter-spacing: -0.02em;
  line-height: 145%;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-darkslateblue-200);
  display: inline-block;
  width: 471.1px;
`;
const LoremIpsumDolorSitAmetCoParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 607px;
  height: 261px;
`;
const GroupContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 607px;
  height: 350px;
`;
const GroupParent = styled.div`
  position: absolute;
  top: 112px;
  left: 149px;
  width: 607px;
  height: 433px;
`;
const GroupInner = styled.div`
  position: absolute;
  top: 305px;
  left: 51px;
  border-radius: 50%;
  background-color: var(--color-white);
  border: 1px solid var(--color-tomato-100);
  box-sizing: border-box;
  width: 48.7px;
  height: 48.7px;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 1.69%;
  width: 1.35%;
  top: 49.16%;
  right: 94.09%;
  bottom: 49.15%;
  left: 4.56%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1440px;
  height: 657px;
`;
const HomeInnerRoot = styled.div`
  position: absolute;
  top: 235px;
  left: 0px;
  width: 1440px;
  height: 657.3px;
  text-align: left;
  font-size: var(--font-size-3xl);
  color: var(--color-darkslateblue-300);
  font-family: var(--font-inter);
`;

const SectionCard = memo(() => {
  return (
    <HomeInnerRoot>
      <RectangleParent>
        <GroupChild />
        <GroupItem alt="" src="/group-296@2x.png" />
        <GroupParent>
          <GroupContainer>
            <LoremIpsumDolorSitAmetCoParent>
              <LoremIpsumDolor>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                feugiat amet, libero ipsum enim pharetra hac. Urna commodo,
                lacus ut magna velit eleifend. Amet, quis urna, a eu.
              </LoremIpsumDolor>
              <IpsumDolorSi>ipsum dolor si</IpsumDolorSi>
            </LoremIpsumDolorSitAmetCoParent>
            <ViewMoreButton
              buttonText="Read more"
              propTop="289px"
              propLeft="0px"
            />
          </GroupContainer>
          <SliderDotsIcon />
        </GroupParent>
        <GroupInner />
        <VectorIcon alt="" src="/vector.svg" />
      </RectangleParent>
    </HomeInnerRoot>
  );
});

export default SectionCard;
