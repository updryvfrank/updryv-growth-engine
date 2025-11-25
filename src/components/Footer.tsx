import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Updryv</h3>
            <p className="text-sm text-primary-foreground/80">
              Empowering businesses with cutting-edge marketing, automation, and AI solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-accent transition-colors">Marketing Strategy</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Business Automation</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">AI Integration</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:hello@updryv.com" className="hover:text-accent transition-colors">
                  hello@updryv.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3 mt-4">
                <a href="#" className="hover:text-accent transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Twitter size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Updryv. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
