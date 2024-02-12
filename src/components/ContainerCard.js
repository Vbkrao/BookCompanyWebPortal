import { memo } from "react";
import styled from "styled-components";

const BgHero = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xl);
  background-color: var(--color-lavenderblush-200);
  width: 1266px;
  height: 561px;
`;
const LoremIpsumDolor = styled.div`
  position: absolute;
  top: 145px;
  left: 0px;
  letter-spacing: 0.05em;
  line-height: 32px;
  display: inline-block;
  width: 588px;
`;
const AllBooksAre = styled.b`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: var(--font-size-26xl);
  line-height: 66px;
  display: inline-block;
  color: var(--color-darkslateblue-100);
  width: 588px;
`;
const LoremIpsumDolorSitAmetCoParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 588px;
  height: 209px;
`;
const GroupChild = styled.img`
  position: absolute;
  top: 378px;
  left: 0px;
  width: 132px;
  height: 39px;
`;
const B = styled.b``;
const P = styled.p`
  margin: 0;
`;
const Days = styled.p`
  margin: 0;
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-black);
`;
const Days1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: 0.1em;
  line-height: 180%;
  text-transform: uppercase;
`;
const Hour = styled.div`
  position: absolute;
  top: 0px;
  left: 96px;
  letter-spacing: 0.1em;
  line-height: 180%;
  text-transform: uppercase;
`;
const Mint = styled.div`
  position: absolute;
  top: 0px;
  left: 189px;
  letter-spacing: 0.1em;
  line-height: 180%;
  text-transform: uppercase;
`;
const Sec = styled.div`
  position: absolute;
  top: 0px;
  left: 276px;
  letter-spacing: 0.1em;
  line-height: 180%;
  text-transform: uppercase;
`;
const DaysParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 313px;
  height: 71px;
`;
const GroupWrapper = styled.div`
  position: absolute;
  top: 237px;
  left: 0px;
  width: 313px;
  height: 71px;
  text-align: center;
  font-size: var(--font-size-7xl);
  color: var(--color-tomato-100);
`;
const GroupParent = styled.div`
  position: absolute;
  top: 73px;
  left: 80px;
  width: 588px;
  height: 417px;
`;
const UnsplashIcon = styled.img`
  position: absolute;
  height: 86.99%;
  width: 49.92%;
  top: 6.6%;
  right: 5.53%;
  bottom: 6.42%;
  left: 44.55%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const BgHeroParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1266px;
  height: 561px;
`;
const HomeInnerRoot = styled.div`
  position: absolute;
  top: 3456px;
  left: calc(50% - 634px);
  width: 1266px;
  height: 561px;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-darkslateblue-200);
  font-family: var(--font-inter);
`;

const ContainerCard = memo(() => {
  return (
    <HomeInnerRoot>
      <BgHeroParent>
        <BgHero />
        <GroupParent>
          <LoremIpsumDolorSitAmetCoParent>
            <LoremIpsumDolor>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum enim pharetra hac.
            </LoremIpsumDolor>
            <AllBooksAre>
              All books are 50% off now! Don't miss such a deal!
            </AllBooksAre>
          </LoremIpsumDolorSitAmetCoParent>
          <GroupChild alt="" src="/slider-dots.svg" />
          <GroupWrapper>
            <DaysParent>
              <Days1>
                <P>
                  <B>768</B>
                </P>
                <Days>Days</Days>
              </Days1>
              <Hour>
                <P>
                  <B>01</B>
                </P>
                <Days>Hour</Days>
              </Hour>
              <Mint>
                <P>
                  <B>27</B>
                </P>
                <Days>Mint</Days>
              </Mint>
              <Sec>
                <P>
                  <B>55</B>
                </P>
                <Days>Sec</Days>
              </Sec>
            </DaysParent>
          </GroupWrapper>
        </GroupParent>
        <UnsplashIcon alt="" src="/unsplash@2x.png" />
      </BgHeroParent>
    </HomeInnerRoot>
  );
});

export default ContainerCard;
