import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-4 px-3 sm:py-8 sm:px-4 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-4 py-6 sm:p-6 md:p-8 lg:p-10">
                    {/* Header */}
                    <div className="mb-6 sm:mb-8 md:mb-10 border-b border-gray-200 pb-4 sm:pb-6">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">Refund Policy</h1>
                        <div className="flex flex-wrap justify-center items-center text-xs sm:text-sm text-gray-600 pt-2">
                            <p><span className="font-semibold">Effective Date:</span> 19 July 2026</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6 sm:space-y-8 md:space-y-10">
                        {/* Refund Policy of AuxOpus LLP */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Refund Policy of AuxOpus LLP</h2>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                                Welcome to <span className="font-semibold text-gray-900">AuxOpus LLP</span>. We are committed to providing high-quality software products, professional technology services, corporate training programs, and technical workshops. This Refund Policy explains the circumstances under which refunds may or may not be provided for our products and services.
                            </p>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                By purchasing any product or service from AuxOpus LLP, you acknowledge that you have read, understood, and agreed to this Refund Policy.
                            </p>
                        </section>

                        <hr className="border-t border-gray-200" />

                        {/* Section 1 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">1. General Policy</h2>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                                AuxOpus LLP provides digital products, Software-as-a-Service (SaaS), mobile applications, web applications, custom software development, corporate training programs, technical workshops, technology consulting, and related IT services.
                            </p>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                Due to the nature of digital products, customized software development, and scheduled training or workshop services, all purchases are generally considered <span className="font-semibold text-gray-900">non-refundable</span>, except in situations specifically mentioned in this policy.
                            </p>
                        </section>

                        <hr className="border-t border-gray-200" />

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">2. Digital Products</h2>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                                This includes, but is not limited to:
                            </p>
                            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1.5 sm:space-y-2 leading-relaxed">
                                <li>Software licenses</li>
                                <li>SaaS subscriptions</li>
                                <li>Mobile applications</li>
                                <li>Web applications</li>
                                <li>Premium features</li>
                                <li>Digital downloads</li>
                                <li>APIs</li>
                                <li>Digital assets</li>
                            </ul>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-3 sm:mt-4">
                                Once access has been granted, activated, downloaded, or delivered, the purchase cannot be refunded.
                            </p>
                        </section>

                        <hr className="border-t border-gray-200" />

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">3. Subscription Services</h2>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                                For subscription-based products:
                            </p>
                            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1.5 sm:space-y-2 leading-relaxed">
                                <li>Users may cancel future renewals at any time.</li>
                                <li>Cancellation prevents future billing only.</li>
                                <li>Fees already paid for the current billing period are not refundable.</li>
                                <li>Access will continue until the subscription period ends.</li>
                            </ul>
                        </section>

                        <hr className="border-t border-gray-200" />

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">4. Custom Software Development</h2>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                                For services including:
                            </p>
                            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1.5 sm:space-y-2 leading-relaxed">
                                <li>Website Development</li>
                                <li>Mobile App Development</li>
                                <li>Software Development</li>
                                <li>ERP/CRM Systems</li>
                                <li>Dashboard Development</li>
                                <li>API Development</li>
                                <li>AI Solutions</li>
                                <li>UI/UX Design</li>
                                <li>IT Consulting</li>
                            </ul>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-3 sm:mt-4 mb-3">
                                Payments are generally non-refundable because work begins immediately after project confirmation.
                            </p>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
                                If a project is terminated:
                            </p>
                            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1.5 sm:space-y-2 leading-relaxed">
                                <li>Payments already made for completed milestones are non-refundable.</li>
                                <li>Pending milestones will not be billed if work has not started.</li>
                                <li>Deliverables completed up to the payment stage remain the property of AuxOpus LLP until all outstanding invoices are cleared.</li>
                            </ul>
                        </section>

                        <hr className="border-t border-gray-200" />

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">5. Training Programs & Workshops</h2>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                                AuxOpus LLP also conducts professional training programs, technical workshops, corporate learning sessions, bootcamps, seminars, and educational events.
                            </p>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                                For these services:
                            </p>
                            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1.5 sm:space-y-2 leading-relaxed">
                                <li>Registration fees are generally non-refundable once the participant's seat has been confirmed.</li>
                                <li>If a participant cancels after confirmation, refunds will not ordinarily be provided.</li>
                                <li>In exceptional cases, AuxOpus LLP may permit rescheduling or transferring the registration to another available session, subject to approval.</li>
                                <li>
                                    If AuxOpus LLP cancels or permanently postpones a scheduled training program or workshop, participants may choose either:
                                    <ul className="list-disc pl-5 sm:pl-6 mt-1.5 sm:mt-2 space-y-1">
                                        <li>a full refund, or</li>
                                        <li>transfer of registration to a future session.</li>
                                    </ul>
                                </li>
                            </ul>
                        </section>

                        <hr className="border-t border-gray-200" />

                        {/* Section 6 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">6. Project Cancellation</h2>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                                Clients may request cancellation before work begins.
                            </p>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                                If no development work has started, AuxOpus LLP may, at its sole discretion, approve a partial refund after deducting:
                            </p>
                            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1.5 sm:space-y-2 leading-relaxed">
                                <li>Payment gateway charges</li>
                                <li>Banking charges</li>
                                <li>Administrative expenses</li>
                                <li>Consultation fees (if applicable)</li>
                            </ul>
                        </section>

                        <hr className="border-t border-gray-200" />

                        {/* Section 7 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">7. Duplicate Payments</h2>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                                If a customer accidentally makes multiple payments for the same order or invoice, AuxOpus LLP will verify the transaction and refund the duplicate payment.
                            </p>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                Refunds for duplicate payments are typically processed within <span className="font-semibold text-gray-900">7–14 business days</span> after verification.
                            </p>
                        </section>

                        <hr className="border-t border-gray-200" />

                        {/* Section 8 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">8. Failed Transactions</h2>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                                If payment is deducted but the order is not successfully created due to a technical issue:
                            </p>
                            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1.5 sm:space-y-2 leading-relaxed">
                                <li>
                                    The transaction will first be verified.
                                </li>
                                <li>
                                    If the amount has been received by AuxOpus LLP without successful service activation, the amount will either:
                                    <ul className="list-disc pl-5 sm:pl-6 mt-1.5 sm:mt-2 space-y-1">
                                        <li>be refunded, or</li>
                                        <li>be credited toward the intended service, based on customer preference.</li>
                                    </ul>
                                </li>
                            </ul>
                        </section>

                        <hr className="border-t border-gray-200" />

                        {/* Section 9 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">9. Exceptional Refunds</h2>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                                Refund requests may be considered in exceptional circumstances, including:
                            </p>
                            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1.5 sm:space-y-2 leading-relaxed">
                                <li>Incorrect billing due to a verified system error.</li>
                                <li>Duplicate transactions.</li>
                                <li>Services that cannot be delivered due to reasons solely attributable to AuxOpus LLP.</li>
                            </ul>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-3 sm:mt-4">
                                Approval of such refunds is solely at the discretion of AuxOpus LLP after internal review.
                            </p>
                        </section>

                        <hr className="border-t border-gray-200" />

                        {/* Section 10 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">10. Non-Refundable Situations</h2>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                                Refunds will not be issued for:
                            </p>
                            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1.5 sm:space-y-2 leading-relaxed">
                                <li>Change of mind after purchase.</li>
                                <li>Lack of product usage.</li>
                                <li>Failure to understand product features before purchase.</li>
                                <li>Customer-side technical incompatibility.</li>
                                <li>Internet connectivity issues.</li>
                                <li>Third-party service interruptions.</li>
                                <li>Delay caused by incomplete information provided by the customer.</li>
                                <li>Non-attendance or partial attendance in training programs or workshops.</li>
                                <li>Violation of our Terms of Service.</li>
                                <li>Suspension or termination due to policy violations.</li>
                            </ul>
                        </section>

                        <hr className="border-t border-gray-200" />

                        {/* Section 11 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">11. Refund Processing</h2>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                                Where a refund is approved:
                            </p>
                            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1.5 sm:space-y-2 leading-relaxed">
                                <li>Refunds will be processed using the original payment method whenever possible.</li>
                                <li>Processing time depends on banks and payment gateways.</li>
                                <li>Typical processing time ranges from <span className="font-semibold text-gray-900">7 to 14 business days</span>.</li>
                            </ul>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-3 sm:mt-4">
                                AuxOpus LLP is not responsible for delays caused by banks or payment service providers.
                            </p>
                        </section>

                        <hr className="border-t border-gray-200" />

                        {/* Section 12 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">12. Chargebacks</h2>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                                Customers are encouraged to contact AuxOpus LLP before initiating a chargeback with their bank or payment provider.
                            </p>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                                Initiating fraudulent or unjustified chargebacks may result in:
                            </p>
                            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1.5 sm:space-y-2 leading-relaxed">
                                <li>Immediate suspension of services.</li>
                                <li>Permanent account termination.</li>
                                <li>Recovery proceedings where permitted by applicable law.</li>
                            </ul>
                        </section>

                        <hr className="border-t border-gray-200" />

                        {/* Section 13 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">13. Changes to this Refund Policy</h2>
                            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1.5 sm:space-y-2 leading-relaxed">
                                <li>AuxOpus LLP reserves the right to modify or update this Refund Policy at any time without prior notice.</li>
                                <li>The latest version will always be available on our official website.</li>
                                <li>Continued use of our products or services constitutes acceptance of the updated policy.</li>
                            </ul>
                        </section>

                        <hr className="border-t border-gray-200" />

                        {/* Section 14 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">14. Contact Us</h2>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                                If you have any questions regarding this Refund Policy or wish to request a refund under eligible circumstances, please contact us.
                            </p>
                            <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-4 sm:p-5 md:p-6 rounded-lg border border-gray-200 space-y-1.5 sm:space-y-2">
                                <p className="font-bold text-lg sm:text-xl text-gray-900">AuxOpus LLP</p>
                                <p className="text-sm sm:text-base"><span className="font-semibold text-gray-700">Email:</span> <a href="mailto:auxopus.team@gmail.com" className="text-blue-600 hover:underline break-all">auxopus.team@gmail.com</a></p>
                                <p className="text-sm sm:text-base"><span className="font-semibold text-gray-700">Mobile:</span> <a href="tel:+919028194431" className="text-blue-600 hover:underline">+91 90281 94431</a></p>
                            </div>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-3 sm:mt-4">
                                We will make every reasonable effort to review and respond to your request promptly.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;