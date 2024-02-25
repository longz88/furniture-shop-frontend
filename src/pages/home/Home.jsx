import { useEffect } from "react";
import Banner from "./Banner";
import Design from "./Design";
import ListProducts from "./ListProducts";
import Range from "./Range";
import Share from "./Share";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <Banner />
      <Range />
      <ListProducts />
      <Design />
      <Share />
    </div>
  );
};

export default Home;
