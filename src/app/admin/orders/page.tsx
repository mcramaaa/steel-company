import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  Filter,
  Download,
  Eye,
  FileText,
  ArrowUpDown,
} from "lucide-react";
import { getRecentOrders } from "@/lib/orders";

export default async function OrdersPage() {
  const orders = await getRecentOrders();

  // Add more mock orders for demonstration
  const allOrders = [
    ...orders,
    {
      id: "#ORD-004",
      product: "H-Beam Steel",
      customer: "Mega Construction Inc.",
      status: "Completed",
      amount: 15780,
      date: "2023-03-22",
    },
    {
      id: "#ORD-005",
      product: "Steel Plates",
      customer: "Industrial Solutions Co.",
      status: "Processing",
      amount: 9340,
      date: "2023-03-25",
    },
    {
      id: "#ORD-006",
      product: "Besi Beton Ulir",
      customer: "Jakarta Builders",
      status: "Pending",
      amount: 7650,
      date: "2023-03-26",
    },
    {
      id: "#ORD-007",
      product: "Pipa Baja Galvanis",
      customer: "Surabaya Contractors",
      status: "Completed",
      amount: 4320,
      date: "2023-03-28",
    },
    {
      id: "#ORD-008",
      product: "Plat Baja Hitam",
      customer: "Bandung Steel Works",
      status: "Pending",
      amount: 11250,
      date: "2023-03-30",
    },
  ];

  // Calculate statistics
  const totalOrders = allOrders.length;
  const pendingOrders = allOrders.filter(
    (order) => order.status === "Pending"
  ).length;
  const processingOrders = allOrders.filter(
    (order) => order.status === "Processing"
  ).length;
  const completedOrders = allOrders.filter(
    (order) => order.status === "Completed"
  ).length;
  const totalRevenue = allOrders.reduce((sum, order) => sum + order.amount, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Orders Management</h1>
        <p className="text-muted-foreground">View and manage customer orders</p>
      </div>

      {/* Order Statistics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalOrders}</div>
            <p className="text-xs text-muted-foreground">All time orders</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Badge variant="outline" className="text-yellow-500">
              {pendingOrders}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingOrders}</div>
            <p className="text-xs text-muted-foreground">
              Orders awaiting processing
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processing</CardTitle>
            <Badge variant="warning">{processingOrders}</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{processingOrders}</div>
            <p className="text-xs text-muted-foreground">Orders in progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <Badge variant="success">${completedOrders}</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalRevenue.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">From all orders</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search orders..."
              className="pl-8"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>
        <Button
          variant="outline"
          className="flex items-center gap-2 sm:self-end"
        >
          <Download className="h-4 w-4" />
          <span>Export</span>
        </Button>
      </div>

      {/* Orders Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Order ID</TableHead>
              <TableHead>
                <div className="flex items-center gap-1 cursor-pointer">
                  Date
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      order.status === "Completed"
                        ? "success"
                        : order.status === "Processing"
                        ? "warning"
                        : "outline"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  ${order.amount.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={`/admin/orders/${order.id.replace("#", "")}`}>
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2">
        <Button variant="outline" size="sm" disabled>
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="px-4 bg-primary text-primary-foreground"
        >
          1
        </Button>
        <Button variant="outline" size="sm" className="px-4">
          2
        </Button>
        <Button variant="outline" size="sm" className="px-4">
          3
        </Button>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  );
}
