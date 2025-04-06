import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function PublicHeader() {
  return (
    <header className="border-b w-full bg-white/50 backdrop-blur-md sticky top-0 z-10 flex justify-center">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          PT. BAJA KITA
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Beranda
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium hover:text-primary"
          >
            Produk
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-primary"
          >
            Tentang Kami
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary"
          >
            Kontak
          </Link>
          <Button asChild variant="outline" size="sm" className="gap-2">
            <Link href="/cart">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Keranjang</span>
              <span className="inline-flex items-center justify-center w-5 h-5 text-xs bg-primary text-primary-foreground rounded-full">
                0
              </span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/login">Admin Login</Link>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-sm font-medium hover:text-primary">
                Beranda
              </Link>
              <Link
                href="/products"
                className="text-sm font-medium hover:text-primary"
              >
                Produk
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-primary"
              >
                Tentang Kami
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary"
              >
                Kontak
              </Link>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-2 justify-start"
              >
                <Link href="/cart">
                  <ShoppingCart className="h-4 w-4" />
                  <span>Keranjang</span>
                  <span className="inline-flex items-center justify-center w-5 h-5 text-xs bg-primary text-primary-foreground rounded-full">
                    0
                  </span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="mt-2">
                <Link href="/login">Admin Login</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
