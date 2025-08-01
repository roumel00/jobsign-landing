import PageLayout from "@/components/layout/page-layout";
import LegalContent from "@/components/legal/legal-content";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <PageLayout>
      <LegalContent title="Terms of Service" effectiveDate="July 19, 2025">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
          <p>
            Welcome to JobSign (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using our website, https://www.jobsign.au (the &quot;Site&quot;), you agree to be bound by these Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Services</h2>
          <p>
            JobSign provides administrative tools for tradies, including quoting, invoicing, and job tracking. You must be at least 18 years old to use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration</h2>
          <p>
            To access our services, you must create an account and provide accurate information, including your name and email address. You are responsible for maintaining the security of your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Privacy</h2>
          <p>
            Our Privacy Policy outlines how we collect, use, and protect your data. By using JobSign, you agree to our{" "}
            <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Prohibited Activities</h2>
          <p className="mb-4">You agree not to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Use JobSign for any unlawful purpose.</li>
            <li>Interfere with or disrupt our services.</li>
            <li>Attempt to access other users&apos; accounts without authorization.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Collection</h2>
          <p>
            We collect personal information (name and email) and non-personal data (cookies) to provide and improve our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
          <p>
            We provide JobSign &quot;as is&quot; without warranties. To the fullest extent permitted by law, we are not liable for any damages arising from your use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates to These Terms</h2>
          <p>
            We may update these Terms of Service from time to time. Any changes will be communicated via email.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Australia.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
          <p>
            If you have any questions, please contact us at{" "}
            <a href="mailto:info@jobsign.au" className="text-blue-600 hover:text-blue-700 underline">
              info@jobsign.au
            </a>
          </p>
        </section>
      </LegalContent>
    </PageLayout>
  );
} 