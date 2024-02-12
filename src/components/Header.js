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
  font-weight: 800;
`;
const Span = styled.span`
  color: var(--color-gray-400);
`;
const Span1 = styled.span`
  color: var(--color-lightgray);
`;
const AboutUs1 = styled.span``;
const AboutUsBooks = styled.span`
  font-weight: 500;
  color: var(--color-gray-400);
`;
const HomeAboutContainer = styled.div`
  position: absolute;
  top: 129px;
  left: calc(50% - 310px);
  font-size: var(--font-size-lg);
  letter-spacing: 0.12em;
  text-transform: capitalize;
  white-space: pre-wrap;
  color: var(--color-tomato-100);
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
  left: 0px;
  width: 1440px;
  height: 235px;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-darkslateblue-200);
  font-family: var(--font-inter);
`;

const Header = memo(() => {
  return (
    <NavbarFrameRoot>
      <GroupParent>
        <BookSearchForm />
        <GroupChild />
        <HomeAboutContainer>
          <Home1>HOME</Home1>
          <AboutUsBooks>
            <Span>{`     `}</Span>
            <Span1>|</Span1>
            <AboutUs1>{`     ABOUT US     `}</AboutUs1>
            <Span1>|</Span1>
            <Span>{`     BOOKS     `}</Span>
            <Span1>|</Span1>
            <Span>{`     POEM         `}</Span>
          </AboutUsBooks>
        </HomeAboutContainer>
      </GroupParent>
    </NavbarFrameRoot>
  );
});

export default Header;
