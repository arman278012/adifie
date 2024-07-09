// import Slider from "../../Components/Slider/Slider"
import Goals from "../../Components/Goals/Goals";
// import images from "../../Image"
import Header from "../../Components/Header/Header";
import Confused from "../../Components/Confused/Confused";
import Media from "../../Components/Media/Media";
import Accordions from "../../Components/Accor/Accordion";
import Footers from "../../Components/Footer/Footer";
import Using from "../../Components/Using/Using";
import Business from "../../Components/Business/Business";
import Billboard from "../../Components/Billboard/Billboard";
import Companies from "../../Components/CompaniesSearch/Companies";
import BillImage from "../../Components/BillboardImage/BillImage";
import GetinTouch from "../../Components/GetInTouch/GetinTouch";
import { useState } from "react";
import Loader from "../../Components/Loader/Loader";
import NavBar2 from "../../Components/Navbar/Navbar";

const Home = () => {

  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Loader />;
  } else
    return (
      <div className="bg-gray-200 overflow-hidden">
        <NavBar2 />
        <Header />
        <Media />
        <Billboard />
        <Business />
        <Companies />
        <BillImage />
        <div className="bg-black  pt-[5vh] pb-[10vh]">
          <Goals />
        </div>
        <Confused />
        <Using />
        <GetinTouch />
        <Accordions />
        <Footers />
      </div>
    );
};

export default Home;
