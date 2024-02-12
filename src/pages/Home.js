import styled from "styled-components";
import TopCategoriesContainer from "../components/TopCategoriesContainer";
import SectionCard2 from "../components/SectionCard2";
import SectionCard1 from "../components/SectionCard1";
import PriceCard from "../components/PriceCard";
import ContainerCard from "../components/ContainerCard";
import Header from "../components/Header";
import SectionCard from "../components/SectionCard";

const VectorIcon = styled.img`
  position: absolute;
  height: 0.22%;
  width: 1.19%;
  top: 0.34%;
  right: 8.23%;
  bottom: 99.44%;
  left: 90.58%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 0.32%;
  width: 0.74%;
  top: 0.29%;
  right: 20.51%;
  bottom: 99.39%;
  left: 78.75%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon2 = styled.img`
  position: absolute;
  height: 0.25%;
  width: 1.09%;
  top: 0.32%;
  right: 16.43%;
  bottom: 99.43%;
  left: 82.48%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon3 = styled.img`
  position: absolute;
  height: 0.25%;
  width: 1.04%;
  top: 0.32%;
  right: 12.41%;
  bottom: 99.43%;
  left: 86.55%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon4 = styled.img`
  position: absolute;
  height: 0.22%;
  width: 0.94%;
  top: 0.34%;
  right: 4.31%;
  bottom: 99.44%;
  left: 94.75%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon5 = styled.img`
  position: absolute;
  height: 0.32%;
  width: 1.04%;
  top: 0.31%;
  right: 94.65%;
  bottom: 99.37%;
  left: 4.31%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Image90Icon = styled.img`
  position: absolute;
  top: 271px;
  left: 793px;
  width: 475px;
  height: 522px;
  object-fit: cover;
`;
const HomeRoot = styled.div`
  position: relative;
  background: linear-gradient(#fff, #fff), #fff;
  width: 100%;
  height: 4673px;
  overflow: hidden;
`;

const Home = () => {
  return (
    <HomeRoot>
      <VectorIcon alt="" src="/vector.svg" />
      <VectorIcon1 alt="" src="/vector.svg" />
      <VectorIcon2 alt="" src="/vector.svg" />
      <VectorIcon3 alt="" src="/vector.svg" />
      <VectorIcon4 alt="" src="/vector.svg" />
      <VectorIcon5 alt="" src="/vector.svg" />
      <TopCategoriesContainer />
      <SectionCard2 />
      <SectionCard1 />
      <PriceCard />
      <ContainerCard />
      <Header />
      <SectionCard />
      <Image90Icon alt="" src="/image-90@2x.png" />
    </HomeRoot>
  );
};

export default Home;
