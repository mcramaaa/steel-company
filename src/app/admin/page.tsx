import type React from "react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Package, Users, ShoppingCart, BarChart3 } from "lucide-react"
import { getAllProducts } from "@/lib/products"
import { getMarketingTeam } from "@/lib/marketing"
import { getRecentOrders } from "@/lib/orders"
import { Badge } from "@/components/ui/badge"

export default async function AdminDashboard() {
  const products = await getAllProducts()
  const team = await getMarketingTeam()
  const orders = await getRecentOrders()

  const totalProducts = products.length
  const totalTeam = team.length
  const newOrders = orders.filter((order) => order.status === "Pending").length
  const monthlySales = orders.reduce((sum, order) => sum + order.amount, 0)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back, Admin User</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Products" value={totalProducts.toString()} icon={<Package className="h-5 w-5" />} />
        <StatCard title="Marketing Team" value={totalTeam.toString()} icon={<Users className="h-5 w-5" />} />
        <StatCard title="New Orders" value={newOrders.toString()} icon={<ShoppingCart className="h-5 w-5" />} />
        <StatCard
          title="Monthly Sales"
          value={`$${monthlySales.toLocaleString()}`}
          icon={<BarChart3 className="h-5 w-5" />}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Orders</h2>
        <div className="border rounded-lg overflow-hidden bg-white">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 font-medium">Order ID</th>
                <th className="text-left p-3 font-medium">Product</th>
                <th className="text-left p-3 font-medium">Customer</th>
                <th className="text-left p-3 font-medium">Status</th>
                <th className="text-right p-3 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="p-3 font-medium">{order.id}</td>
                  <td className="p-3">{order.product}</td>
                  <td className="p-3">{order.customer}</td>
                  <td className="p-3">
                    <Badge
                      variant={
                        order.status === "Completed" ? "success" : order.status === "Processing" ? "warning" : "outline"
                      }
                    >
                      {order.status}
                    </Badge>
                  </td>
                  <td className="p-3 text-right">${order.amount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Marketing Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.slice(0, 3).map((member) => (
            <Card key={member.id}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 font-medium">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <Card>
      <CardContent className="p-6 flex items-center gap-4">
        <div className="bg-primary/10 p-3 rounded-full">{icon}</div>
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <CardTitle className="text-2xl mt-1">{value}</CardTitle>
        </div>
      </CardContent>
    </Card>
  )
}

