import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Zap, Target, BarChart3, Mail, Cog, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <TrendingUp className="w-12 h-12 text-accent" />,
      title: "Marketing Strategy & Execution",
      description: "Comprehensive marketing solutions that generate qualified leads and accelerate revenue growth.",
      features: [
        "Data-driven campaign development",
        "Multi-channel marketing execution",
        "Lead generation optimization",
        "Content strategy & creation",
        "Performance analytics & reporting",
      ],
    },
    {
      icon: <Zap className="w-12 h-12 text-accent" />,
      title: "Business Automation",
      description: "Streamline operations and reduce costs with intelligent automation solutions.",
      features: [
        "Workflow automation design",
        "CRM integration & optimization",
        "Sales process automation",
        "Customer service automation",
        "Custom automation development",
      ],
    },
    {
      icon: <Target className="w-12 h-12 text-accent" />,
      title: "AI Integration & Strategy",
      description: "Leverage cutting-edge AI to gain competitive advantages and drive innovation.",
      features: [
        "AI readiness assessment",
        "Custom AI solution development",
        "Machine learning implementation",
        "Chatbot & virtual assistant setup",
        "Predictive analytics integration",
      ],
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-accent" />,
      title: "Growth Consulting",
      description: "Strategic guidance to identify opportunities and accelerate business expansion.",
      features: [
        "Business assessment & audit",
        "Growth strategy development",
        "Market opportunity analysis",
        "Competitive positioning",
        "Scalability planning",
      ],
    },
    {
      icon: <Mail className="w-12 h-12 text-accent" />,
      title: "Email Marketing & Automation",
      description: "Build and nurture customer relationships with sophisticated email campaigns.",
      features: [
        "Email campaign strategy",
        "Automated drip sequences",
        "List segmentation & targeting",
        "A/B testing & optimization",
        "Newsletter management",
      ],
    },
    {
      icon: <Cog className="w-12 h-12 text-accent" />,
      title: "Systems Integration",
      description: "Connect your tools and platforms for seamless operations and better insights.",
      features: [
        "Platform integration planning",
        "API development & management",
        "Data synchronization",
        "Custom connector development",
        "Legacy system modernization",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Discovery",
      description: "We analyze your business, goals, and challenges to create a customized strategy.",
    },
    {
      step: "2",
      title: "Strategy",
      description: "Develop a comprehensive roadmap with clear milestones and success metrics.",
    },
    {
      step: "3",
      title: "Implementation",
      description: "Execute the strategy with hands-on support and expert guidance.",
    },
    {
      step: "4",
      title: "Optimization",
      description: "Continuously refine and improve based on real-time data and results.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Solutions That Drive Real Results
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Comprehensive services designed to transform your business and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="font-heading text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
            Our <span className="text-accent">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A proven framework that delivers consistent, measurable results
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-2xl font-bold text-accent-foreground mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Let's Build Your Success Story
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule a free consultation to discuss which services are right for your business.
            </p>
            <Button asChild size="lg" className="bg-gradient-accent">
              <Link to="/contact">
                Get Started Today <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
