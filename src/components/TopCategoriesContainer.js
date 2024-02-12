import { memo } from "react";
import styled from "styled-components";
import ViewMoreButton from "./ViewMoreButton";

const GroupChild = styled.div`
  position: absolute;
  top: 8.8px;
  left: 0px;
  background-color: var(--color-tomato-100);
  width: 32.2px;
  height: 1.9px;
`;
const Categories = styled.b`
  position: absolute;
  top: 0px;
  left: 43.8px;
  letter-spacing: 0.1em;
  display: inline-block;
  width: 201.7px;
  height: 18.5px;
`;
const ExploreOurTop = styled.b`
  position: absolute;
  top: 30.2px;
  left: 0px;
  font-size: var(--font-size-13xl);
  line-height: 44px;
  display: inline-block;
  color: var(--color-darkslateblue-200);
  width: 514.4px;
  height: 41.9px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 514.4px;
  height: 72.1px;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-tomato-100);
`;
const GroupItem = styled.img`
  position: absolute;
  top: 117.9px;
  left: 0px;
  border-radius: var(--br-3xs);
  width: 405.3px;
  height: 240.6px;
  object-fit: cover;
`;
const GroupInner = styled.div`
  position: absolute;
  top: 450.1px;
  left: 0px;
  background-color: var(--color-silver-100);
  width: 405.3px;
  height: 21.4px;
  opacity: 0;
`;
const HigherEducation = styled.div`
  position: absolute;
  top: 392.6px;
  left: 83.8px;
  line-height: 32px;
  font-weight: 600;
  display: inline-block;
  width: 239.7px;
  height: 35.1px;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 519.3px;
  left: 0px;
  background-color: var(--color-silver-100);
  width: 405.3px;
  height: 10.7px;
  opacity: 0;
`;
const RectangleIcon = styled.img`
  position: absolute;
  top: 117.9px;
  left: 438.4px;
  border-radius: var(--br-3xs);
  width: 404.3px;
  height: 240.6px;
  object-fit: cover;
`;
const GroupChild1 = styled.div`
  position: absolute;
  top: 450.1px;
  left: 437.4px;
  background-color: var(--color-silver-100);
  width: 405.3px;
  height: 21.4px;
  opacity: 0;
`;
const ManagementBooks = styled.div`
  position: absolute;
  top: 392.6px;
  left: 509.5px;
  font-weight: 600;
  display: inline-block;
  width: 261.1px;
  height: 35.1px;
`;
const GroupChild2 = styled.div`
  position: absolute;
  top: 519.3px;
  left: 437.4px;
  background-color: var(--color-silver-100);
  width: 405.3px;
  height: 10.7px;
  opacity: 0;
`;
const GroupChild3 = styled.img`
  position: absolute;
  top: 117.9px;
  left: 875.9px;
  border-radius: var(--br-3xs);
  width: 405.3px;
  height: 240.6px;
  object-fit: cover;
`;
const GroupChild4 = styled.div`
  position: absolute;
  top: 450.1px;
  left: 875.9px;
  background-color: var(--color-silver-100);
  width: 405.3px;
  height: 21.4px;
  opacity: 0;
`;
const EngineeringBooks = styled.div`
  position: absolute;
  top: 392.6px;
  left: 940.2px;
  font-weight: 600;
  display: inline-block;
  width: 278.6px;
  height: 35.1px;
`;
const GroupChild5 = styled.div`
  position: absolute;
  top: 519.3px;
  left: 875.9px;
  background-color: var(--color-silver-100);
  width: 405.3px;
  height: 10.7px;
  opacity: 0;
`;
const SliderArrowBtn = styled.img`
  position: absolute;
  top: 11.7px;
  left: 1154.5px;
  width: 126.7px;
  height: 48.7px;
`;
const GroupContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1281.2px;
  height: 530px;
`;
const GroupParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1281.2px;
  height: 544px;
`;
const HomeInnerRoot = styled.div`
  position: absolute;
  top: 945px;
  left: calc(50% - 641px);
  width: 1281.2px;
  height: 544px;
  text-align: center;
  font-size: var(--font-size-5xl);
  color: var(--color-darkslateblue-200);
  font-family: var(--font-inter);
`;

const TopCategoriesContainer = memo(() => {
  return (
    <HomeInnerRoot>
      <GroupParent>
        <GroupContainer>
          <RectangleParent>
            <GroupChild />
            <Categories>Categories</Categories>
            <ExploreOurTop>Explore our Top Categories</ExploreOurTop>
          </RectangleParent>
          <GroupItem alt="" src="/rectangle-11@2x.png" />
          <GroupInner />
          <HigherEducation>Higher Education</HigherEducation>
          <RectangleDiv />
          <RectangleIcon alt="" src="/rectangle-11@2x.png" />
          <GroupChild1 />
          <ManagementBooks>Management Books</ManagementBooks>
          <GroupChild2 />
          <GroupChild3 alt="" src="/rectangle-11@2x.png" />
          <GroupChild4 />
          <EngineeringBooks>Engineering Books</EngineeringBooks>
          <GroupChild5 />
          <SliderArrowBtn alt="" src="/slider-arrow-btn.svg" />
        </GroupContainer>
        <ViewMoreButton
          buttonText="View more"
          propTop="483px"
          propLeft="533px"
        />
      </GroupParent>
    </HomeInnerRoot>
  );
});

export default TopCategoriesContainer;
