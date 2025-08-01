import PageLayout from "@/components/layout/page-layout";
import LegalContent from "@/components/legal/legal-content";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <LegalContent title="Privacy Policy" effectiveDate="July 19, 2025">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
          <p>
            Welcome to JobSign (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). This Privacy Policy outlines how we collect, use, and protect your information when you use our website, https://www.jobsign.au (the &quot;Site&quot;).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Information:</h3>
              <p>When you sign up for JobSign, we collect your name and email address.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Non-Personal Information:</h3>
              <p>We use web cookies to enhance your experience on our Site.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We collect and use your data to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Provide access to JobSign&apos;s services, including job tracking, invoicing, and quoting.</li>
            <li>Improve and maintain our Site.</li>
            <li>Communicate important updates.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing</h2>
          <p>
            We do not share, sell, or disclose your personal information to any third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Children&apos;s Privacy</h2>
          <p>
            We do not collect any data from children under the age of 13.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Security</h2>
          <p>
            We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Updates to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be communicated via email.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:info@jobsign.au" className="text-blue-600 hover:text-blue-700 underline">
              info@jobsign.au
            </a>
          </p>
        </section>
      </LegalContent>
    </PageLayout>
  );
} 