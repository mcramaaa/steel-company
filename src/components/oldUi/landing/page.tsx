import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Quality Steel Solutions for Your Projects
            </h1>
            <p className="text-lg text-muted-foreground">
              Leading provider of premium steel products for construction and
              industrial applications
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="rounded-md">
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] bg-gray-200 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Steel Factory Image
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Featured Products
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Besi Beton Hitam",
                description:
                  "Besi beton berkualitas tinggi untuk konstruksi bangunan",
                image: "/placeholder.svg?height=200&width=300",
                link: "/products?category=besi-beton",
              },
              {
                title: "Plat Baja",
                description: "Plat baja premium untuk aplikasi industri",
                image: "/placeholder.svg?height=200&width=300",
                link: "/products?category=plat-baja",
              },
              {
                title: "Pipa Baja",
                description: "Pipa baja tahan lama untuk berbagai industri",
                image: "/placeholder.svg?height=200&width=300",
                link: "/products?category=pipa-baja",
              },
            ].map((product, index) => (
              <div key={index} className="group">
                <div className="relative h-[200px] bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    {product.title} Image
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link href={product.link}>View Details</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Sales Team */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Contact Our Sales Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Budi Santoso",
                position: "Marketing Manager",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Sarah Johnson",
                position: "Sales Representative",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((person, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Avatar
                  </div>
                </div>
                <h3 className="font-semibold text-lg">{person.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {person.position}
                </p>
                <div className="flex gap-2 mt-auto">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
