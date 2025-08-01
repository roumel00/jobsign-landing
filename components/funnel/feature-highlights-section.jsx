import { FileText, Calendar, MapPin, Smartphone, Zap, Users, Clock } from "lucide-react";

export default function FeatureHighlightsSection() {
  const features = [
    {
      icon: FileText,
      title: "Quick Quote & Invoice Generation",
      description: "Create professional quotes and invoices in under 2 minutes. No more late-night paperwork.",
      color: "blue"
    },
    {
      icon: Calendar,
      title: "Drag & Drop Scheduling",
      description: "Schedule jobs with a simple drag and drop. See your week at a glance and avoid double-bookings.",
      color: "orange"
    },
    {
      icon: MapPin,
      title: "Real-time Job Tracking",
      description: "Track job progress, update clients, and keep everything organized in one place.",
      color: "green"
    },
    {
      icon: Smartphone,
      title: "Update Jobs on the Go",
      description: "Track progress, make changes, and manage jobs from your phone—wherever the day takes you.",
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-700",
      orange: "bg-orange-50 border-orange-200 text-orange-700",
      green: "bg-green-50 border-green-200 text-green-700",
      purple: "bg-purple-50 border-purple-200 text-purple-700"
    };
    return colors[color] || colors.blue;
  };

  const getIconColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-500",
      orange: "bg-orange-500",
      green: "bg-green-500",
      purple: "bg-purple-500"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Everything you need to run your trade business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop juggling multiple apps and spreadsheets. JobSign puts everything in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className={`w-12 h-12 ${getIconColorClasses(feature.color)} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-6 h-6 text-orange-500" />
                <span className="text-3xl font-bold text-gray-900">2 min</span>
              </div>
              <p className="text-gray-600">Average time to create a quote</p>
            </div>
            <div className="space-y-2 md:col-span-2">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-6 h-6 text-blue-500" />
                <span className="text-3xl font-bold text-gray-900">For Australia's 300k+ Tradies</span>
              </div>
              <p className="text-gray-600">Be one of the first to try JobSign.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-6 h-6 text-green-500" />
                <span className="text-3xl font-bold text-gray-900">Get Time Back</span>
              </div>
              <p className="text-gray-600">Save hours every single week</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 