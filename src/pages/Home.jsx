import React from "react";
import { FaHandHoldingHeart, FaUsers, FaRegCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import About from "./About";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-[500px] md:h-[600px] w-full"
      >
        <SwiperSlide>
          <img src="/src/assets/hero1.jpg" alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/hero2.jpg" alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/hero3.jpg" alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>

      {/* Donate  Section */}
      <div className="text-center py-10 bg-gray-900 text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Make a Difference Today</h2>
        <p className="mt-4 text-lg">Join us in making the world a better place. Your small contribution can bring big change!</p>
        <button className="mt-6 px-6 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition">
          Donate Now
        </button>
      </div>

      {/*  Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <p className="mt-4 text-gray-600">
          We strive to uplift underprivileged communities by providing education, healthcare, and essential resources.
        </p>
        <div className="flex flex-wrap justify-center gap-10 mt-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-sm">
            <FaHandHoldingHeart size={50} className="text-violet-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Providing Support</h3>
            <p className="text-gray-500 mt-2">Helping those in need with food, shelter, and medical aid.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-sm">
            <FaUsers size={50} className="text-violet-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Community Empowerment</h3>
            <p className="text-gray-500 mt-2">Education and vocational training for a self-reliant future.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-sm">
            <FaRegCheckCircle size={50} className="text-violet-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Sustainable Growth</h3>
            <p className="text-gray-500 mt-2">Long-term initiatives to uplift communities.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
