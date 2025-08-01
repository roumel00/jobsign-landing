import { Button } from "@/components/ui/button";

export default function CTASection() {
  const webappUrl = process.env.NEXT_PUBLIC_WEBAPP_URL;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Less Admin. More Time on the Tools.
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of tradies who've simplified their business with JobSign.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`${webappUrl}/auth/signup`} target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Button>
          </a>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-orange-300 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
} 