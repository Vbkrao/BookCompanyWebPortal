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
const Home1 = styled.span``;
const Span = styled.span`
  color: var(--color-lightgray);
`;
const Books = styled.span`
  color: var(--color-gray-400);
`;
const Home2 = styled.span`
  font-weight: 500;
`;
const AboutUs1 = styled.span`
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
  top: 0px;
  left: 4px;
  width: 1440px;
  height: 235px;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-gray-400);
  font-family: var(--font-inter);
`;

const Header1 = memo(() => {
  return (
    <NavbarFrameRoot>
      <GroupParent>
        <BookSearchForm />
        <GroupChild />
        <HomeAboutContainer>
          <Home2>
            <Home1>{`HOME     `}</Home1>
            <Span>|</Span>
            <Books>{`     `}</Books>
          </Home2>
          <AboutUs1>ABOUT US</AboutUs1>
          <Home2>
            <Books>{`     `}</Books>
            <Span>|</Span>
            <Books>{`     BOOKS     `}</Books>
            <Span>|</Span>
            <Home1>{`     POEM         `}</Home1>
          </Home2>
        </HomeAboutContainer>
      </GroupParent>
    </NavbarFrameRoot>
  );
});

export default Header1;
