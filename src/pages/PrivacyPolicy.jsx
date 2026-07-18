import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8 sm:p-10">
          {/* Header */}
          <div className="mb-10 border-b border-gray-200 pb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-center text-sm text-gray-500 mb-4">for AuxOpus LLP</p>
            <div className="flex flex-wrap justify-between items-center text-sm text-gray-600 pt-2 border-t border-gray-100">
              <p><span className="font-semibold">Effective Date:</span> 09 July 2026</p>
              <p><span className="font-semibold">Last Updated:</span> 09 July 2026</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-10">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Welcome to <span className="font-semibold text-gray-900">AuxOpus LLP</span> ("AuxOpus", "Company", "we", "our", or "us").
              </p>
              <p className="text-gray-700 leading-relaxed">
                AuxOpus LLP is <span className="font-semibold text-gray-900">committed to protecting your privacy</span> and safeguarding the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, store, and protect your information when you access our website, applications, software products, APIs, or any other services operated by AuxOpus (collectively, the <span className="font-semibold text-gray-900">"Services"</span>).
              </p>
              <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r">
                <p className="text-gray-700 leading-relaxed text-sm">
                  <span className="font-semibold">Important:</span> By accessing or using our Services, you acknowledge that you have read and understood this Privacy Policy.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on how you interact with our Services, we may collect the following categories of information:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.1 Data You Provide Directly</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                We may collect personal information that you voluntarily provide when you contact us, request our services, submit an enquiry, or otherwise interact with AuxOpus. This information may include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                <li><span className="font-semibold text-gray-900">Contact Information:</span> Name, email address, phone number, mailing address, and other contact details.</li>
                <li><span className="font-semibold text-gray-900">Business Information:</span> Company name, designation, organization details, and business contact information.</li>
                <li><span className="font-semibold text-gray-900">Project Information:</span> Project requirements, technical specifications, scope documents, design briefs, and other information shared during project discussions.</li>
                <li><span className="font-semibold text-gray-900">Training & Event Information:</span> Registration details, attendance information, and feedback submitted during workshops, webinars, or training sessions.</li>
                <li><span className="font-semibold text-gray-900">Communications:</span> Emails, messages, meeting notes, support requests, and any correspondence you share with us.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.2 Data Collected Automatically</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                When you access or use our website or Services, certain information may be collected automatically, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                <li><span className="font-semibold text-gray-900">Usage data:</span> Pages visited, time spent, navigation patterns, referring URLs</li>
                <li><span className="font-semibold text-gray-900">Technical data:</span> IP address, browser type, device information, operating system</li>
                <li><span className="font-semibold text-gray-900">Cookies and Similar Technologies:</span> We use cookies and similar technologies to improve website functionality, analyze usage, remember user preferences, and enhance your overall experience.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.3 Sensitive Data</h3>
              <p className="text-gray-700 leading-relaxed">
                AuxOpus does not intentionally collect sensitive personal information through its website unless such information is voluntarily provided by you or is necessary for the delivery of our Services.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Personal Data</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We process personal data for purposes including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                <li>Responding to your inquiries and project requests</li>
                <li>Providing and delivering our software development and IT services</li>
                <li>Delivering training and workshop sessions</li>
                <li>Preparing contracts, invoices, and project documentation</li>
                <li>Personalising user experience and delivering relevant content</li>
                <li>Sending newsletters or promotional communications <span className="font-semibold text-gray-900">(with your consent)</span></li>
                <li>Improving our website performance and user experience</li>
                <li>Conducting analytics and research</li>
                <li>Ensuring website security and fraud prevention</li>
                <li>Complying with legal or regulatory obligations</li>
              </ul>
              <div className="mt-5 p-4 bg-green-50 border-l-4 border-green-600 rounded-r">
                <p className="text-gray-700 leading-relaxed font-medium">
                  ✓ We do not sell, rent, or trade your personal data to any third party for marketing or commercial purposes under any circumstances.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Client Data and Project Confidentiality</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In the course of delivering our services, we may access, process, or store data that belongs to your organisation or your end-users:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.1 NDA and Confidentiality</h3>
              <p className="text-gray-700 leading-relaxed">
                We sign a <span className="font-semibold text-gray-900">Non-Disclosure Agreement (NDA)</span> with clients whose projects involve proprietary business data, trade secrets, or sensitive operational information. <span className="font-semibold text-gray-900">All project data is treated as strictly confidential</span> and is not shared with any third party without your explicit written consent.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.2 Source Code and Intellectual Property</h3>
              <p className="text-gray-700 leading-relaxed">
                All source code, design files, databases, and related intellectual property developed specifically for your project are <span className="font-semibold text-gray-900">transferred to you upon full payment</span>, as per the terms of your project agreement. We retain <span className="font-semibold text-gray-900">no ownership rights</span> over bespoke work commissioned and paid for by you.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.3 System Access</h3>
              <p className="text-gray-700 leading-relaxed">
                Where you provide credentials to access your servers, hosting accounts, or databases during a project, those credentials are <span className="font-semibold text-gray-900">stored securely</span> and accessed only by the team members working on your account. Access is <span className="font-semibold text-gray-900">revoked upon project completion</span> unless an ongoing support arrangement requires continued access.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.4 End-User Data</h3>
              <p className="text-gray-700 leading-relaxed">
                If we develop or maintain applications that process personal data of your customers or end-users, we act as a <span className="font-semibold text-gray-900">data processor</span> on your behalf. You, as the <span className="font-semibold text-gray-900">data controller</span>, remain responsible for ensuring that your end-users are informed about how their data is processed.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Legal Basis for Processing</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Where applicable, we process personal information based on one or more of the following legal grounds:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                <li><span className="font-semibold text-gray-900">Contract performance:</span> Processing necessary to fulfil a contract or take pre-contractual steps</li>
                <li><span className="font-semibold text-gray-900">Legitimate interests:</span> Processing necessary for our legitimate business interests, where those interests are not overridden by your rights</li>
                <li><span className="font-semibold text-gray-900">Consent:</span> For marketing communications—you may withdraw consent at any time</li>
                <li><span className="font-semibold text-gray-900">Legal obligation:</span> Processing required to comply with applicable laws</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. How We Share Your Personal Data</h2>
              <div className="mb-4 p-4 bg-green-50 border-l-4 border-green-600 rounded-r">
                <p className="text-gray-700 leading-relaxed font-medium">✓ We do not sell your personal information.</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">We may share information with:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                <li><span className="font-semibold text-gray-900">Trusted service providers</span></li>
                <li><span className="font-semibold text-gray-900">Cloud hosting providers</span></li>
                <li><span className="font-semibold text-gray-900">Payment processors</span></li>
                <li><span className="font-semibold text-gray-900">Analytics providers</span></li>
                <li><span className="font-semibold text-gray-900">Professional advisors</span></li>
                <li><span className="font-semibold text-gray-900">Government authorities</span> when legally required</li>
                <li><span className="font-semibold text-gray-900">Business partners</span> involved in delivering requested services</li>
              </ul>
              <div className="mt-4 p-4 bg-gray-50 rounded border border-gray-200">
                <p className="text-gray-700 leading-relaxed text-sm">
                  <span className="font-semibold">Note:</span> All third parties are expected to maintain appropriate confidentiality and security measures.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Depending on the location of our infrastructure or service providers, personal information may be processed or stored in countries outside your place of residence.
              </p>
              <div className="p-4 bg-gray-50 rounded border border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold">Safeguards:</span> Where required by applicable law, we implement appropriate safeguards for such transfers.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Data Retention</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-3 leading-relaxed">
                <li>We retain personal information <span className="font-semibold text-gray-900">only for as long as necessary</span> to fulfil the purposes described in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.</li>
                <li>Project-related records, invoices, contracts, support communications, and business correspondence may be retained for a <span className="font-semibold text-gray-900">reasonable period</span> as required by applicable laws, accounting standards, and legitimate business requirements.</li>
                <li>When personal information is no longer required, we take reasonable steps to <span className="font-semibold text-gray-900">securely delete, anonymise, or archive</span> such information in accordance with our internal data management practices.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Data Security</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-3 leading-relaxed">
                <li>AuxOpus LLP implements <span className="font-semibold text-gray-900">reasonable technical, administrative, and organisational measures</span> to protect personal information against unauthorised access, loss, misuse, alteration, disclosure, or destruction.</li>
                <li>These measures may include <span className="font-semibold text-gray-900">secure storage systems, access controls, authentication mechanisms, encrypted communication</span> where appropriate, regular backups, and restricted access to project-related information.</li>
                <li className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-r list-none">
                  <span className="font-semibold">Disclaimer:</span> While we strive to use commercially acceptable means to protect your data, no method of transmission over the internet or electronic storage is completely secure, and <span className="font-semibold">we cannot guarantee absolute security</span>.
                </li>
              </ul>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Subject to applicable laws, you may have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                <li><span className="font-semibold text-gray-900">Access</span> the personal information we hold about you</li>
                <li><span className="font-semibold text-gray-900">Request correction</span> or updating of inaccurate information</li>
                <li><span className="font-semibold text-gray-900">Request deletion</span> of your personal information</li>
                <li><span className="font-semibold text-gray-900">Restrict or object</span> to certain processing activities</li>
                <li><span className="font-semibold text-gray-900">Request a copy</span> of your personal data in a portable format</li>
                <li><span className="font-semibold text-gray-900">Withdraw consent</span> where processing is based on your consent</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r">
                <p className="text-gray-700 leading-relaxed text-sm">
                  <span className="font-semibold">How to exercise your rights:</span> To exercise any of these rights, you may contact us using the details provided in the "Contact Us" section. We may request verification of your identity before processing such requests.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Changes to This Privacy Policy</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-3 leading-relaxed">
                <li>We may update or modify this Privacy Policy from time to time to reflect changes in our business practices, legal requirements, technologies, or Services.</li>
                <li>Any updated version will be posted on our website with a revised <span className="font-semibold text-gray-900">"Last Updated"</span> date. <span className="font-semibold text-gray-900">Continued use of our Services</span> after such changes become effective constitutes your acceptance of the updated Privacy Policy.</li>
                <li>We <span className="font-semibold text-gray-900">encourage users to review</span> this Privacy Policy periodically.</li>
              </ul>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or the processing of your personal information, please contact:
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-6 rounded-lg border border-gray-200 space-y-2">
                <p className="font-bold text-xl text-gray-900">AuxOpus LLP</p>
                <p><span className="font-semibold text-gray-700">Email:</span> <a href="mailto:auxopusllp@gmail.com" className="text-blue-600 hover:underline">auxopusllp@gmail.com</a></p>
                <p><span className="font-semibold text-gray-700">Phone:</span> <a href="tel:+919028194431" className="text-blue-600 hover:underline">+91 9028194431</a></p>
                <p><span className="font-semibold text-gray-700">Website:</span> <a href="https://www.auxopus.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.auxopus.com</a></p>
                <p><span className="font-semibold text-gray-700">Address:</span> Plot No 5B, B/H Bright Eng Med School, Mahavir Nagar, Shindkheda, Maharashtra, India</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;