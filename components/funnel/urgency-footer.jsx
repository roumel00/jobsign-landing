"use client";

import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function UrgencyFooter() {
  const [isLoading, setIsLoading] = useState(false);
  const [betaData, setBetaData] = useState(null);

  const scrollToLeadCapture = () => {
    const leadCaptureSection = document.getElementById('lead-capture');
    if (leadCaptureSection) {
      leadCaptureSection.scrollIntoView({ behavior: 'smooth' });
      // Focus on first input after scroll
      setTimeout(() => {
        const firstNameInput = document.getElementById('firstName');
        if (firstNameInput) {
          firstNameInput.focus();
        }
      }, 500);
    }
  };

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

  return (
    <>
      {/* Sticky bottom banner for mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50 md:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <Clock className="w-4 h-4 text-orange-500 flex-shrink-0" />
            <span className="text-sm font-medium text-gray-900 truncate">
              {isLoading ? (
                "Offer ends Sept 1st"
              ) : betaData && betaData.remainingSpots ? (
                `Only ${betaData.remainingSpots} spots left!`
              ) : (
                "Offer ends Sept 1st"
              )}
            </span>
          </div>
          <Button 
            size="sm"
            onClick={scrollToLeadCapture}
            className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 text-sm font-semibold rounded-lg flex-shrink-0 ml-2"
          >
            Get Free Trial
          </Button>
        </div>
      </div>

      {/* Desktop footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="text-center space-y-6 max-w-2xl">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col items-center gap-6">
                  <div className="text-center">
                    <h4 className="text-xl font-semibold mb-2">Limited Time Offer</h4>
                    <p className="text-orange-100 text-sm leading-relaxed">
                      {isLoading ? (
                        "Get 6 months free trial before September 1st"
                      ) : betaData && betaData.remainingSpots ? (
                        <>
                          <span className="hidden sm:inline">Get 6 months free trial - Only {betaData.remainingSpots} spots left! Offer ends Sept 1st</span>
                          <span className="sm:hidden">Get 6 months free trial<br/>Only {betaData.remainingSpots} spots left!<br/>Offer ends Sept 1st</span>
                        </>
                      ) : (
                        "Get 6 months free trial before September 1st"
                      )}
                    </p>
                  </div>
                  <Button 
                    onClick={scrollToLeadCapture}
                    className="bg-white text-orange-600 hover:bg-gray-100 px-6 sm:px-8 py-3 font-semibold rounded-xl"
                  >
                    <span>Claim Now</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-gray-400">
                <span>Australian owned & operated</span>
                <span className="hidden sm:inline">•</span>
                <span>24/7 support</span>
                <span className="hidden sm:inline">•</span>
                <span>Trusted by Aussie tradies</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 