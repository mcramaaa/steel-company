import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="relative w-full h-[40vh] bg-white flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Steel products background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Katalog Produk
            </h1>
            <p className="text-xl text-gray-700">
              Berbagai produk baja berkualitas tinggi untuk kebutuhan industri
              dan konstruksi
            </p>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="semua" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-2xl grid-cols-5 bg-gray-100">
                <TabsTrigger value="semua">Semua</TabsTrigger>
                <TabsTrigger value="besi-beton">Besi Beton</TabsTrigger>
                <TabsTrigger value="plat-baja">Plat Baja</TabsTrigger>
                <TabsTrigger value="pipa-baja">Pipa Baja</TabsTrigger>
                <TabsTrigger value="baja-ringan">Baja Ringan</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="semua">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/* Product 1 */}
                <Card className="overflow-hidden border border-gray-200">
                  <div className="h-48 relative">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Besi Beton Ulir"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Besi Beton Ulir</CardTitle>
                    <CardDescription>Diameter 10mm - 32mm</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Besi beton ulir berkualitas tinggi dengan kekuatan tarik
                      optimal untuk konstruksi bangunan.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <Link href="/produk/besi-beton-ulir">Detail Produk</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Product 2 */}
                <Card className="overflow-hidden border border-gray-200">
                  <div className="h-48 relative">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Besi Beton Polos"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Besi Beton Polos</CardTitle>
                    <CardDescription>Diameter 6mm - 16mm</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Besi beton polos untuk kebutuhan konstruksi ringan dan
                      penggunaan umum.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <Link href="/produk/besi-beton-polos">Detail Produk</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Product 3 */}
                <Card className="overflow-hidden border border-gray-200">
                  <div className="h-48 relative">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Plat Baja Hitam"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Plat Baja Hitam</CardTitle>
                    <CardDescription>Ketebalan 1.2mm - 25mm</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Plat baja hitam untuk kebutuhan industri dan konstruksi
                      dengan berbagai ketebalan.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <Link href="/produk/plat-baja-hitam">Detail Produk</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Product 4 */}
                <Card className="overflow-hidden border border-gray-200">
                  <div className="h-48 relative">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Plat Baja Putih"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Plat Baja Putih</CardTitle>
                    <CardDescription>Ketebalan 0.2mm - 2.0mm</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Plat baja putih dengan lapisan galvanis untuk ketahanan
                      terhadap korosi.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <Link href="/produk/plat-baja-putih">Detail Produk</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Additional products... */}
                {/* You can add more products here */}
              </div>
            </TabsContent>

            <TabsContent value="besi-beton">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/* Besi Beton Products */}
                <Card className="overflow-hidden border border-gray-200">
                  <div className="h-48 relative">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Besi Beton Ulir"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Besi Beton Ulir</CardTitle>
                    <CardDescription>Diameter 10mm - 32mm</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Besi beton ulir berkualitas tinggi dengan kekuatan tarik
                      optimal untuk konstruksi bangunan.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <Link href="/produk/besi-beton-ulir">Detail Produk</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden border border-gray-200">
                  <div className="h-48 relative">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Besi Beton Polos"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Besi Beton Polos</CardTitle>
                    <CardDescription>Diameter 6mm - 16mm</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Besi beton polos untuk kebutuhan konstruksi ringan dan
                      penggunaan umum.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <Link href="/produk/besi-beton-polos">Detail Produk</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Other tabs content... */}
            {/* Similar structure for other product categories */}
          </Tabs>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Butuh Bantuan Memilih Produk?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Tim marketing kami siap membantu Anda menemukan produk yang sesuai
            dengan kebutuhan proyek Anda
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="/kontak">Hubungi Kami</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
