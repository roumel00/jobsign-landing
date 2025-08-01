import { Card, CardContent } from "@/components/ui/card";

export default function PainPointsSection() {
  const painPoints = [
    {
      icon: "📋",
      title: "Quoting & invoicing eats into family time",
      color: "bg-red-50 border-red-200"
    },
    {
      icon: "📱",
      title: "It can be a struggle to keep track of jobs & clients",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: "📄",
      title: "Endless paperwork and double-entry in Xero is a headache",
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: "💬",
      title: "Team communication lost in text chains slows you down",
      color: "bg-green-50 border-green-200"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Tired of Spending Nights on Paperwork?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            JobSign simplifies job management so you can get back on the tools and finish work on time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((item, index) => (
            <Card key={index} className={`${item.color} border-2 hover:shadow-lg transition-all duration-300`}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-gray-700 font-medium">{item.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 