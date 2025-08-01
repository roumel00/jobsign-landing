import { Card, CardContent } from "@/components/ui/card";

export default function FeaturesSection() {
  const features = [
    {
      icon: "📊",
      title: "Job Tracking",
      description: "See every job at a glance",
      color: "bg-blue-100"
    },
    {
      icon: "💰",
      title: "Quotes & Invoices",
      description: "Create and send in minutes",
      color: "bg-green-100"
    },
    {
      icon: "👥",
      title: "Team Management",
      description: "Assign and track your crew",
      color: "bg-purple-100"
    },
    {
      icon: "📅",
      title: "Calendar Scheduling",
      description: "Integrated with your whole team",
      color: "bg-orange-100"
    },
    {
      icon: "🔗",
      title: "Xero Integration",
      description: "No more double handling",
      color: "bg-indigo-100"
    },
    {
      icon: "📈",
      title: "Business Stats",
      description: "Know where you're making money",
      color: "bg-pink-100"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Everything You Need to Run Your Trade Business—In Your Pocket
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 