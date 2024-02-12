import { memo } from "react";
import BookSearchForm from "./BookSearchForm";
import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  top: 102px;
  left: 0px;
  background-color: var(--color-gainsboro-200);
  width: 1316px;
  height: 2px;
`;
const Home1 = styled.span`
  color: var(--color-gray-400);
`;
const Span = styled.span`
  color: var(--color-lightgray);
`;
const AboutUs1 = styled.span``;
const HomeAboutUs = styled.span`
  font-weight: 500;
`;
const Books = styled.span`
  font-weight: 800;
  color: var(--color-tomato-100);
`;
const HomeAboutContainer = styled.div`
  position: absolute;
  top: 129px;
  left: calc(50% - 310px);
  letter-spacing: 0.12em;
  text-transform: capitalize;
  white-space: pre-wrap;
`;
const GroupParent = styled.div`
  position: absolute;
  top: 54px;
  left: 62px;
  width: 1316px;
  height: 151px;
`;
const NavbarFrameRoot = styled.div`
  position: absolute;
  top: 3px;
  left: 0px;
  width: 1440px;
  height: 235px;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-gray-400);
  font-family: var(--font-inter);
`;

const ContainerNavbarFrame1 = memo(() => {
  return (
    <NavbarFrameRoot>
      <GroupParent>
        <BookSearchForm />
        <GroupChild />
        <HomeAboutContainer>
          <HomeAboutUs>
            <Home1>{`HOME     `}</Home1>
            <Span>|</Span>
            <AboutUs1>{`     ABOUT US     `}</AboutUs1>
            <Span>|</Span>
            <Home1>{`     `}</Home1>
          </HomeAboutUs>
          <Books>BOOKS</Books>
          <HomeAboutUs>
            <Home1>{`     `}</Home1>
            <Span>|</Span>
            <AboutUs1>{`     POEM         `}</AboutUs1>
          </HomeAboutUs>
        </HomeAboutContainer>
      </GroupParent>
    </NavbarFrameRoot>
  );
});

export default ContainerNavbarFrame1;
