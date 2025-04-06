import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getAllProducts } from "@/lib/products"

export default async function ProductList({ category }: { category: string }) {
  // Simulate a slight delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 500))

  const products = await getAllProducts()

  const filteredProducts = category === "semua" ? products : products.filter((product) => product.category === category)

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {filteredProducts.map((product) => (
        <div key={product.id} className="bg-white rounded-lg overflow-hidden group">
          <div className="h-48 bg-gray-200 relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">{product.name} Image</div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{product.shortDesc}</p>
            <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
              <Link href={`/products/${product.id}`}>Detail Produk</Link>
            </Button>
          </div>
        </div>
      ))}

      {filteredProducts.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-muted-foreground">Tidak ada produk dalam kategori ini.</p>
        </div>
      )}
    </div>
  )
}

