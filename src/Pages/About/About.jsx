import { useState } from "react";
import Footers from "../../Components/Footer/Footer";
import NavBar2 from "../../Components/Navbar/Navbar";
import "./about.css";
import Loader from '../../Components/Loader/Loader'

const About = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <NavBar2 />

      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
              alt="A group of People"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Our Story
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                  alt="Alexa featured Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                  alt="Alexa featured Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Alexa
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                  alt="Olivia featured Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                  alt="Olivia featured Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Olivia
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                  alt="Liam featued Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                  alt="Liam featued Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Liam
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                  alt="Elijah featured img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                  alt="Elijah featured img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Elijah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <div className="responsive-container-block leftSide">
            <p className="text-blk heading mt-0 p-0">
              Our Creative Advertisement
            </p>
            <p className="text-blk subHeading">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              dignissimos accusamus, accusantium delectus dolores similique
              reiciendis ea reprehenderit! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Hic fugiat ad consequuntur.
            </p>
          </div>
          <div className="responsive-container-block rightSide">
            <img
              className="number1img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET32.jpg"
            />
            <img
              className="number2img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d14.png"
            />
            <img
              className="number3img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b245.png"
            />
            <img
              className="number5img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Customer supports.png"
            />
            <iframe
              allowfullscreen="allowfullscreen"
              className="number4vid"
              poster="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b242.png"
              src="https://www.youtube.com/embed/svg%3E?"
            ></iframe>
            <img
              className="number7img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d51.png"
            />
            <img
              className="number6img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d12.png"
            />
          </div>
        </div>
      </div>
      {/* mission */}

      <div>
        <div className="responsive-container-block bigContainer">
          <div className="responsive-container-block Container">
            <img
              className="mainImg"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eaboutus1.svg"
            />
            <div className="allText aboveText">
              <p className="text-blk headingText">Our Mission</p>
              <p className="text-blk subHeadingText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-blk description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque
                tempus leo in ullamcorper quis vestibulum ligula elementum ut.
              </p>
              <button className="explore">Explore</button>
            </div>
          </div>
          <div className="responsive-container-block Container bottomContainer">
            <img
              className="mainImg"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/xpraup2.svg"
            />
            <div className="allText bottomText">
              <p className="text-blk headingText">Our Vision</p>
              <p className="text-blk subHeadingText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-blk description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque
                tempus leo in ullamcorper quis vestibulum ligula elementum ut.
              </p>
              <button className="explore">Explore</button>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </div>
  );
};

export default About;
