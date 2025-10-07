import Link from "next/link"

export const metadata = {
  title: "Terms and Conditions | STENTH",
  description: "STENTH's terms and conditions of service",
}

export default function TermsAndConditions() {
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
          Terms and Conditions
        </h1>

        <p className="text-slate-400 mb-8">Last updated: January 2025</p>

        <div className="prose prose-invert prose-slate max-w-none">
          <div className="space-y-8 text-slate-300">

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using the STENTH website and services, you accept and agree to be bound by these Terms and
                Conditions. If you do not agree with any part of these terms, you may not access our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Services</h2>
              <p>
                STENTH provides digital marketing, strategy, and growth services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Search Engine Optimization (SEO)</li>
                <li>Google Ads management and PPC advertising</li>
                <li>Content marketing and creation</li>
                <li>Web design and development</li>
                <li>Brand strategy and consulting</li>
                <li>Analytics and performance tracking</li>
              </ul>
              <p className="mt-4">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Client Responsibilities</h2>
              <p>As a client of STENTH, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide accurate and complete information necessary for service delivery</li>
                <li>Respond to requests for information in a timely manner</li>
                <li>Provide necessary access to accounts, websites, and platforms</li>
                <li>Review and approve deliverables within agreed timeframes</li>
                <li>Make payments according to the agreed terms</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Service Agreements and Contracts</h2>
              <p>
                Specific services will be governed by individual service agreements or contracts that outline:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Scope of work and deliverables</li>
                <li>Timeline and milestones</li>
                <li>Pricing and payment terms</li>
                <li>Performance metrics and KPIs</li>
                <li>Terms of termination</li>
              </ul>
              <p className="mt-4">
                These Terms and Conditions supplement, but do not replace, individual service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Payment Terms</h2>
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.1 Pricing and Fees</h3>
              <p>
                Service fees will be specified in individual service agreements. All prices are exclusive of applicable taxes
                unless otherwise stated.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.2 Payment Schedule</h3>
              <p>
                Payment terms will be outlined in service agreements and may include upfront deposits, monthly retainers,
                or project-based payments.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.3 Late Payments</h3>
              <p>
                Late payments may incur interest charges and may result in suspension of services. STENTH reserves the right
                to cease work on projects with outstanding payments.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.4 Third-Party Costs</h3>
              <p>
                Client is responsible for third-party costs including but not limited to advertising spend, software
                subscriptions, stock imagery, and hosting fees unless otherwise agreed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Intellectual Property</h2>
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">6.1 Client Content</h3>
              <p>
                You retain ownership of all content, information, and materials you provide to us. By providing such materials,
                you grant us a non-exclusive license to use them for the purpose of delivering our services.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">6.2 Work Product</h3>
              <p>
                Upon full payment, ownership of deliverables created specifically for you will transfer to you. This includes
                custom designs, content, and materials created as part of the agreed services.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">6.3 STENTH Property</h3>
              <p>
                STENTH retains ownership of all proprietary methodologies, processes, tools, and pre-existing materials used
                in delivering services.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">6.4 Portfolio Rights</h3>
              <p>
                STENTH reserves the right to showcase work performed for clients in portfolios, case studies, and marketing
                materials unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Performance and Results</h2>
              <p>
                While we strive to achieve the best possible results, STENTH does not guarantee specific outcomes, rankings,
                traffic levels, or revenue increases. Digital marketing involves many variables beyond our control, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Search engine algorithm changes</li>
                <li>Competitor activities</li>
                <li>Market conditions</li>
                <li>Industry trends</li>
                <li>Platform policy changes</li>
              </ul>
              <p className="mt-4">
                We commit to applying industry best practices and our expertise to achieve optimal results within these constraints.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Confidentiality</h2>
              <p>
                Both parties agree to maintain confidentiality of proprietary and sensitive information shared during the
                course of the business relationship. This obligation continues beyond the termination of services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Termination</h2>
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">9.1 By Client</h3>
              <p>
                Clients may terminate services according to the terms outlined in individual service agreements. Termination
                notices must be provided in writing according to agreed notice periods.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">9.2 By STENTH</h3>
              <p>
                STENTH may terminate services if:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Client breaches these terms or service agreements</li>
                <li>Payments are not received according to agreed terms</li>
                <li>Client provides false or misleading information</li>
                <li>The relationship becomes untenable</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">9.3 Upon Termination</h3>
              <p>
                Upon termination, client remains responsible for payment of all services rendered up to the termination date
                and any applicable termination fees outlined in service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, STENTH shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
              </p>
              <p className="mt-4">
                Our total liability for any claims arising from our services shall not exceed the total fees paid by the client
                for services in the six months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Warranties and Disclaimers</h2>
              <p>
                STENTH provides services on an "as is" and "as available" basis. We make no warranties, express or implied,
                regarding the services, including warranties of merchantability, fitness for a particular purpose, or
                non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Indemnification</h2>
              <p>
                Client agrees to indemnify and hold harmless STENTH from any claims, damages, losses, or expenses arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Client's breach of these terms</li>
                <li>Content or materials provided by client</li>
                <li>Client's use of deliverables</li>
                <li>Violation of applicable laws or third-party rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">13. Force Majeure</h2>
              <p>
                STENTH shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable
                control, including natural disasters, acts of government, pandemics, telecommunications failures, or other
                force majeure events.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">14. Governing Law and Disputes</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which services
                are provided (Ontario, Canada or Victoria, Australia as applicable).
              </p>
              <p className="mt-4">
                Any disputes arising from these terms or our services shall first be attempted to be resolved through good-faith
                negotiations. If resolution cannot be reached, disputes may be submitted to binding arbitration or the appropriate
                courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">15. Modifications to Terms</h2>
              <p>
                STENTH reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately
                upon posting to our website. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">16. Severability</h2>
              <p>
                If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or
                eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">17. Entire Agreement</h2>
              <p>
                These Terms and Conditions, together with any service agreements and related documents, constitute the entire
                agreement between you and STENTH regarding the use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">18. Contact Information</h2>
              <p>For questions about these Terms and Conditions, please contact us:</p>
              <ul className="list-none space-y-2 mt-4">
                <li>📧 Email: <a href="mailto:info@stenth.com" className="text-cyan-400 hover:text-cyan-300">info@stenth.com</a></li>
                <li>🏢 Canada: 368 Prince of Wales Dr, Mississauga, ON L5B 0A1</li>
                <li>🇦🇺 Australia: Picnic Ave Clyde North VIC 3978</li>
              </ul>
            </section>

            <section className="mt-8 p-6 bg-slate-900 rounded-lg border border-slate-800">
              <p className="text-sm">
                <strong>Acknowledgment:</strong> By using STENTH's services, you acknowledge that you have read, understood,
                and agree to be bound by these Terms and Conditions.
              </p>
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
