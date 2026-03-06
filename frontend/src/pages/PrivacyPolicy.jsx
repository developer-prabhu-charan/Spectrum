import React, { useEffect } from "react";
import { Separator } from "../components/ui/separator";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Privacy Policy
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
                Spectrum Formulation Private Limited ("Company", "we", "our",
                "us") is committed to protecting the privacy and security of
                your personal information. This Privacy Policy explains how we
                collect, use, store, and protect information when you visit our
                website or submit enquiries through our contact form.
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                We may collect the following types of information:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Contact Information:</strong> Company name, contact person name, email address, phone/WhatsApp number, and country.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Enquiry Details:</strong> Product category interest, specific requirements, and messages submitted through our contact form.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Technical Data:</strong> Browser type, IP address, device information, and website usage data collected automatically through cookies or similar technologies.</span>
                </li>
              </ul>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                We use the collected information for the following purposes:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                  <span>To respond to your export and manufacturing enquiries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                  <span>To communicate regarding product information and partnerships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                  <span>To improve our website and user experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                  <span>To comply with legal and regulatory requirements</span>
                </li>
              </ul>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Data Sharing</h2>
              <p className="text-slate-600 leading-relaxed">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information only in the
                following circumstances: with your consent, to comply with
                legal obligations, to protect our rights, or with trusted
                service providers who assist us in operating our website and
                conducting our business (subject to confidentiality agreements).
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Data Security</h2>
              <p className="text-slate-600 leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet is 100% secure, and
                we cannot guarantee absolute security.
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Data Retention</h2>
              <p className="text-slate-600 leading-relaxed">
                We retain your personal information only for as long as
                necessary to fulfill the purposes for which it was collected,
                including to satisfy any legal, accounting, or reporting
                requirements. Enquiry data is typically retained for a period
                of 3 years unless a longer retention period is required by law.
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Your Rights</h2>
              <p className="text-slate-600 leading-relaxed">
                You have the right to request access to, correction of, or
                deletion of your personal information held by us. You may also
                withdraw your consent to the processing of your data at any
                time. To exercise any of these rights, please contact us at the
                email address provided below.
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Cookies</h2>
              <p className="text-slate-600 leading-relaxed">
                Our website may use cookies and similar tracking technologies
                to enhance your browsing experience. Cookies are small text
                files stored on your device. You can control cookie settings
                through your browser preferences. Disabling cookies may affect
                certain features of our website.
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">9. Changes to This Policy</h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or applicable laws. Any updates will
                be posted on this page with a revised "Last updated" date. We
                encourage you to review this policy periodically.
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">10. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy
                or our data handling practices, please contact us at:
              </p>
              <div className="mt-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                <p className="text-sm text-slate-700 font-semibold">Spectrum Formulation Pvt. Ltd.</p>
                <p className="text-sm text-slate-600 mt-1">12, Bhagwanpur - Haridwar Road, Makhanpur, Roorkee, Uttarakhand 247661</p>
                <p className="text-sm text-slate-600 mt-1">
                  Email:{" "}
                  <a href="mailto:spectrumcure@gmail.com" className="text-teal-700 hover:underline font-medium">
                    spectrumcure@gmail.com
                  </a>
                </p>
                <p className="text-sm text-slate-600 mt-1">Phone: +91-99993-20931</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
