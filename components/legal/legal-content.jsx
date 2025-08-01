import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LegalContent({ title, effectiveDate, children }) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-lg text-gray-600">Effective Date: {effectiveDate}</p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {children}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/">
              <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-600 hover:text-white">
                ← Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 