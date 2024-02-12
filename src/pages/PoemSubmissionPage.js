import styled from "styled-components";
import ContainerNavbarFrame from "../components/ContainerNavbarFrame";
import SectionCard3 from "../components/SectionCard3";

const VectorIcon = styled.img`
  position: absolute;
  height: 0.9%;
  width: 1.04%;
  top: 0.85%;
  right: 94.65%;
  bottom: 98.25%;
  left: 4.31%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const PoemSubmission = styled.div`
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
const PoemSubmissionParent = styled.div`
  position: absolute;
  top: 262px;
  left: calc(50% - 194.5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-mini);
  font-size: var(--font-size-26xl);
`;
const Image95Icon = styled.img`
  position: absolute;
  top: 513px;
  left: 76px;
  width: 660px;
  height: 467px;
  object-fit: cover;
`;
const Title = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
`;
const NameChild = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: var(--br-3xs);
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--color-tomato-200);
`;
const Name = styled.div`
  position: absolute;
  top: 523px;
  left: 881px;
  width: 422px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Email = styled.div`
  position: absolute;
  top: 633px;
  left: 881px;
  width: 422px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Poem = styled.div`
  align-self: stretch;
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  height: 56px;
  flex-shrink: 0;
`;
const MessageChild = styled.div`
  align-self: stretch;
  position: relative;
  border-radius: var(--br-3xs);
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--color-tomato-200);
  box-sizing: border-box;
  height: 94px;
`;
const Message = styled.div`
  position: absolute;
  top: 743px;
  left: 881px;
  width: 422px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
const Submit = styled.div`
  position: absolute;
  top: 14px;
  left: calc(50% - 87px);
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
  top: 966px;
  left: 971px;
  width: 242px;
  height: 53px;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color-white);
`;
const PoemSubmissionPageRoot = styled.div`
  position: relative;
  background: linear-gradient(#fff, #fff), #fff;
  width: 100%;
  height: 1818px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-black);
  font-family: var(--font-inter);
`;

const PoemSubmissionPage = () => {
  return (
    <PoemSubmissionPageRoot>
      <VectorIcon alt="" src="/vector.svg" />
      <ContainerNavbarFrame />
      <SectionCard3 propTop="1222px" />
      <PoemSubmissionParent>
        <PoemSubmission>Poem Submission</PoemSubmission>
        <FrameIcon alt="" src="/frame.svg" />
      </PoemSubmissionParent>
      <Image95Icon alt="" src="/image-95@2x.png" />
      <Name>
        <Title>Name</Title>
        <NameChild />
      </Name>
      <Email>
        <Title>Title</Title>
        <NameChild />
      </Email>
      <Message>
        <Poem>Poem</Poem>
        <MessageChild />
      </Message>
      <RectangleParent>
        <GroupChild />
        <Submit>SUBMIT</Submit>
      </RectangleParent>
    </PoemSubmissionPageRoot>
  );
};

export default PoemSubmissionPage;
