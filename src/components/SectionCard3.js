import { memo } from "react";
import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-tomato-100);
  width: 1440px;
  height: 596px;
`;
const NostrudExercitationUllamco = styled.div`
  position: absolute;
  top: 96px;
  left: 0px;
  letter-spacing: 0.02em;
  line-height: 34px;
  display: inline-block;
  width: 368px;
  height: 68px;
`;
const Company = styled.div`
  position: absolute;
  top: 0px;
  left: 483px;
  font-size: var(--font-size-5xl);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-weight: 600;
`;
const ImportantLinks = styled.div`
  position: absolute;
  top: 0px;
  left: 776px;
  font-size: var(--font-size-5xl);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-weight: 600;
`;
const Home1 = styled.p`
  margin-block-start: 0;
  margin-block-end: 15px;
`;
const Poem = styled.p`
  margin: 0;
`;
const HomeAboutUsContainer = styled.div`
  position: absolute;
  top: 68px;
  left: 483px;
  letter-spacing: 0.02em;
  font-weight: 600;
`;
const PrivacyPolicyFaqsContainer = styled.div`
  position: absolute;
  top: 68px;
  left: 775px;
  letter-spacing: 0.02em;
  font-weight: 600;
`;
const ArihantAllRights = styled.span``;
const PrivacyTerms = styled.b``;
const ArihantAllRightsContainer = styled.div`
  position: absolute;
  top: 372px;
  left: 0px;
  letter-spacing: 0.02em;
  white-space: pre-wrap;
`;
const Image89RemovebgPreview1Icon = styled.img`
  position: absolute;
  top: 13px;
  left: 0px;
  width: 168px;
  height: 73px;
  object-fit: cover;
`;
const MaskGroupIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 44.2px;
  height: 44.2px;
  object-fit: cover;
`;
const MaskGroupIcon1 = styled.img`
  position: absolute;
  top: 0px;
  left: 214.6px;
  width: 44.2px;
  height: 44.2px;
  object-fit: cover;
`;
const MaskGroupIcon2 = styled.img`
  position: absolute;
  top: 0px;
  left: 107.3px;
  width: 44.2px;
  height: 44.2px;
  object-fit: cover;
`;
const MaskGroupIcon3 = styled.img`
  position: absolute;
  top: 0px;
  left: 321.8px;
  width: 44.2px;
  height: 44.2px;
  object-fit: cover;
`;
const Icon = styled.div`
  position: absolute;
  top: 207.4px;
  left: 0px;
  width: 366px;
  height: 44.2px;
`;
const NostrudExercitationUllamcoLParent = styled.div`
  position: absolute;
  top: 101px;
  left: 143px;
  width: 1155px;
  height: 394px;
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1440px;
  height: 596px;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-white);
  font-family: var(--font-inter);
  top: ${(p) => p.propTop};
`;

const SectionCard3 = memo(({ propTop }) => {
  return (
    <RectangleParentRoot propTop={propTop}>
      <GroupChild />
      <NostrudExercitationUllamcoLParent>
        <NostrudExercitationUllamco>{`Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</NostrudExercitationUllamco>
        <Company>Company</Company>
        <ImportantLinks>Important Links</ImportantLinks>
        <HomeAboutUsContainer>
          <Home1>HOME</Home1>
          <Home1>ABOUT US</Home1>
          <Home1>BOOKS</Home1>
          <Poem>POEM</Poem>
        </HomeAboutUsContainer>
        <PrivacyPolicyFaqsContainer>
          <Home1>Privacy Policy</Home1>
          <Home1>FAQs</Home1>
          <Poem>Terms of Service</Poem>
        </PrivacyPolicyFaqsContainer>
        <ArihantAllRightsContainer>
          <ArihantAllRights>{`© 2022 Arihant. All Rights Reserved.
                                                                                                          `}</ArihantAllRights>
          <PrivacyTerms>Privacy | Terms of Service</PrivacyTerms>
        </ArihantAllRightsContainer>
        <Image89RemovebgPreview1Icon
          alt=""
          src="/image-89removebgpreview-1@2x.png"
        />
        <Icon>
          <MaskGroupIcon alt="" src="/mask-group@2x.png" />
          <MaskGroupIcon1 alt="" src="/mask-group@2x.png" />
          <MaskGroupIcon2 alt="" src="/mask-group@2x.png" />
          <MaskGroupIcon3 alt="" src="/mask-group@2x.png" />
        </Icon>
      </NostrudExercitationUllamcoLParent>
    </RectangleParentRoot>
  );
});

export default SectionCard3;
