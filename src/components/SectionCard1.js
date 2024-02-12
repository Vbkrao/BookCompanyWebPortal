import { memo } from "react";
import styled from "styled-components";

const Kotak = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-lavenderblush-100);
  width: 1449px;
  height: 976px;
`;
const ViewAllProducts = styled.b`
  position: absolute;
  top: 808px;
  left: 1252px;
  font-size: var(--font-size-base);
  letter-spacing: 0.02em;
  text-transform: capitalize;
  text-align: right;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 0.96%;
  width: 0.99%;
  top: 97.25%;
  right: 0.21%;
  bottom: 1.79%;
  left: 98.8%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 773px;
  left: 0px;
  background-color: var(--color-gainsboro-200);
  width: 1420px;
  height: 1px;
`;
const WingsOfFire = styled.div`
  position: absolute;
  top: 618px;
  left: 91px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-darkslateblue-200);
`;
const GreatTravelAt = styled.div`
  position: absolute;
  top: 618px;
  left: 410px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-darkslateblue-200);
`;
const TheLadyBeauty = styled.div`
  position: absolute;
  top: 618px;
  left: 758px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-darkslateblue-200);
`;
const OnceUponA = styled.div`
  position: absolute;
  top: 618px;
  left: 1158px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-darkslateblue-200);
`;
const B = styled.b`
  position: absolute;
  top: 694px;
  left: 127px;
  font-size: var(--font-size-lg);
  letter-spacing: 0.02em;
  text-transform: capitalize;
`;
const B1 = styled.b`
  position: absolute;
  top: 694px;
  left: 492px;
  font-size: var(--font-size-lg);
  letter-spacing: 0.02em;
  text-transform: capitalize;
`;
const B2 = styled.b`
  position: absolute;
  top: 694px;
  left: 856px;
  font-size: var(--font-size-lg);
  letter-spacing: 0.02em;
  text-transform: capitalize;
`;
const B3 = styled.b`
  position: absolute;
  top: 694px;
  left: 1222px;
  font-size: var(--font-size-lg);
  letter-spacing: 0.02em;
  text-transform: capitalize;
`;
const APJ = styled.div`
  position: absolute;
  top: 656px;
  left: 101px;
  font-size: var(--font-size-sm);
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: var(--color-gray-100);
`;
const SanchitHowdy = styled.div`
  position: absolute;
  top: 656px;
  left: 477px;
  font-size: var(--font-size-sm);
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: var(--color-gray-100);
`;
const ArthurDoyle = styled.div`
  position: absolute;
  top: 656px;
  left: 849px;
  font-size: var(--font-size-sm);
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: var(--color-gray-100);
`;
const KlienMarry = styled.div`
  position: absolute;
  top: 656px;
  left: 1218px;
  font-size: var(--font-size-sm);
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: var(--color-gray-100);
`;
const GroupItem = styled.div`
  position: absolute;
  top: 157px;
  left: 0px;
  background-color: var(--color-white);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--color-linen);
  box-sizing: border-box;
  width: 326px;
  height: 437px;
`;
const GroupInner = styled.div`
  position: absolute;
  top: 157px;
  left: 365px;
  background-color: var(--color-white);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--color-linen);
  box-sizing: border-box;
  width: 326px;
  height: 437px;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 157px;
  left: 729px;
  background-color: var(--color-white);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--color-linen);
  box-sizing: border-box;
  width: 326px;
  height: 437px;
`;
const GroupChild1 = styled.div`
  position: absolute;
  top: 157px;
  left: 1094px;
  background-color: var(--color-white);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--color-linen);
  box-sizing: border-box;
  width: 326px;
  height: 437px;
`;
const Book161Icon = styled.img`
  position: absolute;
  top: 211px;
  left: 778px;
  width: 227px;
  height: 330px;
  object-fit: cover;
`;
const Book34Icon = styled.img`
  position: absolute;
  top: 211px;
  left: 414px;
  width: 227px;
  height: 330px;
  object-fit: cover;
`;
const Book44Icon = styled.img`
  position: absolute;
  top: 209px;
  left: 1142px;
  width: 229px;
  height: 333px;
  object-fit: cover;
`;
const Book54Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 228.2px;
  height: 329.9px;
  object-fit: cover;
`;
const Book = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-darkslateblue-200);
  width: 228.2px;
  height: 329.9px;
  opacity: 0.1;
`;
const Book54Parent = styled.div`
  position: absolute;
  top: 211px;
  left: 49px;
  width: 228.2px;
  height: 329.9px;
`;
const GroupChild2 = styled.div`
  position: absolute;
  top: 427px;
  left: 34px;
  background-color: var(--color-tomato-100);
  width: 257px;
  height: 50px;
`;
const AddToCart = styled.div`
  position: absolute;
  top: 442px;
  left: 97px;
  font-size: var(--font-size-base);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--color-white);
`;
const GroupChild3 = styled.div`
  position: absolute;
  top: 68px;
  left: 975px;
  background-color: var(--color-gainsboro-200);
  width: 445px;
  height: 1px;
`;
const GroupChild4 = styled.div`
  position: absolute;
  top: 68px;
  left: 0px;
  background-color: var(--color-gainsboro-200);
  width: 445px;
  height: 1px;
`;
const NewReleaseBooks = styled.div`
  position: absolute;
  top: 36px;
  left: 483px;
  font-size: var(--font-size-29xl);
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-darkslateblue-200);
`;
const SomeQualityItems = styled.div`
  position: absolute;
  top: 0px;
  left: 627px;
  font-size: var(--font-size-smi);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--color-gray-300);
`;
const SliderDotsIcon1 = styled.img`
  position: absolute;
  top: 798px;
  left: 645px;
  width: 132px;
  height: 39px;
`;
const ViewAllProductsParent = styled.div`
  position: absolute;
  top: 69px;
  left: 12px;
  width: 1420px;
  height: 837px;
`;
const KotakParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1449px;
  height: 976px;
`;
const HomeInnerRoot = styled.div`
  position: absolute;
  top: 1540px;
  left: -9px;
  width: 1449px;
  height: 976px;
  text-align: center;
  font-size: var(--font-size-3xl);
  color: var(--color-tomato-100);
  font-family: var(--font-inter);
`;

const SectionCard1 = memo(() => {
  return (
    <HomeInnerRoot>
      <KotakParent>
        <Kotak />
        <ViewAllProductsParent>
          <ViewAllProducts>View all products</ViewAllProducts>
          <VectorIcon alt="" src="/vector.svg" />
          <GroupChild />
          <WingsOfFire>Wings of Fire</WingsOfFire>
          <GreatTravelAt>Great travel at desert</GreatTravelAt>
          <TheLadyBeauty>The lady beauty Scarlett</TheLadyBeauty>
          <OnceUponA>Once upon a time</OnceUponA>
          <B>$ 40.00</B>
          <B1>$ 38.00</B1>
          <B2>$ 45.00</B2>
          <B3>$ 35.00</B3>
          <APJ>A P J Abdul Kalam</APJ>
          <SanchitHowdy>Sanchit Howdy</SanchitHowdy>
          <ArthurDoyle>Arthur Doyle</ArthurDoyle>
          <KlienMarry>Klien Marry</KlienMarry>
          <GroupItem />
          <GroupInner />
          <RectangleDiv />
          <GroupChild1 />
          <Book161Icon alt="" src="/book16-1@2x.png" />
          <Book34Icon alt="" src="/book3-4@2x.png" />
          <Book44Icon alt="" src="/book4-4@2x.png" />
          <Book54Parent>
            <Book54Icon alt="" src="/book5-4@2x.png" />
            <Book />
            <Book54Icon alt="" src="/image-91@2x.png" />
          </Book54Parent>
          <GroupChild2 />
          <AddToCart>add to cart</AddToCart>
          <GroupChild3 />
          <GroupChild4 />
          <NewReleaseBooks>New Release Books</NewReleaseBooks>
          <SomeQualityItems>Some quality items</SomeQualityItems>
          <SliderDotsIcon1 alt="" src="/slider-dots.svg" />
        </ViewAllProductsParent>
      </KotakParent>
    </HomeInnerRoot>
  );
});

export default SectionCard1;
