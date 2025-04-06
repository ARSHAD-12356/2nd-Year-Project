import { Award, Search, User } from "lucide-react";
import "react";
import HeroImg from "../../asset/HeroImg.png";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div className="bg-slate-800 pt-14">
      <div className="lg:h-[700px] max-w-7xl mx-auto flex md:flex-row flex-col gap-10 items-center">
        {/* text section */}
        <div className="space-y-7 px-4 md:px-0">
          <h1 className="text-4xl mt-10 md:mt-0 md:text-6xl font-extrabold text-gray-200">
            Explore Our <span className="text-blue-500">14000+ </span>
            <br />
            Online courses for all
          </h1>
          <p className="text-gray-300 text-lg">
            We provide the best eduction content for you and your children. Our
            Dream Your Success
          </p>

          {/* search section */}
          <div className="inline-flex relative">
            <input
              type="text"
              placeholder="Search Your Course Here..."
              className="bg-gray-200 w-[350px] md:w[400px] text-gray-800 p-4 pr-40 rounded-lg rounded-r-xl placeholder:text-gray-500"
            />

            <button className="px-4 py-[14px] flex gap-1 items-center bg-blue-500 font-semibold absolute right-0 text-white rounded-r-lg text-xl">
              Search
              <Search width={20} height={20} />
            </button>
          </div>
        </div>

        {/* image section */}
        <div className="flex md:h[700px] items-end relative px-4 md:px-0">
          <img
            src={HeroImg}
            alt=""
            className="w-[750px] shadow-blue-500 drop-shadow-lg"
          />

          {/* Creating First Badges */}
          {/* Badge container div */}
          <div className="bg-slate-200 hidden md:flex gap-3 items-center rounded-md absolute top-[35%] right-0 px-4 py-2">
            {/* Badges logo */}
            <div className="rounded-full bg-blue-400 p-2 text-white">
              <User />
            </div>
            {/* Badges logo End */}
            {/* Badge Content */}
            <div>
              <h2 className="font-bold text-2xl">
                <CountUp end={45000} />+
              </h2>
              <p className="italic text-sm text-gray-600 leading-none">
                Active Students
              </p>
            </div>
            {/* Badge Content End*/}
          </div>
          {/* Badge container div End */}

          {/* Creating Second Badges */}
          {/* Badge container div */}
          <div className="bg-slate-200 hidden md:flex gap-3 items-center rounded-md absolute top-[15%] left-4 px-4 py-2">
            {/* Badges logo */}
            <div className="rounded-full bg-blue-400 p-2 text-white">
              <Award />
            </div>
            {/* Badges logo End */}
            {/* Badge Content */}
            <div>
              <h2 className="font-bold text-2xl">
                <CountUp end={684} />+
              </h2>
              <p className="italic text-sm text-gray-600 leading-none">
                Certified Students
              </p>
            </div>
            {/* Badge Content End*/}
          </div>
          {/* Second badge end */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
