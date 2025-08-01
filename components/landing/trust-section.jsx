import { Calculator, Calendar, Smartphone } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Trusted Tools. Built for Aussie Tradies.
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="flex items-center space-x-3 bg-gray-100 px-6 py-3 rounded-full">
            <Calculator className="w-6 h-6 text-blue-600" />
            <span className="font-semibold text-gray-700">Xero Integration</span>
          </div>
          <div className="flex items-center space-x-3 bg-gray-100 px-6 py-3 rounded-full">
            <Calendar className="w-6 h-6 text-red-500" />
            <span className="font-semibold text-gray-700">Easy to Use Calendar</span>
          </div>
          <div className="flex items-center space-x-3 bg-gray-100 px-6 py-3 rounded-full">
            <Smartphone className="w-6 h-6 text-green-500" />
            <span className="font-semibold text-gray-700">Mobile & Desktop</span>
          </div>
        </div>
      </div>
    </section>
  );
} 