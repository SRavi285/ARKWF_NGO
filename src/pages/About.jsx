import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  return (
    <div className=" text-gray-800 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold  text-blue-700 mb-6">
          About Us
        </h1>
        <p className="text-lg  mb-8">
          Welcome to <span className="font-semibold">Archana RamKishori Welfare Foundation (ARKWF)</span>, founded in 2025. We are a mission-driven organization dedicated to transforming lives through collective goodwill.
        </p>

        {/* Vision Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            We envision a world where small efforts lead to big change. Our focus areas include{" "}
            <span className="font-medium">
              family welfare, education, healthcare, agriculture, environment, art and culture, food security, skill development, IT, and child welfare.
            </span>{" "}
            We aim to uplift underprivileged communities and create sustainable solutions for a better future.
          </p>
        </div>

        {/* Micro-Donation Model */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Micro-Donation Model: Power of ₹21 Every Month
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>
              <span className="font-semibold">Low Barrier to Entry:</span> ₹21 is affordable, making it easy for everyone to contribute.
            </li>
            <li>
              <span className="font-semibold">Community-Driven Approach:</span> We build a network of care and responsibility.
            </li>
            <li>
              <span className="font-semibold">Targeted Assistance:</span> Helping families in crisis, students in need, and medical aid seekers.
            </li>
            <li>
              <span className="font-semibold">Scalability:</span> As supporters grow, so does our impact.
            </li>
            <li>
              <span className="font-semibold">Empowering Grassroots Initiatives:</span> Supporting local changemakers.
            </li>
            <li>
              <span className="font-semibold">Helping Families Without Income:</span> Assisting families who lost their sole breadwinner.
            </li>
          </ul>
        </div>

        {/* Transparency & Sustainability */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Transparency & Sustainability
          </h2>
          <p className="text-lg">
            We ensure that every contribution is accounted for. Donors can track their impact through clear reports. We also build corporate sponsorships to sustain our mission.
          </p>
        </div>

        {/* How We Operate */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">How We Operate</h2>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>
              <span className="font-semibold">100% Accountability:</span> Every rupee goes toward impactful projects.
            </li>
            <li>
              <span className="font-semibold">Real-Time Impact Reports:</span> Donors receive updates on their contributions.
            </li>
            <li>
              <span className="font-semibold">Collaborative Approach:</span> We work with NGOs, government, and private organizations.
            </li>
            <li>
              <span className="font-semibold">Digital Fundraising & Outreach:</span> Using technology to connect with donors efficiently.
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Join Us in Creating Change!
          </h2>
          <p className="text-lg mb-6">
            Your ₹21 can bring hope to someone in need. Together, we can make a difference.
          </p>
          <button onClick={() => navigate('/donate')} className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default About