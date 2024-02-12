import { memo } from "react";
import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 263px;
  background-color: var(--color-lightgray);
  width: 1px;
  height: 16px;
`;
const Account = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 600;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 76.47%;
  width: 11.56%;
  top: 11.76%;
  right: 88.44%;
  bottom: 11.76%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Cart0Parent = styled.div`
  position: absolute;
  top: 0px;
  right: 141px;
  width: 96px;
  height: 17px;
`;
const GroupItem = styled.div`
  position: absolute;
  top: 0px;
  left: 121px;
  background-color: var(--color-lightgray);
  width: 1px;
  height: 16px;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 76.47%;
  width: 11.54%;
  top: 11.76%;
  right: 88.46%;
  bottom: 11.76%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const AccountParent = styled.div`
  position: absolute;
  top: 0px;
  right: 282px;
  width: 104px;
  height: 17px;
`;
const VectorIcon2 = styled.img`
  position: absolute;
  height: 76.47%;
  width: 14.29%;
  top: 11.76%;
  right: 85.71%;
  bottom: 11.76%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const WishlistParent = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 105px;
  height: 17px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 23px;
  left: 930px;
  width: 386px;
  height: 17px;
`;
const GroupInner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xl);
  background-color: var(--color-whitesmoke-100);
  width: 617px;
  height: 45px;
`;
const SearchBooks = styled.div`
  position: absolute;
  top: 14px;
  right: 481px;
  letter-spacing: 0.12em;
  text-transform: capitalize;
  font-weight: 600;
`;
const VectorIcon3 = styled.img`
  position: absolute;
  height: 40%;
  width: 2.92%;
  top: 28.89%;
  right: 3.89%;
  bottom: 31.11%;
  left: 93.19%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 8px;
  left: 241px;
  width: 617px;
  height: 45px;
  color: var(--color-silver-300);
`;
const Image89Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 168px;
  height: 73px;
  object-fit: cover;
`;
const GroupParentRoot = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1316px;
  height: 73px;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-darkslateblue-200);
  font-family: var(--font-inter);
`;

const BookSearchForm = memo(() => {
  return (
    <GroupParentRoot>
      <RectangleParent>
        <GroupChild />
        <Cart0Parent>
          <Account>Cart:(0)</Account>
          <VectorIcon alt="" src="/vector.svg" />
        </Cart0Parent>
        <GroupItem />
        <AccountParent>
          <Account>Account</Account>
          <VectorIcon1 alt="" src="/vector.svg" />
        </AccountParent>
        <WishlistParent>
          <Account>Wishlist</Account>
          <VectorIcon2 alt="" src="/vector.svg" />
        </WishlistParent>
      </RectangleParent>
      <RectangleGroup>
        <GroupInner />
        <SearchBooks>Search books</SearchBooks>
        <VectorIcon3 alt="" src="/vector.svg" />
      </RectangleGroup>
      <Image89Icon alt="" src="/image-89@2x.png" />
    </GroupParentRoot>
  );
});

export default BookSearchForm;
