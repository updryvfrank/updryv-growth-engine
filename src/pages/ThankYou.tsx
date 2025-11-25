import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-20 h-20 text-primary-foreground" />
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Thank You!
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              We've received your message and will get back to you within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <Card>
              <CardContent className="p-8 text-center">
                <h2 className="font-heading text-2xl font-bold mb-4">What Happens Next?</h2>
                <div className="space-y-4 text-left">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">We Review Your Message</h3>
                      <p className="text-muted-foreground">Our team will carefully review your inquiry and business needs.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Personalized Response</h3>
                      <p className="text-muted-foreground">You'll receive a tailored response addressing your specific situation.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Schedule a Strategy Session</h3>
                      <p className="text-muted-foreground">We'll arrange a free consultation to discuss how we can help your business grow.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Need Immediate Help?</h3>
                    <p className="text-sm text-muted-foreground mb-2">Give us a call</p>
                    <a href="tel:+19093774914" className="text-accent hover:underline">
                      (909) 377-4914
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us Directly</h3>
                    <p className="text-sm text-muted-foreground mb-2">For additional questions</p>
                    <a href="mailto:hello@updryv.com" className="text-accent hover:underline">
                      hello@updryv.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center">
              <Link to="/">
                <Button size="lg" className="bg-gradient-accent">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
