import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Target,
  Zap,
  Globe,
} from "lucide-react";
import { getMarketingTeam } from "@/lib/marketing";

export default async function MarketingPage() {
  const team = await getMarketingTeam();

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
        <div className="container relative py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 border-none">
                Marketing & Promotion
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Grow Your Business with Our Steel Solutions
              </h1>
              <p className="text-lg text-blue-100">
                Our marketing team is dedicated to helping your business succeed
                with premium steel products and expert support.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  Contact Our Team
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/20"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-blue-200 bg-blue-700/50">
                Marketing Team Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl font-bold mb-4">
              Comprehensive Marketing Solutions
            </h2>
            <p className="text-muted-foreground">
              We offer a wide range of marketing services to help you promote
              and sell steel products effectively.
            </p>
          </div>

          <Tabs defaultValue="business" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger
                  value="business"
                  className="flex items-center gap-2"
                >
                  <Target className="h-4 w-4" />
                  <span className="hidden sm:inline">Business</span>
                </TabsTrigger>
                <TabsTrigger
                  value="consulting"
                  className="flex items-center gap-2"
                >
                  <Users className="h-4 w-4" />
                  <span className="hidden sm:inline">Consulting</span>
                </TabsTrigger>
                <TabsTrigger
                  value="international"
                  className="flex items-center gap-2"
                >
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">International</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="business" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Product Promotion",
                    description:
                      "Strategic promotion of steel products to target industries and businesses",
                    icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
                  },
                  {
                    title: "Market Analysis",
                    description:
                      "In-depth analysis of steel market trends and competitive positioning",
                    icon: <Target className="h-10 w-10 text-blue-600" />,
                  },
                  {
                    title: "Sales Support",
                    description:
                      "Expert sales team to help close deals and maintain customer relationships",
                    icon: <Zap className="h-10 w-10 text-blue-600" />,
                  },
                ].map((service, index) => (
                  <Card key={index} className="border-none shadow-sm">
                    <CardContent className="p-6">
                      <div className="mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <Link
                        href="/contact"
                        className="text-blue-600 font-medium flex items-center gap-1 group"
                      >
                        Learn more{" "}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="bg-blue-50 rounded-lg p-8 flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">
                    Need a Custom Business Solution?
                  </h3>
                  <p className="text-muted-foreground">
                    Our team can create tailored marketing strategies for your
                    specific business needs and goals.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-end">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Request a Consultation
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="consulting" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Industry Expertise",
                    description:
                      "Specialized knowledge of steel industry applications and requirements",
                    icon: <Award className="h-10 w-10 text-blue-600" />,
                  },
                  {
                    title: "Project Planning",
                    description:
                      "Strategic planning for construction and industrial steel applications",
                    icon: <Target className="h-10 w-10 text-blue-600" />,
                  },
                  {
                    title: "Technical Support",
                    description:
                      "Expert technical advice on steel specifications and applications",
                    icon: <Zap className="h-10 w-10 text-blue-600" />,
                  },
                ].map((service, index) => (
                  <Card key={index} className="border-none shadow-sm">
                    <CardContent className="p-6">
                      <div className="mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <Link
                        href="/contact"
                        className="text-blue-600 font-medium flex items-center gap-1 group"
                      >
                        Learn more{" "}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="bg-blue-50 rounded-lg p-8 flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">
                    Expert Consulting Services
                  </h3>
                  <p className="text-muted-foreground">
                    Get professional advice from our team of steel industry
                    experts for your next project.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-end">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Book a Consultation
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="international" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Global Sourcing",
                    description:
                      "Access to international steel markets and supply chains",
                    icon: <Globe className="h-10 w-10 text-blue-600" />,
                  },
                  {
                    title: "Export Services",
                    description:
                      "Comprehensive support for international shipping and logistics",
                    icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
                  },
                  {
                    title: "Compliance Support",
                    description:
                      "Guidance on international standards and regulatory requirements",
                    icon: <CheckCircle className="h-10 w-10 text-blue-600" />,
                  },
                ].map((service, index) => (
                  <Card key={index} className="border-none shadow-sm">
                    <CardContent className="p-6">
                      <div className="mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <Link
                        href="/contact"
                        className="text-blue-600 font-medium flex items-center gap-1 group"
                      >
                        Learn more{" "}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="bg-blue-50 rounded-lg p-8 flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">
                    International Business Opportunities
                  </h3>
                  <p className="text-muted-foreground">
                    Explore global markets with our international trade
                    expertise and connections.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-end">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Contact International Team
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl font-bold mb-4">
              The PT BAJA KITA Advantage
            </h2>
            <p className="text-muted-foreground">
              We bring unique strengths to help your business succeed in the
              competitive steel industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Industry Expertise",
                description:
                  "Over 20 years of experience in the steel industry",
                icon: <Award className="h-8 w-8 text-blue-600" />,
              },
              {
                title: "Quality Products",
                description:
                  "Premium steel products meeting international standards",
                icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
              },
              {
                title: "Dedicated Support",
                description:
                  "Personalized customer service and technical assistance",
                icon: <Users className="h-8 w-8 text-blue-600" />,
              },
              {
                title: "Competitive Pricing",
                description: "Transparent pricing and flexible payment options",
                icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
              },
            ].map((advantage, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Team */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="text-3xl font-bold mb-4">
              Meet Our Marketing Experts
            </h2>
            <p className="text-muted-foreground">
              Our dedicated team of professionals is ready to help you with all
              your steel needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card
                key={member.id}
                className="overflow-hidden border-none shadow-sm"
              >
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.position}</p>
                  <p className="text-muted-foreground mb-4">
                    Region: {member.region || "National"}
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Contact
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-blue-600 hover:bg-blue-700">
              View All Team Members
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-blue-100 mb-8">
              Contact our marketing team today to discuss how we can help you
              achieve your business goals with our premium steel products.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                Contact Us Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/20"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">
              Hear from businesses that have partnered with PT BAJA KITA for
              their steel needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "PT BAJA KITA's marketing team helped us find the perfect steel solutions for our construction project. Their expertise was invaluable.",
                author: "Ahmad Wijaya",
                company: "Wijaya Construction",
              },
              {
                quote:
                  "The team at PT BAJA KITA understands our industry needs and consistently delivers quality products and excellent service.",
                author: "Sarah Tanoto",
                company: "Tanoto Industries",
              },
              {
                quote:
                  "Working with PT BAJA KITA has streamlined our supply chain and improved our project delivery timelines significantly.",
                author: "Michael Hartono",
                company: "Hartono Builders",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="text-4xl text-blue-600 mb-4">{`"`}</div>
                  <p className="text-muted-foreground mb-6">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our marketing services and
              steel products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What industries do you serve?",
                answer:
                  "We serve a wide range of industries including construction, manufacturing, infrastructure, automotive, and more. Our steel products are suitable for various applications across different sectors.",
              },
              {
                question: "Do you offer customized marketing solutions?",
                answer:
                  "Yes, we provide tailored marketing solutions based on your specific business needs. Our team works closely with you to understand your requirements and develop strategies accordingly.",
              },
              {
                question: "Can you help with international orders?",
                answer:
                  "We have extensive experience in international trade and can assist with global sourcing, export services, and compliance with international standards and regulations.",
              },
              {
                question: "What makes PT BAJA KITA different from competitors?",
                answer:
                  "Our combination of industry expertise, quality products, dedicated customer support, and competitive pricing sets us apart. We focus on building long-term relationships and ensuring customer satisfaction.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Contact Our Support Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
