import { memo } from "react";
import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background: linear-gradient(78.43deg, #fbeeee, #f7fffe);
  width: 1449px;
  height: 888px;
`;
const BookIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 149px;
  width: 413px;
  height: 602px;
  object-fit: cover;
`;
const B = styled.b`
  position: absolute;
  top: 375px;
  left: 708px;
  font-size: var(--font-size-4xl);
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: var(--color-tomato-100);
`;
const LoremIpsumDolor = styled.div`
  position: absolute;
  top: 274px;
  left: 708px;
  letter-spacing: 0.02em;
  line-height: 208%;
  color: var(--color-gray-300);
  display: inline-block;
  width: 486px;
  height: 66px;
`;
const BirdsGonnaBe = styled.div`
  position: absolute;
  top: 224px;
  left: 708px;
  font-size: var(--font-size-9xl);
  text-transform: capitalize;
  font-weight: 600;
`;
const ByTimburHood = styled.div`
  position: absolute;
  top: 178px;
  left: 708px;
  font-size: var(--font-size-smi);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--color-gray-100);
`;
const FeaturedBook = styled.div`
  position: absolute;
  top: 62px;
  left: 708px;
  font-size: var(--font-size-29xl);
  text-transform: capitalize;
  font-weight: 600;
`;
const GroupItem = styled.div`
  position: absolute;
  top: 165px;
  left: 708px;
  background-color: var(--color-tomato-100);
  width: 101px;
  height: 2px;
`;
const BtnChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-6xs);
  border: 1px solid var(--color-darkslateblue-200);
  box-sizing: border-box;
  width: 197px;
  height: 61px;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 16.39%;
  width: 6.6%;
  top: 42.62%;
  right: 17.77%;
  bottom: 40.98%;
  left: 75.63%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const ViewMore = styled.div`
  position: absolute;
  top: 13px;
  left: 35px;
  letter-spacing: 0.1em;
  line-height: 220%;
  text-transform: uppercase;
  font-weight: 500;
`;
const Btn = styled.div`
  position: absolute;
  top: 514px;
  left: 708px;
  width: 197px;
  height: 61px;
`;
const GroupInner = styled.img`
  position: absolute;
  top: 0px;
  left: 1273px;
  width: 48.7px;
  height: 48.7px;
  object-fit: contain;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 48.7px;
  height: 48.7px;
`;
const GroupParent = styled.div`
  position: absolute;
  top: 283px;
  left: 0px;
  width: 1321.7px;
  height: 48.7px;
`;
const EllipseDiv = styled.div`
  position: absolute;
  top: 705px;
  left: 652px;
  border-radius: 50%;
  background-color: var(--color-silver-200);
  width: 13px;
  height: 13px;
`;
const GroupChild1 = styled.div`
  position: absolute;
  top: 705px;
  left: 608px;
  border-radius: 50%;
  background-color: var(--color-tomato-100);
  width: 13px;
  height: 13px;
`;
const GroupChild2 = styled.div`
  position: absolute;
  top: 692px;
  left: 595px;
  border-radius: 50%;
  border: 1px solid var(--color-tomato-100);
  box-sizing: border-box;
  width: 39px;
  height: 39px;
`;
const GroupChild3 = styled.div`
  position: absolute;
  top: 705px;
  left: 683px;
  border-radius: 50%;
  background-color: var(--color-silver-200);
  width: 13px;
  height: 13px;
`;
const GroupChild4 = styled.div`
  position: absolute;
  top: 705px;
  left: 714px;
  border-radius: 50%;
  background-color: var(--color-silver-200);
  width: 13px;
  height: 13px;
`;
const BookParent = styled.div`
  position: absolute;
  top: 81px;
  left: 64px;
  width: 1321.7px;
  height: 731px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1449px;
  height: 888px;
`;
const HomeInnerRoot = styled.div`
  position: absolute;
  top: 2518px;
  left: 0px;
  width: 1449px;
  height: 888px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-darkslateblue-200);
  font-family: var(--font-inter);
`;

const PriceCard = memo(() => {
  return (
    <HomeInnerRoot>
      <RectangleParent>
        <GroupChild />
        <BookParent>
          <BookIcon alt="" src="/book@2x.png" />
          <B>$ 45.00</B>
          <LoremIpsumDolor>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac.
          </LoremIpsumDolor>
          <BirdsGonnaBe>Birds gonna be happy</BirdsGonnaBe>
          <ByTimburHood>By Timbur Hood</ByTimburHood>
          <FeaturedBook>Featured book</FeaturedBook>
          <GroupItem />
          <Btn>
            <BtnChild />
            <VectorIcon alt="" src="/vector.svg" />
            <ViewMore>View more</ViewMore>
          </Btn>
          <GroupParent>
            <GroupInner alt="" src="/group-296@2x.png" />
            <GroupIcon alt="" src="/group-300.svg" />
          </GroupParent>
          <EllipseDiv />
          <GroupChild1 />
          <GroupChild2 />
          <GroupChild3 />
          <GroupChild4 />
        </BookParent>
      </RectangleParent>
    </HomeInnerRoot>
  );
});

export default PriceCard;
