import { Suspense } from "react"
import PublicHeader from "@/components/public-header"
import PublicFooter from "@/components/public-footer"
import ProductList from "@/components/product-list"
import ProductFilters from "@/components/product-filters"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const category = searchParams.category || "all"

  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />

      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>

        <ProductFilters activeCategory={category} />

        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList category={category} />
        </Suspense>
      </main>

      <PublicFooter />
    </div>
  )
}

function ProductListSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="border rounded-lg overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <div className="p-4">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-4" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        ))}
    </div>
  )
}

