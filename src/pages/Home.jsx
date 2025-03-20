import React from "react";
import { FaHandHoldingHeart, FaUsers, FaRegCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import About from "./About";
import hero1 from "../assets/NGO.jpg";
import hero2 from "../assets/NGO1.jpg";
import hero4 from "../assets/NGO4.jpg";
import hero5 from "../assets/NGO5.jpg";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-[500px] md:h-screen w-full"
      >
        <SwiperSlide>
          <img src={hero1} alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero2} alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={hero3} alt="" className="w-full h-full object-cover" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={hero4} alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero5} alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>

      {/* Donate  Section */}
      <div className="text-center py-10 bg-gray-600 text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Make a Difference Today
        </h2>
        <p className="mt-4 text-lg">
          Join us in making the world a better place. Your small contribution
          can bring big change!
        </p>
        <button onClick={() => navigate('/donate')} className="bg-blue-600 text-white mt-6 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
          Donate Now
        </button>
      </div>

      {/* Who we are  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6 md:p-12">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={hero1}
            alt="Who We Are"
            className=" max-w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content Section */}
        <div className="shadow-lg px-8 py-2 rounded-lg">
          <h3 className="text-xl md:text-2xl font-bold mt-3">
            <span className="text-orange-500 text-3xl md:text-4xl">Who</span> WE
            ARE
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            The <strong>Archana RamKishori Welfare Foundation</strong> is a
            pillar of support, dedicated to uplifting communities and fostering
            meaningful change across India. As a nationally registered
            non-profit organization, we focus on critical areas such as{" "}
            <span className="font-semibold">
              education, healthcare, livelihoods, and environmental conservation
            </span>
            , addressing pressing challenges with{" "}
            <span className="font-semibold">
              innovative, sustainable, and impact-driven solutions
            </span>
            .
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Guided by the core values of{" "}
            <span className="font-semibold">
              integrity, compassion, and collaboration
            </span>
            , we ensure that every initiative we undertake creates a{" "}
            <span className="font-semibold">
              lasting, transformative impact
            </span>
            , empowering individuals and communities alike. Our mission is to
            build an{" "}
            <span className="font-semibold">
              inclusive and dignified future
            </span>
            , where opportunities are within reach for all, and every person can
            thrive with hope and confidence.
          </p>
        </div>
      </div>

      {/*  Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <p className="mt-4 text-gray-600">
          We strive to uplift underprivileged communities by providing
          education, healthcare, and essential resources.
        </p>
        <div className="flex flex-wrap justify-center gap-10 mt-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-sm">
            <FaHandHoldingHeart size={50} className="text-violet-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Providing Support</h3>
            <p className="text-gray-500 mt-2">
              Helping those in need with food, shelter, and medical aid.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-sm">
            <FaUsers size={50} className="text-violet-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">
              Community Empowerment
            </h3>
            <p className="text-gray-500 mt-2">
              Education and vocational training for a self-reliant future.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-sm">
            <FaRegCheckCircle size={50} className="text-violet-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Sustainable Growth</h3>
            <p className="text-gray-500 mt-2">
              Long-term initiatives to uplift communities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
