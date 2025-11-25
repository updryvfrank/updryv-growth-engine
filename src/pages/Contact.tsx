import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { toast } = useToast();
  const [searchParams, setSearchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [timestamp, setTimestamp] = useState("");
  const [timezone, setTimezone] = useState("");

  useEffect(() => {
    // Set timestamp and timezone on component mount
    setTimestamp(new Date().toISOString());
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    
    // Check if form was just submitted
    if (searchParams.get("submitted") === "true") {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      // Clear the query parameter
      setSearchParams({});
    }
  }, [searchParams, setSearchParams, toast]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Update timestamp just before submission
    setTimestamp(new Date().toISOString());
    
    // Send data to n8n webhook using sendBeacon (non-blocking)
    const webhookData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
      timestamp: new Date().toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
    
    const blob = new Blob([JSON.stringify(webhookData)], { type: "application/json" });
    navigator.sendBeacon("https://n8n.updryv.com/webhook/updryv-main-site-contact-form", blob);
    
    // Let the native form submission proceed for HighLevel tracking
    // Form will POST to /contact?submitted=true
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Let's Start Your Transformation
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Schedule your free strategy session and discover how we can help you achieve your business goals
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="font-heading text-3xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} action="/contact?submitted=true" method="POST" className="space-y-6">
                  <input type="hidden" name="timestamp" value={timestamp} />
                  <input type="hidden" name="timezone" value={timezone} />
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Inc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your business goals and challenges..."
                    />
                  </div>

                  <input 
                    type="submit" 
                    value="Send Message" 
                    className="w-full h-11 px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-gradient-accent text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer disabled:pointer-events-none disabled:opacity-50"
                  />
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're here to answer your questions and discuss how we can help transform your business. Reach out through any of these channels:
                </p>
              </div>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <a href="mailto:hello@updryv.com" className="text-muted-foreground hover:text-accent transition-colors">
                      hello@updryv.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <a href="tel:+19093774914" className="text-muted-foreground hover:text-accent transition-colors">
                      (909) 377-4914
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-hero text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-2">Free Strategy Session</h3>
                  <p className="text-primary-foreground/90 mb-4">
                    Not ready to commit? Schedule a free 30-minute strategy session to discuss your business goals.
                  </p>
                  <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Schedule Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
