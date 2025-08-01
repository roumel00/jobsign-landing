"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, ArrowRight, Shield, Clock, CreditCard } from "lucide-react";

export default function LeadCaptureSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    trade: "",
    phone: "",
    email: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const trades = [
    "Electrician",
    "Plumber",
    "Carpenter",
    "Landscaper",
    "Painter",
    "Builder",
    "Roofing",
    "HVAC",
    "Concrete",
    "Flooring",
    "Other"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email with form data
      const emailData = {
        to: "info@jobsign.au",
        subject: `New JobSign Trial Signup - ${formData.firstName} (${formData.trade})`,
        html: `
          <h2>New JobSign Trial Signup</h2>
          <p><strong>Name:</strong> ${formData.firstName}</p>
          <p><strong>Trade:</strong> ${formData.trade}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleDateString('en-AU')}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleTimeString('en-AU')}</p>
          <hr>
          <p><em>This lead came from the QR code funnel landing page.</em></p>
        `
      };

      const response = await fetch('/api/lead-capture-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      // Still show success to user even if email fails
      setIsSubmitted(true);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (isSubmitted) {
    return (
      <section className="py-16 sm:py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-green-100">
              <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Thanks {formData.firstName}! 🎉
              </h2>
              <p className="text-xl text-gray-600">
                We've received your request for a 6-month free trial. Our team will be in touch within 24 hours to get you set up.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-capture" className="py-16 sm:py-20 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Start your free 6-month trial now
            </h2>
            <p className="text-xl text-gray-600">
              Join our tradies who've already reclaimed their evenings.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                    placeholder="Your first name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="trade" className="text-sm font-medium text-gray-700">
                    Trade *
                  </Label>
                  <select
                    id="trade"
                    required
                    value={formData.trade}
                    onChange={(e) => handleInputChange("trade", e.target.value)}
                    className="flex h-12 w-full rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm shadow-sm focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
                  >
                    <option value="">Select your trade</option>
                    {trades.map((trade) => (
                      <option key={trade} value={trade}>
                        {trade}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                    placeholder="0400 000 000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 animate-spin" />
                    Setting up your trial...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    Claim My Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>100% secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-green-500" />
                  <span>No Credit Card Required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 