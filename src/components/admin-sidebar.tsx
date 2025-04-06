"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Package, Users, ShoppingCart, Settings, LogOut, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
  },
  {
    title: "Products",
    icon: Package,
    href: "/admin/products",
  },
  {
    title: "Marketing Team",
    icon: Users,
    href: "/admin/marketing",
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    href: "/admin/orders",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  const handleLogout = () => {
    // In a real app, clear auth tokens/cookies
    localStorage.removeItem("isLoggedIn")
    window.location.href = "/login"
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="w-64 border-r bg-white h-screen sticky top-0 hidden md:block">
        <div className="flex flex-col h-full">
          <div className="border-b p-4">
            <Link href="/admin" className="font-bold text-xl">
              PT. BAJA KITA
            </Link>
          </div>
          <div className="flex-1 py-6 px-3">
            <nav className="space-y-1">
              {sidebarItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium",
                    pathname === item.href ? "bg-primary text-primary-foreground" : "text-gray-700 hover:bg-gray-100",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="p-4 border-t">
            <Button variant="outline" className="w-full justify-start" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden sticky top-0 z-40 bg-white border-b w-full">
        <div className="flex items-center justify-between p-4">
          <Link href="/admin" className="font-bold text-lg">
            PT. BAJA KITA
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <div className="border-b p-4">
                <Link href="/admin" className="font-bold text-xl">
                  PT. BAJA KITA
                </Link>
              </div>
              <nav className="flex flex-col p-4">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-3 rounded-md text-sm font-medium",
                      pathname === item.href ? "bg-primary text-primary-foreground" : "text-gray-700 hover:bg-gray-100",
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.title}
                  </Link>
                ))}
                <Button variant="outline" className="w-full justify-start mt-4" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  )
}

