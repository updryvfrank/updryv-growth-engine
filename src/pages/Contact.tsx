import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  // Use ref to maintain latest form data for sendBeacon reliability
  const formDataRef = useRef(formData);

  // Keep ref in sync with state
  useEffect(() => {
    formDataRef.current = formData;
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Function to send data to n8n webhook
  const sendToWebhook = () => {
    const data = formDataRef.current;
    // Only send if form has been filled
    if (data.email && data.name && data.message) {
      const payload = JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        message: data.message,
        timestamp: new Date().toISOString(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });

      if (!navigator.sendBeacon) {
        console.warn("sendBeacon not supported in this browser; skipping webhook send.");
        return;
      }

      const blob = new Blob([payload], { type: "application/json" });
      const ok = navigator.sendBeacon(
        "https://n8n.updryv.com/webhook/updryv-main-site-contact-form",
        blob
      );
      console.log("sendToWebhook called", { ok, payload });
    } else {
      console.log("sendToWebhook skipped: missing required fields", data);
    }
  };

  // Click handler for submit button - fires before native form submission
  const handleSubmitClick = () => {
    sendToWebhook(); // Send immediately on click
  };

  // Backup: Send data to n8n webhook on page navigation (HighLevel-compliant approach)
  useEffect(() => {
    const handlePageHide = () => sendToWebhook();
    window.addEventListener("pagehide", handlePageHide);
    return () => window.removeEventListener("pagehide", handlePageHide);
  }, []); // Empty deps - handler reads from ref

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
                <form action="/thank-you" method="GET" className="space-y-6">
                  <input 
                    type="hidden" 
                    name="timezone" 
                    value={Intl.DateTimeFormat().resolvedOptions().timeZone}
                  />
                  
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
                    onClick={handleSubmitClick}
                    className="w-full h-11 px-8 inline-flex items-center justify-center rounded-md text-sm font-medium bg-gradient-accent text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer"
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
