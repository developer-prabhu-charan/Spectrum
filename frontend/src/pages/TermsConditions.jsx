import React, { useEffect } from "react";
import { Separator } from "../components/ui/separator";

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-slate-500 text-sm">
            Last updated: August 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-slate">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Introduction</h2>
              <p className="text-slate-600 leading-relaxed">
                Welcome to the website of Spectrum Formulation Private Limited
                ("Company", "we", "our", "us"). By accessing and using this
                website, you accept and agree to be bound by these Terms &
                Conditions. If you do not agree with any part of these terms,
                please do not use our website.
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Use of Website</h2>
              <p className="text-slate-600 leading-relaxed">
                This website is intended for informational purposes regarding our
                pharmaceutical manufacturing capabilities, product categories,
                and export services. You agree to use this website only for
                lawful purposes and in a manner that does not infringe upon or
                restrict the use of this website by others.
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. Intellectual Property</h2>
              <p className="text-slate-600 leading-relaxed">
                All content on this website, including but not limited to text,
                graphics, logos, images, and software, is the property of
                Spectrum Formulation Pvt. Ltd. and is protected by applicable
                intellectual property laws. Unauthorized reproduction,
                distribution, or modification of any content is strictly
                prohibited.
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Product Information</h2>
              <p className="text-slate-600 leading-relaxed">
                The product information provided on this website is for general
                informational purposes only. While we strive to ensure accuracy,
                we do not guarantee that all product details, specifications, or
                availability information is complete, current, or error-free.
                For specific product inquiries, please contact our export team
                directly.
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Enquiry Submissions</h2>
              <p className="text-slate-600 leading-relaxed">
                By submitting an enquiry through our contact form, you consent
                to our team contacting you regarding your request. The
                information you provide will be used solely for the purpose of
                responding to your enquiry and will be handled in accordance
                with our Privacy Policy.
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed">
                Spectrum Formulation Pvt. Ltd. shall not be liable for any
                direct, indirect, incidental, or consequential damages arising
                from the use of or inability to use this website, or from any
                information obtained through this website. We make no warranties
                or representations about the accuracy or completeness of the
                website content.
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Third-Party Links</h2>
              <p className="text-slate-600 leading-relaxed">
                Our website may contain links to third-party websites. These
                links are provided for convenience only, and we do not endorse
                or assume responsibility for the content or practices of any
                linked websites.
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Governing Law</h2>
              <p className="text-slate-600 leading-relaxed">
                These Terms & Conditions are governed by and construed in
                accordance with the laws of India. Any disputes arising from
                the use of this website shall be subject to the exclusive
                jurisdiction of the courts in Uttarakhand, India.
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">9. Changes to Terms</h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right to modify these Terms & Conditions at any
                time without prior notice. Your continued use of the website
                following any changes constitutes acceptance of the revised
                terms.
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">10. Contact</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions regarding these Terms & Conditions,
                please contact us at{" "}
                <a
                  href="mailto:spectrumcure@gmail.com"
                  className="text-teal-700 hover:underline font-medium"
                >
                  spectrumcure@gmail.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
