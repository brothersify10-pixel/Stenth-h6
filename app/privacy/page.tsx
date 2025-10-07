import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | STENTH",
  description: "STENTH's privacy policy and data protection practices",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
          Privacy Policy
        </h1>

        <p className="text-slate-400 mb-8">Last updated: January 2025</p>

        <div className="prose prose-invert prose-slate max-w-none">
          <div className="space-y-8 text-slate-300">

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p>
                STENTH ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">2.1 Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Contact us through our website</li>
                <li>Book a consultation</li>
                <li>Subscribe to our newsletter</li>
                <li>Request information about our services</li>
              </ul>
              <p className="mt-4">This information may include:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company name and business information</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">2.2 Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect certain information, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Referring URLs and pages viewed</li>
                <li>Time and date of visits</li>
                <li>Clickstream data and usage patterns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and fulfill your requests</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Analyze website usage and optimize user experience</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Information Sharing and Disclosure</h2>
              <p>We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Service Providers:</strong> We may share information with third-party service providers who assist us in operating our website and providing our services</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>With Your Consent:</strong> We may share your information for any other purpose with your consent</li>
              </ul>
              <p className="mt-4">We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information.
                Cookies are files with small amounts of data that may include an anonymous unique identifier.
              </p>
              <p className="mt-4">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information.
                However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Your Privacy Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Access to the personal information we hold about you</li>
                <li>Correction of inaccurate or incomplete information</li>
                <li>Deletion of your personal information</li>
                <li>Objection to or restriction of processing</li>
                <li>Data portability</li>
                <li>Withdrawal of consent</li>
              </ul>
              <p className="mt-4">To exercise these rights, please contact us at <a href="mailto:info@stenth.com" className="text-cyan-400 hover:text-cyan-300">info@stenth.com</a>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or
                content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information
                from children. If you become aware that a child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. International Data Transfers</h2>
              <p>
                Your information may be transferred to and maintained on computers located outside of your jurisdiction where
                data protection laws may differ. By using our services, you consent to such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy
                Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="list-none space-y-2 mt-4">
                <li>📧 Email: <a href="mailto:info@stenth.com" className="text-cyan-400 hover:text-cyan-300">info@stenth.com</a></li>
                <li>🏢 Canada: 368 Prince of Wales Dr, Mississauga, ON L5B 0A1</li>
                <li>🇦🇺 Australia: Picnic Ave Clyde North VIC 3978</li>
              </ul>
            </section>

          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <Link
            href="/"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
