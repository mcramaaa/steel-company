import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function LandingV1() {
  return (
    <div>
      <section className="relative w-full h-[80vh] bg-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Steel factory background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-0">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              PT. BAJA KITA
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Penyedia baja berkualitas tinggi untuk kebutuhan industri dan
              konstruksi
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/produk">Lihat Produk</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                <Link href="/kontak">Hubungi Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Steel production"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tentang PT. BAJA KITA
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                PT. BAJA KITA adalah perusahaan penyedia baja terkemuka di
                Indonesia dengan pengalaman lebih dari 20 tahun. Kami
                menyediakan berbagai jenis baja berkualitas tinggi untuk
                kebutuhan industri, konstruksi, dan infrastruktur.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Dengan fasilitas produksi modern dan tim profesional yang
                berpengalaman, kami berkomitmen untuk memberikan produk terbaik
                dengan harga yang kompetitif dan pelayanan yang memuaskan.
              </p>
              <Link
                href="/tentang"
                className="flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                Pelajari Lebih Lanjut <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Produk Unggulan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai jenis baja berkualitas tinggi untuk
              berbagai kebutuhan industri dan konstruksi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg border border-gray-100">
              <div className="h-64 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Besi Beton"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Besi Beton
                </h3>
                <p className="text-gray-600 mb-4">
                  Besi beton berkualitas tinggi dengan berbagai ukuran untuk
                  kebutuhan konstruksi
                </p>
                <Link
                  href="/produk/besi-beton"
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg border border-gray-100">
              <div className="h-64 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Plat Baja"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Plat Baja
                </h3>
                <p className="text-gray-600 mb-4">
                  Plat baja dengan ketebalan bervariasi untuk kebutuhan industri
                  dan konstruksi
                </p>
                <Link
                  href="/produk/plat-baja"
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg border border-gray-100">
              <div className="h-64 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Pipa Baja"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Pipa Baja
                </h3>
                <p className="text-gray-600 mb-4">
                  Pipa baja dengan berbagai diameter untuk kebutuhan industri
                  dan infrastruktur
                </p>
                <Link
                  href="/produk/pipa-baja"
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/produk">Lihat Semua Produk</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tim marketing kami siap membantu Anda dengan kebutuhan baja untuk
              proyek Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Marketing Contact 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Marketing Staff"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Budi Santoso
                  </h3>
                  <p className="text-gray-600">Marketing Manager</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-blue-600" />
                  <p className="text-gray-700">+62 812-3456-7890</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-blue-600" />
                  <p className="text-gray-700">budi@bajakita.com</p>
                </div>
              </div>
            </div>

            {/* Marketing Contact 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Marketing Staff"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Siti Rahayu
                  </h3>
                  <p className="text-gray-600">Sales Executive</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-blue-600" />
                  <p className="text-gray-700">+62 813-4567-8901</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-blue-600" />
                  <p className="text-gray-700">siti@bajakita.com</p>
                </div>
              </div>
            </div>

            {/* Marketing Contact 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Marketing Staff"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Agus Wijaya
                  </h3>
                  <p className="text-gray-600">Customer Relations</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-blue-600" />
                  <p className="text-gray-700">+62 814-5678-9012</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-blue-600" />
                  <p className="text-gray-700">agus@bajakita.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-lg p-8 shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Kantor Pusat
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-blue-600 mt-1" />
                    <p className="text-gray-700">
                      Jl. Industri Raya No. 123, Kawasan Industri Pulogadung,
                      Jakarta Timur, DKI Jakarta 13920
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-blue-600" />
                    <p className="text-gray-700">+62 21 4567-8901</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-blue-600" />
                    <p className="text-gray-700">info@bajakita.com</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 h-64 relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Office Location"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
