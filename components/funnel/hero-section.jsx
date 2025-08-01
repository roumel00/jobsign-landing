"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, FileText, Calendar } from "lucide-react";
import Logo from "@/components/ui/logo";
import { useState, useEffect } from "react";

export default function FunnelHeroSection() {
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
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200 px-4 py-2 text-sm font-medium">
                🛠️ Built for Aussie Tradies
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Less Admin.{" "}
                <span className="text-orange-600">More Tools</span>{" "}
                in Hand.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Join the Aussie tradies saving hours each week by ditching paperwork.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToLeadCapture}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-8 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl"
              >
                {isLoading ? (
                  "Get 6 Months Free"
                ) : betaData && betaData.remainingSpots ? (
                  <>
                    <span className="hidden sm:inline">Get 6 Months Free - Only {betaData.remainingSpots} Spots Left!</span>
                    <span className="sm:hidden">Get 6 Months Free<br/>Only {betaData.remainingSpots} Spots Left!</span>
                  </>
                ) : (
                  "Get 6 Months Free"
                )}
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>100% Free Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No Credit Card Required</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="space-y-6">
                {/* App header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Logo size="xl" showText={false} />
                    <div>
                      <h3 className="font-semibold text-gray-900">JobSign</h3>
                      <p className="text-sm text-gray-500">Tradie's Best Mate</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 w-full">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Quick Quotes</p>
                        <p className="text-xs text-gray-500">2 min setup</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4 border border-orange-100 w-full">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Schedule Jobs</p>
                        <p className="text-xs text-gray-500">Drag & drop</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <p className="text-sm text-gray-600">This weeks earnings</p>
                      <p className="text-2xl font-bold text-gray-900">$3,570.95</p>
                    </div>
                    <div className="text-center sm:text-right">
                      <p className="text-sm text-gray-600">Jobs completed</p>
                      <p className="text-2xl font-bold text-green-600">12</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 