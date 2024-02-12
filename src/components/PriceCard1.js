import { memo } from "react";
import styled from "styled-components";

const Price = styled.b`
  position: absolute;
  top: 0px;
  left: 0px;
  line-height: 32px;
`;
const GroupChild = styled.img`
  position: absolute;
  top: 20px;
  left: 263px;
  max-height: 100%;
  width: 17px;
`;
const PriceParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 280px;
  height: 32px;
`;
const B = styled.b`
  position: absolute;
  top: 1px;
  left: 0px;
  line-height: 32px;
`;
const GroupItem = styled.div`
  position: absolute;
  top: 0px;
  left: 20px;
  border: 1px solid var(--color-whitesmoke-200);
  box-sizing: border-box;
  width: 77px;
  height: 33px;
`;
const Parent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 97px;
  height: 33px;
`;
const Group = styled.div`
  position: absolute;
  top: 0px;
  left: 183px;
  width: 97px;
  height: 33px;
`;
const To = styled.div`
  position: absolute;
  top: 0px;
  left: 124px;
  font-size: var(--font-size-lg);
  letter-spacing: 0.04em;
  line-height: 180%;
  font-weight: 500;
  color: var(--color-gray-100);
  text-align: center;
  display: inline-block;
  width: 32px;
  height: 32px;
`;
const GroupDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 280px;
  height: 33px;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-darkslateblue-200);
  width: 280px;
  height: 44px;
`;
const R = styled.span`
  letter-spacing: 0.08em;
`;
const Filter = styled.div`
  position: absolute;
  top: 13px;
  left: 36px;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  width: 208px;
  height: 17px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 56px;
  left: 0px;
  width: 280px;
  height: 44px;
  text-align: center;
  color: var(--color-white);
`;
const GroupContainer = styled.div`
  position: absolute;
  top: 68px;
  left: 0px;
  width: 280px;
  height: 100px;
`;
const GroupChild1 = styled.div`
  position: absolute;
  top: 51px;
  left: 0px;
  background-color: var(--color-gainsboro-200);
  width: 280px;
  height: 2px;
`;
const GroupParentRoot = styled.div`
  position: absolute;
  top: 267px;
  left: 62px;
  width: 280px;
  height: 168px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-darkslateblue-200);
  font-family: var(--font-inter);
`;

const PriceCard1 = memo(() => {
  return (
    <GroupParentRoot>
      <PriceParent>
        <Price>Price</Price>
        <GroupChild alt="" src="/vector-3.svg" />
      </PriceParent>
      <GroupContainer>
        <GroupDiv>
          <Parent>
            <B>$</B>
            <GroupItem />
          </Parent>
          <Group>
            <B>$</B>
            <GroupItem />
          </Group>
          <To>to</To>
        </GroupDiv>
        <RectangleParent>
          <RectangleDiv />
          <Filter>
            Filte
            <R>r</R>
          </Filter>
        </RectangleParent>
      </GroupContainer>
      <GroupChild1 />
    </GroupParentRoot>
  );
});

export default PriceCard1;
