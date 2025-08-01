import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  const webappUrl = process.env.NEXT_PUBLIC_WEBAPP_URL;

  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 px-4 py-2 text-sm font-medium">
                Built for Aussie Tradies
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Less Paperwork.{" "}
                <span className="text-blue-600">More Time</span>{" "}
                on the Tools.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                JobSign takes the admin off your plate—quoting, invoicing, scheduling, and tracking—all in one simple app for tradies.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`${webappUrl}/auth/signup`} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-blue-200 rounded w-2/3"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-16 bg-orange-100 rounded-lg border-2 border-orange-200"></div>
                    <div className="h-16 bg-blue-100 rounded-lg border-2 border-blue-200"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 