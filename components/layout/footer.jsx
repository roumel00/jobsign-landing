import Link from "next/link";
import Logo from "@/components/ui/logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-2">
            <Logo size="lg" variant="white" />
          </div>
          <p className="text-gray-400">Built for Aussie tradies, by Aussie tradies</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200 underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200 underline">
            Terms of Service
          </Link>
        </div>
        <div className="text-gray-400 text-sm">
          © 2025 JobSign. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 