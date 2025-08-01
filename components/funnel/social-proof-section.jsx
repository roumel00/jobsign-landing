"use client";

import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export default function SocialProofSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [betaData, setBetaData] = useState(null);

  useEffect(() => {
    const fetchBetaCount = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/beta-count');
        const data = await response.json();
        setBetaData(data);
      } catch (error) {
        console.error('Failed to fetch beta count:', error);
        setBetaData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBetaCount();
  }, []);

  const testimonials = [
    {
      name: "Mark Thompson",
      trade: "Electrician",
      location: "Brisbane",
      rating: 5,
      text: "JobSign has saved me at least 3 hours a week. I can finally enjoy my weekends instead of doing admin.",
      avatar: "MT"
    },
    {
      name: "Sarah Chen",
      trade: "Plumber",
      location: "Sydney",
      rating: 5,
      text: "The mobile app is brilliant. I can quote jobs on-site and send invoices before I even leave the client's house.",
      avatar: "SC"
    },
    {
      name: "Dave Wilson",
      trade: "Landscaper",
      location: "Melbourne",
      rating: 5,
      text: "My wife actually sees me at dinner time now! This app has been a game-changer for our family.",
      avatar: "DW"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            We&apos;re building this for Aussie tradies—want in early?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            JobSign was built right here in Melbourne to help tradies ditch the admin—and we&apos;re here 24/7 to support you while we grow it together.
          </p>
        </div>

        {/* Testimonials */}
        {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="mb-6">
                <Quote className="w-8 h-8 text-orange-400 mb-4" />
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.trade} • {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Trust indicators */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-8 border border-orange-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <p className="text-sm text-gray-600">Founder Support</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">2025</div>
              <p className="text-sm text-gray-600">Founded This Year</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">300K+</div>
              <p className="text-sm text-gray-600">Aussie tradies need this</p>
            </div>
          </div>
        </div>

        {/* CTA reminder */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 sm:px-6 py-3 rounded-full font-medium text-sm sm:text-base">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            {isLoading ? (
              "Limited time offer: 6 months free trial"
            ) : betaData && betaData.remainingSpots ? (
              <>
                <span className="hidden sm:inline">Limited time offer: 6 months free trial - Only {betaData.remainingSpots} spots left!</span>
                <span className="sm:hidden">Only {betaData.remainingSpots} spots left!</span>
              </>
            ) : (
              "Limited time offer: 6 months free trial"
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 