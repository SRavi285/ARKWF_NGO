import React from "react";

const TermsConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">
        Terms and Conditions
      </h1>
      <p className="text-gray-600 mb-6">Last updated: February 07, 2025</p>

      <p className="mb-4">
        Please read these Terms and Conditions carefully before using our
        Service.
      </p>

      {/* Section: Interpretation and Definitions */}
      <h2 className="text-blue-700 text-2xl font-semibold mt-6 mb-3">
        1. Interpretation and Definitions
      </h2>

      <h3 className="text-xl font-medium mt-4">Interpretation</h3>
      <p className="mb-3">
        Words with an initial capital letter have meanings defined under the
        following conditions.
      </p>

      <h3 className="text-xl font-medium mt-4">Definitions</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Affiliate:</strong> An entity controlling or controlled by
          another entity.
        </li>
        <li>
          <strong>Country:</strong> Uttar Pradesh, India.
        </li>
        <li>
          <strong>Company:</strong> Archana RamKishori Welfare Foundation
          (ARKWF).
        </li>
        <li>
          <strong>Service:</strong> The website{" "}
          <a href="http://www.arkwf.org" className="text-blue-600 underline">
            www.arkwf.org
          </a>
          .
        </li>
        <li>
          <strong>You:</strong> Any individual or legal entity using the
          Service.
        </li>
      </ul>

      {/* Section: Acknowledgment */}
      <h2 className="text-blue-700 text-2xl font-semibold mt-6 mb-3">2. Acknowledgment</h2>
      <p className="mb-4">
        These Terms govern the use of our Service and form a legal agreement
        between you and ARKWF.
      </p>

      {/* Section: Website Usage */}
      <h2 className="text-blue-700 text-2xl font-semibold mt-6 mb-3">3. Website Usage</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Users must use the website for lawful purposes only.</li>
        <li>
          Unauthorized access, hacking, or fraudulent activities are strictly
          prohibited.
        </li>
      </ul>

      {/* Section: Donations & Payments */}
      <h2 className="text-blue-700 text-2xl font-semibold mt-6 mb-3">
        4. Donations & Payments
      </h2>
      <p className="mb-3">
        Donations made to ARKWF are voluntary and non-refundable, except in
        special cases per our refund policy.
      </p>

      {/* Section: Intellectual Property */}
      <h2 className=" text-blue-700 text-2xl font-semibold mt-6 mb-3">
        5. Intellectual Property
      </h2>
      <p className="mb-3">
        All content on this website, including logos, text, and images, is the
        property of ARKWF and is protected under intellectual property laws.
      </p>

      {/* Section: Privacy Policy */}
      <h2 className="text-blue-700 text-2xl font-semibold mt-6 mb-3">
        6. Privacy & Data Protection
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          We collect and process data as per our{" "}
          <a href="/privacy-policy" className="text-blue-600 underline">
            Privacy Policy
          </a>
          .
        </li>
        <li>
          We do not sell or share user data without consent, except as required
          by law.
        </li>
      </ul>

      {/* Section: Limitation of Liability */}
      <h2 className="text-blue-700 text-2xl font-semibold mt-6 mb-3">
        7. Limitation of Liability
      </h2>
      <p className="mb-3">
        ARKWF is not liable for any direct or indirect damages resulting from
        the use of our website or services.
      </p>

      {/* Section: Governing Law & Dispute Resolution */}
      <h2 className="text-blue-700 text-2xl font-semibold mt-6 mb-3">
        8. Governing Law & Dispute Resolution
      </h2>
      <p className="mb-3">
        These Terms are governed by the laws of India. Any disputes must first
        be resolved informally before legal proceedings.
      </p>

      {/* Section: Updates & Changes */}
      <h2 className="text-blue-700 text-2xl font-semibold mt-6 mb-3">
        9. Changes to These Terms
      </h2>
      <p className="mb-3">
        We reserve the right to update or modify these Terms at any time.
        Continued use of the Service implies agreement with the new Terms.
      </p>

      {/* Section: Contact Information */}
      <h2 className="text-blue-700 text-2xl font-semibold mt-6 mb-3">10. Contact Us</h2>
      <p>If you have any questions, contact us at:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:arkwf.org@gmail.com"
            className="text-blue-600 underline"
          >
            arkwf.org@gmail.com
          </a>
        </li>
        <li>
          <strong>Phone:</strong> +91-8563 8563 82
        </li>
        <li>
          <strong>Address:</strong> Church Road, Pahalwara, Balrampur, Uttar
          Pradesh, India
        </li>
      </ul>
    </div>
  );
};

export default TermsConditions;
