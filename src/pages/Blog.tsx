import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "10 Marketing Automation Strategies That Drive Real ROI",
      excerpt: "Discover the most effective marketing automation tactics that leading businesses use to generate consistent revenue growth.",
      category: "Marketing",
      date: "March 15, 2024",
      readTime: "8 min read",
      slug: "marketing-automation-strategies",
    },
    {
      title: "How AI Is Transforming Business Operations in 2024",
      excerpt: "An in-depth look at the latest AI trends and how forward-thinking companies are leveraging them for competitive advantage.",
      category: "AI & Technology",
      date: "March 12, 2024",
      readTime: "10 min read",
      slug: "ai-transforming-business",
    },
    {
      title: "The Complete Guide to Lead Generation for B2B Companies",
      excerpt: "Everything you need to know about building a sustainable lead generation system that fills your pipeline with qualified prospects.",
      category: "Growth",
      date: "March 8, 2024",
      readTime: "12 min read",
      slug: "b2b-lead-generation-guide",
    },
    {
      title: "5 Business Processes You Should Automate Today",
      excerpt: "Save time and reduce costs by automating these common business processes. Includes implementation tips and ROI calculations.",
      category: "Automation",
      date: "March 5, 2024",
      readTime: "6 min read",
      slug: "business-processes-to-automate",
    },
    {
      title: "Why Most Marketing Strategies Fail (And How to Fix Yours)",
      excerpt: "Learn the critical mistakes that derail marketing efforts and the proven framework to build a strategy that actually works.",
      category: "Marketing",
      date: "March 1, 2024",
      readTime: "9 min read",
      slug: "why-marketing-fails",
    },
    {
      title: "Scaling Your Business Without Scaling Your Headcount",
      excerpt: "Discover how smart automation and systems thinking allow you to grow revenue without proportionally increasing team size.",
      category: "Growth",
      date: "February 28, 2024",
      readTime: "7 min read",
      slug: "scaling-without-headcount",
    },
  ];

  const categories = ["All", "Marketing", "AI & Technology", "Growth", "Automation"];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Expert advice on marketing, automation, and business growth strategies
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-all group">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-accent" />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="text-accent font-semibold">{post.category}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-accent font-semibold hover:underline inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest insights and strategies delivered to your inbox weekly
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border"
              />
              <button className="px-6 py-3 bg-gradient-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
