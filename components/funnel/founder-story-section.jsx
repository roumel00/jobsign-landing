import { Badge } from "@/components/ui/badge";
import { Heart, Clock, Coffee } from "lucide-react";

export default function FounderStorySection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 px-4 py-2 text-sm font-medium mb-4">
              🇦🇺 Built for Aussie Tradies
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Built for my best mate—a Melbourne landscaper—so he could knock off earlier every day.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 border border-orange-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Real tradie pain points
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      JobSign was born out of watching my mate Luc spend hours after work doing quotes, 
                      chasing invoices, and trying to keep track of jobs. We thought: "There's got to be a better way."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      More time for what matters
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Now Luc finishes his admin in minutes, not hours. He's home for dinner with his family 
                      and has time to actually enjoy his weekends. That's what JobSign is all about.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-blue-500 rounded-full mx-auto flex items-center justify-center">
                    <Coffee className="w-10 h-10 text-white" />
                  </div>
                  <blockquote className="text-lg text-gray-700 italic">
                    "Mate, this app has changed everything. I'm actually enjoying my evenings again!"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-900">Luc, Melbourne Landscaper</p>
                    <p className="text-sm text-gray-500">JobSign user since 2025</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-300 rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-300 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 