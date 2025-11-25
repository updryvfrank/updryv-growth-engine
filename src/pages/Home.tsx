import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Zap, Target, CheckCircle2, Star } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Marketing Strategy",
      description: "Data-driven marketing campaigns that generate qualified leads and accelerate growth.",
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Business Automation",
      description: "Streamline operations with intelligent automation solutions that save time and reduce costs.",
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "AI Integration",
      description: "Leverage cutting-edge AI technology to gain competitive advantages and drive innovation.",
    },
  ];

  const stats = [
    { value: "500+", label: "Businesses Transformed" },
    { value: "3.5x", label: "Average ROI Increase" },
    { value: "97%", label: "Client Satisfaction" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechFlow Solutions",
      content: "Updryv transformed our entire marketing approach. We've seen a 280% increase in qualified leads within just 6 months.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "GrowthLabs Inc",
      content: "The automation systems they implemented saved us 30+ hours per week. Game-changing for our operations.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Innovate Capital",
      content: "Their AI integration expertise helped us stay ahead of the competition. Highly recommend their services.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Business with <span className="text-accent">AI-Powered</span> Growth Strategies
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              We help ambitious businesses harness cutting-edge marketing, automation, and AI to achieve exponential growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg">
                <Link to="/contact">
                  Get Your Free Strategy Session <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-foreground/20">
              {stats.map((stat, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-primary-foreground/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              How We Drive <span className="text-accent">Results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven framework combines strategy, technology, and execution to deliver measurable business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-all hover:shadow-lg animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="font-heading text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to="/services" className="text-accent font-semibold hover:underline inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-accent">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Why Leading Businesses Choose Updryv
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't just offer services—we deliver transformation. Our approach combines proven methodologies with cutting-edge technology to create sustainable competitive advantages.
              </p>
              <ul className="space-y-4">
                {[
                  "Proven track record with 500+ successful transformations",
                  "Custom strategies tailored to your specific business goals",
                  "Hands-on implementation support, not just consulting",
                  "Continuous optimization based on real-time data",
                  "Expert team with decades of combined experience",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-hero rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Trusted by Industry <span className="text-accent">Leaders</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it—see what our clients say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/reviews">Read More Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Schedule a free strategy session with our experts and discover how we can help you achieve your growth goals.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg">
              <Link to="/contact">
                Get Your Free Consultation <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
