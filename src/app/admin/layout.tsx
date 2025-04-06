import type React from "react"
import AdminSidebar from "@/components/admin-sidebar"
import { redirect } from "next/navigation"

// Simple dummy auth check
function isAuthenticated() {
  // In a real app, this would check cookies/localStorage/session
  return true
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check if user is authenticated
  if (!isAuthenticated()) {
    redirect("/login")
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 p-8">{children}</div>
    </div>
  )
}

