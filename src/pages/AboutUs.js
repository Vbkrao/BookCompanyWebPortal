import styled from "styled-components";
import Header1 from "../components/Header1";
import ContainerCardForm from "../components/ContainerCardForm";
import SectionCard3 from "../components/SectionCard3";

const VectorIcon = styled.img`
  position: absolute;
  height: 0.23%;
  width: 1.19%;
  top: 0.34%;
  right: 8.23%;
  bottom: 99.44%;
  left: 90.58%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 0.32%;
  width: 0.74%;
  top: 0.29%;
  right: 20.51%;
  bottom: 99.39%;
  left: 78.75%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon2 = styled.img`
  position: absolute;
  height: 0.25%;
  width: 1.09%;
  top: 0.32%;
  right: 16.43%;
  bottom: 99.43%;
  left: 82.48%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon3 = styled.img`
  position: absolute;
  height: 0.25%;
  width: 1.04%;
  top: 0.32%;
  right: 12.41%;
  bottom: 99.43%;
  left: 86.55%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon4 = styled.img`
  position: absolute;
  height: 0.22%;
  width: 0.94%;
  top: 0.34%;
  right: 4.31%;
  bottom: 99.44%;
  left: 94.75%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon5 = styled.img`
  position: absolute;
  height: 0.32%;
  width: 1.04%;
  top: 0.31%;
  right: 94.65%;
  bottom: 99.37%;
  left: 4.31%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Image93Icon = styled.img`
  position: absolute;
  top: 243px;
  left: 4px;
  width: 1440px;
  height: 584px;
  object-fit: cover;
`;
const AboutUs1 = styled.div`
  position: relative;
  font-weight: 600;
`;
const LoremIpsumIs = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  font-weight: 500;
  text-align: center;
  display: inline-block;
  width: 663px;
`;
const AboutUsParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 35px;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 273px;
  left: 264px;
  border-radius: var(--br-5xs);
  background-color: var(--color-tomato-100);
  width: 135px;
  height: 40px;
`;
const SeeMore = styled.div`
  position: absolute;
  top: 284px;
  left: 283px;
  font-size: var(--font-size-base);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
`;
const FrameParent = styled.div`
  position: absolute;
  top: 394px;
  left: 389px;
  width: 663px;
  height: 313px;
  text-align: left;
  font-size: 96px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-5xs);
  background-color: var(--color-tomato-100);
  width: 242px;
  height: 53px;
`;
const ViewMore = styled.div`
  position: absolute;
  top: 14px;
  left: 34px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 173.9px;
  height: 25.2px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 1369px;
  left: 169px;
  width: 242px;
  height: 53px;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 1910px;
  left: 1005px;
  width: 242px;
  height: 53px;
`;
const RectangleContainer = styled.div`
  position: absolute;
  top: 2482px;
  left: 169px;
  width: 242px;
  height: 53px;
`;
const Image94Icon = styled.img`
  position: absolute;
  top: 1118px;
  left: 771px;
  width: 475px;
  height: 364px;
  object-fit: cover;
`;
const Image95Icon = styled.img`
  position: absolute;
  top: 1606px;
  left: 169px;
  width: 493px;
  height: 383px;
  object-fit: cover;
`;
const Image96Icon = styled.img`
  position: absolute;
  top: 2185px;
  left: 741px;
  width: 505px;
  height: 396px;
  object-fit: cover;
`;
const AboutUsRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 3331px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color-white);
  font-family: var(--font-inter);
`;

const AboutUs = () => {
  return (
    <AboutUsRoot>
      <VectorIcon alt="" src="/vector.svg" />
      <VectorIcon1 alt="" src="/vector.svg" />
      <VectorIcon2 alt="" src="/vector.svg" />
      <VectorIcon3 alt="" src="/vector.svg" />
      <VectorIcon4 alt="" src="/vector.svg" />
      <VectorIcon5 alt="" src="/vector.svg" />
      <Header1 />
      <Image93Icon alt="" src="/image-93@2x.png" />
      <FrameParent>
        <AboutUsParent>
          <AboutUs1>About Us</AboutUs1>
          <LoremIpsumIs>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since `}</LoremIpsumIs>
        </AboutUsParent>
        <FrameChild />
        <SeeMore>SEE MORE</SeeMore>
      </FrameParent>
      <ContainerCardForm />
      <RectangleParent>
        <GroupChild />
        <ViewMore>vIEW MORE</ViewMore>
      </RectangleParent>
      <RectangleGroup>
        <GroupChild />
        <ViewMore>vIEW MORE</ViewMore>
      </RectangleGroup>
      <RectangleContainer>
        <GroupChild />
        <ViewMore>vIEW MORE</ViewMore>
      </RectangleContainer>
      <Image94Icon alt="" src="/image-94@2x.png" />
      <Image95Icon alt="" src="/image-95@2x.png" />
      <Image96Icon alt="" src="/image-96@2x.png" />
      <SectionCard3 propTop="2735px" />
    </AboutUsRoot>
  );
};

export default AboutUs;
