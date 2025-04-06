import { notFound } from "next/navigation"
import PublicHeader from "@/components/public-header"
import PublicFooter from "@/components/public-footer"
import { Button } from "@/components/ui/button"
import { getProductById } from "@/lib/products"
import { User } from "lucide-react"

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const product = await getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />

      <main className="flex-1 container py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">Main Product Image</div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="bg-gray-200 rounded-lg overflow-hidden aspect-square relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">{num}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-muted-foreground mt-2">Standard: {product.standard}</p>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Specifications</h2>
              <div className="grid grid-cols-2 gap-y-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <p className="font-medium">{key}</p>
                    <p className="text-muted-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t pt-6">
              <h3 className="font-medium mb-4">Contact Sales Representative</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-gray-500" />
                </div>
                <div>
                  <p className="font-medium">{product.contact.name}</p>
                  <p className="text-sm text-muted-foreground">{product.contact.position}</p>
                </div>
              </div>
              <Button className="w-full">Request Quotation</Button>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}

