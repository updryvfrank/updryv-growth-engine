import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Results-Driven",
      description: "We measure success by your business outcomes, not vanity metrics.",
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Partnership Approach",
      description: "We work alongside you as strategic partners, not just consultants.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Continuous Innovation",
      description: "Always staying ahead of industry trends to give you competitive advantages.",
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Proven Excellence",
      description: "Decades of combined experience delivering transformative results.",
    },
  ];

  const team = [
    {
      name: "Alex Thompson",
      role: "Founder & CEO",
      expertise: "Business Strategy, Marketing",
    },
    {
      name: "Sarah Mitchell",
      role: "Head of Automation",
      expertise: "Process Optimization, AI",
    },
    {
      name: "David Park",
      role: "Lead Marketing Strategist",
      expertise: "Growth Marketing, Analytics",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Building the Future of Business Growth
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              We're on a mission to help ambitious businesses leverage technology and strategy to achieve extraordinary results.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-center">
              Our <span className="text-accent">Story</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Updryv was founded with a simple belief: every business deserves access to world-class marketing, automation, and AI strategies—not just Fortune 500 companies.
              </p>
              <p>
                After years of helping enterprise organizations achieve remarkable growth, our founders recognized a critical gap in the market. Small to mid-sized businesses were being left behind, stuck with outdated strategies while their larger competitors leveraged cutting-edge technology.
              </p>
              <p>
                Today, we've helped over 500 businesses transform their operations, generate millions in additional revenue, and build sustainable competitive advantages. Our approach combines proven methodologies with innovative technology to deliver measurable results that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12 text-center">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="font-heading text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
            Meet the <span className="text-accent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A diverse group of experts passionate about driving business transformation
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-accent rounded-full mx-auto mb-6" />
                  <h3 className="font-heading text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-accent font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Let's discuss how we can help transform your business with our proven strategies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
