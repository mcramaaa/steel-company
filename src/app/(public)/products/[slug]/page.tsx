import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Simulasi data produk
// Dalam aplikasi nyata, ini akan diambil dari database atau API
const getProductData = (slug: string) => {
  return {
    id: "1",
    name: "H-Beam Steel",
    slug: slug,
    standard: "JIS G3101 SS400",
    description:
      "H-Beam Steel adalah produk baja struktural berbentuk H yang digunakan secara luas dalam konstruksi bangunan, jembatan, dan infrastruktur lainnya. Produk ini memiliki kekuatan tinggi dan tahan terhadap tekanan.",
    specifications: [
      { name: "Length", value: "6 - 12 meters" },
      { name: "Width", value: "100 - 400 mm" },
      { name: "Thickness", value: "6 - 24 mm" },
      { name: "Grade", value: "SS400" },
      { name: "Yield Strength", value: "≥ 245 N/mm²" },
      { name: "Tensile Strength", value: "400 - 510 N/mm²" },
    ],
    applications: [
      "Konstruksi bangunan komersial dan industri",
      "Jembatan dan infrastruktur transportasi",
      "Struktur pendukung untuk peralatan berat",
      "Rangka utama bangunan bertingkat tinggi",
      "Proyek konstruksi skala besar",
    ],
    features: [
      "Kekuatan tinggi dan daya tahan yang optimal",
      "Distribusi berat yang merata untuk stabilitas struktur",
      "Tahan terhadap tekukan dan deformasi",
      "Mudah diproses dan dipasang",
      "Tersedia dalam berbagai ukuran standar",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=400&width=400&text=Detail+1",
      "/placeholder.svg?height=400&width=400&text=Detail+2",
      "/placeholder.svg?height=400&width=400&text=Detail+3",
      "/placeholder.svg?height=400&width=400&text=Detail+4",
    ],
    stock: 120,
    unit: "batang",
    category: "Baja Struktural",
    relatedProducts: [
      {
        id: "2",
        name: "I-Beam Steel",
        slug: "i-beam-steel",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "3",
        name: "Channel Steel",
        slug: "channel-steel",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "4",
        name: "Angle Steel",
        slug: "angle-steel",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  };
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const product = getProductData((await params).slug);
  console.log(product);

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Beranda
            </Link>
            <span className="mx-2">/</span>
            <Link href="/produk" className="hover:text-blue-600">
              Produk
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="aspect-square relative rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:border-blue-500"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - Detail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <p className="text-gray-600 mt-2">Standard: {product.standard}</p>
              <div className="flex items-center mt-4 space-x-3">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  Tersedia
                </Badge>
                <span className="text-gray-600">
                  Stok: {product.stock} {product.unit}
                </span>
              </div>
            </div>

            <div className="border-t border-b border-gray-200 py-6">
              <p className="text-gray-700">{product.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Spesifikasi
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">{spec.name}</p>
                    <p className="font-medium text-gray-900">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Marketing Contact Selector */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Hubungi Marketing
              </h2>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Request Quotation
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="applications" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
              <TabsTrigger
                value="applications"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent text-gray-600 data-[state=active]:text-blue-600 px-4 py-2"
              >
                Aplikasi
              </TabsTrigger>
              <TabsTrigger
                value="features"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent text-gray-600 data-[state=active]:text-blue-600 px-4 py-2"
              >
                Fitur & Keunggulan
              </TabsTrigger>
              <TabsTrigger
                value="delivery"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent text-gray-600 data-[state=active]:text-blue-600 px-4 py-2"
              >
                Pengiriman
              </TabsTrigger>
            </TabsList>
            <div className="mt-6 p-6 bg-gray-50 rounded-lg">
              <TabsContent value="applications" className="mt-0">
                <h3 className="text-lg font-semibold mb-4">
                  Aplikasi {product.name}
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  {product.applications.map((app, index) => (
                    <li key={index} className="text-gray-700">
                      {app}
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="features" className="mt-0">
                <h3 className="text-lg font-semibold mb-4">
                  Fitur & Keunggulan
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">
                      {feature}
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="delivery" className="mt-0">
                <h3 className="text-lg font-semibold mb-4">
                  Informasi Pengiriman
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    PT. BAJA KITA menyediakan layanan pengiriman ke seluruh
                    wilayah Indonesia dengan armada yang handal dan terpercaya.
                  </p>
                  <p>
                    Waktu pengiriman tergantung pada lokasi dan jumlah pesanan:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Jabodetabek: 1-3 hari kerja</li>
                    <li>Pulau Jawa: 3-5 hari kerja</li>
                    <li>Luar Pulau Jawa: 7-14 hari kerja</li>
                  </ul>
                  <p>
                    Untuk informasi lebih lanjut mengenai pengiriman, silakan
                    hubungi tim marketing kami.
                  </p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Produk Terkait
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {product.relatedProducts.map((relatedProduct) => (
              <Card
                key={relatedProduct.id}
                className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="aspect-square relative">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">
                    {relatedProduct.name}
                  </CardTitle>
                </CardHeader>
                <CardFooter className="p-4 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/produk/${relatedProduct.slug}`}>
                      Lihat Detail
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
