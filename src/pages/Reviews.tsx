import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechFlow Solutions",
      role: "CEO",
      content: "Updryv completely transformed our marketing approach. Within 6 months, we saw a 280% increase in qualified leads. Their strategic insights and hands-on implementation made all the difference. They don't just consult—they partner with you for success.",
      rating: 5,
      results: "280% increase in qualified leads",
    },
    {
      name: "Michael Chen",
      company: "GrowthLabs Inc",
      role: "Operations Director",
      content: "The automation systems Updryv implemented saved our team 30+ hours per week. We've been able to scale operations without proportionally increasing headcount. The ROI was evident within the first quarter.",
      rating: 5,
      results: "30+ hours saved weekly",
    },
    {
      name: "Emily Rodriguez",
      company: "Innovate Capital",
      role: "VP of Marketing",
      content: "Their AI integration expertise helped us stay years ahead of our competition. The predictive analytics alone has improved our decision-making dramatically. Best investment we've made in our business.",
      rating: 5,
      results: "4x improvement in forecast accuracy",
    },
    {
      name: "David Park",
      company: "Summit Ventures",
      role: "Founder",
      content: "What impressed me most was their ability to understand our unique challenges and create tailored solutions. They're not selling cookie-cutter packages—they're true strategic partners invested in your success.",
      rating: 5,
      results: "Custom solution drove 45% efficiency gain",
    },
    {
      name: "Jennifer Martinez",
      company: "Apex Consulting",
      role: "Managing Partner",
      content: "Working with Updryv was a game-changer for our firm. Their comprehensive approach to marketing and automation allowed us to punch above our weight class and compete with much larger firms.",
      rating: 5,
      results: "Revenue grew 180% year-over-year",
    },
    {
      name: "Robert Thompson",
      company: "Digital Dynamics",
      role: "CTO",
      content: "The technical expertise and business acumen they bring is rare. They understand both the technology and the business outcomes. Implementation was smooth, and ongoing support has been exceptional.",
      rating: 5,
      results: "System uptime improved to 99.9%",
    },
  ];

  const stats = [
    { value: "4.9/5", label: "Average Client Rating" },
    { value: "97%", label: "Client Satisfaction" },
    { value: "500+", label: "Success Stories" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12">
              Don't just take our word for it—hear from businesses we've helped transform
            </p>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
              {stats.map((stat, index) => (
                <div key={index}>
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

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-accent mb-4" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 text-lg italic">
                    "{testimonial.content}"
                  </p>

                  <div className="bg-secondary p-4 rounded-lg mb-6">
                    <p className="font-semibold text-accent">{testimonial.results}</p>
                  </div>

                  <div className="border-t pt-4">
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm font-semibold text-primary">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Trusted by Leading <span className="text-accent">Businesses</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              From startups to established enterprises, we've helped businesses across industries achieve remarkable growth
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {["Technology", "Finance", "Healthcare", "E-commerce"].map((industry, index) => (
                <div key={index} className="p-6 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">{industry} Clients</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of businesses that have transformed their operations with Updryv
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
