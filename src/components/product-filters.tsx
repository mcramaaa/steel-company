"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "semua", label: "Semua" },
  { id: "besi-beton", label: "Besi Beton" },
  { id: "plat-baja", label: "Plat Baja" },
  { id: "pipa-baja", label: "Pipa Baja" },
  { id: "baja-ringan", label: "Baja Ringan" },
]

export default function ProductFilters({ activeCategory }: { activeCategory: string }) {
  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "default" : "outline"}
          className={cn(
            "rounded-md",
            activeCategory === category.id ? "bg-primary text-primary-foreground" : "bg-white",
          )}
          asChild
        >
          <Link href={`/products${category.id === "semua" ? "" : `?category=${category.id}`}`}>{category.label}</Link>
        </Button>
      ))}
    </div>
  )
}

