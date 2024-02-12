import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import PoemSubmissionPage from "./pages/PoemSubmissionPage";
import AboutUs from "./pages/AboutUs";
import MarketListingPage from "./pages/MarketListingPage";
import ProductView from "./pages/ProductView";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/poem-submission-page":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/market-listing-page":
        title = "";
        metaDescription = "";
        break;
      case "/product-view":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/poem-submission-page" element={<PoemSubmissionPage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/market-listing-page" element={<MarketListingPage />} />
      <Route path="/product-view" element={<ProductView />} />
    </Routes>
  );
}
export default App;
