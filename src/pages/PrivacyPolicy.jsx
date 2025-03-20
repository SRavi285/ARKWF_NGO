import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className=" text-gray-800 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 ">
          Privacy Policy for ARKWF
        </h1>
        <p className=" text-gray-600 mb-6">Last updated: March 06, 2025</p>

        {/* Introduction */}
        <p className="text-lg leading-relaxed mb-6">
          This Privacy Policy describes our policies on the collection, use, and disclosure of your
          information when using our Service. It also informs you about your privacy rights and how the law protects you.
        </p>

        {/* Interpretation and Definitions */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">1. Interpretation and Definitions</h2>
          
          <h3 className="text-xl font-medium text-gray-700 mt-4">Interpretation</h3>
          <p className="mb-3">Words with initial capital letters have specific meanings as defined below.</p>

          <h3 className="text-xl font-medium text-gray-700 mt-4">Definitions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Account:</strong> A unique account created for you to access our Service.</li>
            <li><strong>Company:</strong> ARCHANA RAMKISHORI WELFARE FOUNDATION, Pahalwara, Balrampur, India.</li>
            <li><strong>Cookies:</strong> Small files stored on your device that track browsing activity.</li>
            <li><strong>Device:</strong> Any device used to access our Service (computer, smartphone, tablet).</li>
            <li><strong>Personal Data:</strong> Information relating to an identified or identifiable individual.</li>
            <li><strong>Website:</strong> <a href="http://www.arkwf.org" className="text-blue-600 underline">www.arkwf.org</a></li>
          </ul>
        </div>

        {/* Collecting and Using Personal Data */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">2. Collecting and Using Your Personal Data</h2>
          
          <h3 className="text-xl font-medium text-gray-700 mt-4">Types of Data Collected</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, Phone number, Email address</li>
            <li>Address (including state, province, ZIP/postal code, and city)</li>
            <li>Usage data (IP address, Browser type, Pages visited, Time spent)</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-700 mt-4">Tracking Technologies and Cookies</h3>
          <p>We use the following types of cookies:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Session Cookies:</strong> Essential for authentication and security.</li>
            <li><strong>Persistent Cookies:</strong> To remember user preferences.</li>
          </ul>
        </div>

        {/* How We Use Your Data */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. How We Use Your Data</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Providing and maintaining our Service.</li>
            <li>Managing accounts and processing transactions.</li>
            <li>Responding to user inquiries and customer support.</li>
            <li>Ensuring compliance with legal obligations.</li>
          </ul>
        </div>

        {/* Sharing Data */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">4. Sharing Your Personal Data</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>With Service Providers:</strong> To monitor and improve our Service.</li>
            <li><strong>For Business Transfers:</strong> In case of a merger or acquisition.</li>
            <li><strong>With Affiliates:</strong> To maintain operational consistency.</li>
            <li><strong>With Business Partners:</strong> For collaborative programs.</li>
            <li><strong>With Your Consent:</strong> For additional purposes.</li>
          </ul>
        </div>

        {/* Data Retention and Security */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">5. Data Retention and Security</h2>
          <p>We retain personal data only for as long as necessary. While we implement security measures, no online transmission is entirely secure.</p>
        </div>

        {/* Your Rights */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">6. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access & Update:</strong> Request access to or updates of your personal data.</li>
            <li><strong>Data Deletion:</strong> Request data deletion, subject to legal constraints.</li>
            <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications.</li>
          </ul>
        </div>

        {/* Third-Party Links */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">7. Third-Party Links</h2>
          <p>Our Service may contain links to third-party websites. We are not responsible for their privacy practices.</p>
        </div>

        {/* Updates to Policy */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">8. Updates to This Policy</h2>
          <p>We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Updated" date.</p>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">9. Contact Us</h2>
          <p>If you have any questions, contact us at:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Email:</strong> <a href="mailto:arkwf.org@gmail.com" className="text-blue-600 underline">arkwf.org@gmail.com</a></li>
            <li><strong>Website:</strong> <a href="http://www.arkwf.org" className="text-blue-600 underline">www.arkwf.org</a></li>
            <li><strong>Phone:</strong> +91-8563 8563 82</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
