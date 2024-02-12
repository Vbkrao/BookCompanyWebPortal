import styled from "styled-components";

const ProductViewChild = styled.div`
  position: absolute;
  top: 91px;
  left: 81px;
  background-color: var(--color-lavenderblush-100);
  width: 1278px;
  height: 842px;
`;
const BookIcon = styled.img`
  position: absolute;
  top: 197px;
  left: 223px;
  width: 413px;
  height: 602px;
  object-fit: cover;
`;
const B = styled.b`
  position: absolute;
  top: 572px;
  left: 782px;
  font-size: var(--font-size-4xl);
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: var(--color-tomato-100);
`;
const LoremIpsumDolor = styled.div`
  position: absolute;
  top: 415px;
  left: 782px;
  letter-spacing: 0.02em;
  line-height: 208%;
  color: var(--color-gray-300);
  display: inline-block;
  width: 451px;
  height: 66px;
`;
const ByTimburHood = styled.div`
  position: absolute;
  top: 334px;
  left: 782px;
  font-size: var(--font-size-smi);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--color-gray-100);
`;
const BirdsGonnaBe = styled.div`
  position: absolute;
  top: 237px;
  left: 782px;
  font-size: var(--font-size-29xl);
  text-transform: capitalize;
  font-weight: 600;
`;
const ProductViewItem = styled.div`
  position: absolute;
  top: 321px;
  left: 782px;
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
  right: 10.66%;
  bottom: 40.98%;
  left: 82.74%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const AddToCart = styled.div`
  position: absolute;
  top: 13px;
  left: 25px;
  letter-spacing: 0.1em;
  line-height: 220%;
  text-transform: uppercase;
  font-weight: 500;
`;
const Btn = styled.div`
  position: absolute;
  top: 711px;
  left: 782px;
  width: 197px;
  height: 61px;
`;
const GroupChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 24.8px;
  height: 25px;
  object-fit: contain;
`;
const GroupItem = styled.img`
  position: absolute;
  top: 0px;
  left: 0.2px;
  width: 24.8px;
  height: 25px;
  object-fit: contain;
`;
const LineParent = styled.div`
  position: absolute;
  top: 110px;
  left: 1310px;
  width: 25px;
  height: 25px;
`;
const ProductViewRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 1024px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-darkslateblue-200);
  font-family: var(--font-inter);
`;

const ProductView = () => {
  return (
    <ProductViewRoot>
      <ProductViewChild />
      <BookIcon alt="" src="/book@2x.png" />
      <B>$ 45.00</B>
      <LoremIpsumDolor>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat
        amet, libero ipsum enim pharetra hac.
      </LoremIpsumDolor>
      <ByTimburHood>By Timbur Hood</ByTimburHood>
      <BirdsGonnaBe>Birds gonna be happy</BirdsGonnaBe>
      <ProductViewItem />
      <Btn>
        <BtnChild />
        <VectorIcon alt="" src="/vector.svg" />
        <AddToCart>add to cart</AddToCart>
      </Btn>
      <LineParent>
        <GroupChild alt="" />
        <GroupItem alt="" />
      </LineParent>
    </ProductViewRoot>
  );
};

export default ProductView;
