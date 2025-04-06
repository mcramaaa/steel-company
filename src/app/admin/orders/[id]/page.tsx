import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Printer,
  Download,
  Truck,
  Package,
  User,
  Calendar,
  CreditCard,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function OrderDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // Mock order data - in a real app, you would fetch this from your database
  const order = {
    id: `#ORD-${params.id}`,
    date: "March 22, 2023",
    status: "Processing",
    customer: {
      name: "Mega Construction Inc.",
      email: "contact@megaconstruction.com",
      phone: "+62 812 3456 7890",
      address: "Jl. Sudirman No. 123, Jakarta Pusat, 10220, Indonesia",
    },
    items: [
      {
        id: "PROD-001",
        name: "H-Beam Steel 200x200mm",
        quantity: 10,
        price: 1200,
        total: 12000,
      },
      {
        id: "PROD-002",
        name: "Steel Plates 10mm",
        quantity: 5,
        price: 756,
        total: 3780,
      },
    ],
    shipping: {
      method: "Freight Delivery",
      cost: 500,
      address:
        "Jl. Industri No. 45, Kawasan Industri Pulogadung, Jakarta Timur, 13920, Indonesia",
      trackingNumber: "TRK123456789",
    },
    payment: {
      method: "Bank Transfer",
      status: "Paid",
      transactionId: "TRX987654321",
    },
    subtotal: 15780,
    tax: 1578,
    total: 17858,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/admin/orders">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Order {order.id}</h1>
            <p className="text-muted-foreground">Placed on {order.date}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Printer className="h-4 w-4" />
            <span>Print</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Order Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
            <CardDescription>Order details and status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Order Date</span>
              </div>
              <span>{order.date}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Order Status</span>
              </div>
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
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Payment Method</span>
              </div>
              <span>{order.payment.method}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Payment Status</span>
              </div>
              <Badge
                variant={
                  order.payment.status === "Paid" ? "success" : "outline"
                }
              >
                {order.payment.status}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Shipping Method</span>
              </div>
              <span>{order.shipping.method}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Tracking Number</span>
              </div>
              <span className="font-mono">{order.shipping.trackingNumber}</span>
            </div>
          </CardContent>
        </Card>

        {/* Customer Information */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
            <CardDescription>Details about the customer</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">{order.customer.name}</p>
                <p className="text-sm text-muted-foreground">Customer</p>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{order.customer.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{order.customer.phone}</span>
              </div>
              <div className="flex gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
                <span className="text-sm">{order.customer.address}</span>
              </div>
            </div>
            <Separator />
            <div>
              <p className="font-medium mb-2">Shipping Address</p>
              <p className="text-sm text-muted-foreground">
                {order.shipping.address}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Order Items */}
      <Card>
        <CardHeader>
          <CardTitle>Order Items</CardTitle>
          <CardDescription>Products included in this order</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="p-3 text-left font-medium">Product</th>
                  <th className="p-3 text-center font-medium">Quantity</th>
                  <th className="p-3 text-right font-medium">Price</th>
                  <th className="p-3 text-right font-medium">Total</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-3">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          SKU: {item.id}
                        </p>
                      </div>
                    </td>
                    <td className="p-3 text-center">{item.quantity}</td>
                    <td className="p-3 text-right">
                      ${item.price.toLocaleString()}
                    </td>
                    <td className="p-3 text-right">
                      ${item.total.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${order.subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span>${order.shipping.cost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tax (10%)</span>
              <span>${order.tax.toLocaleString()}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>${order.total.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Order Actions */}
      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel Order</Button>
        <Button>Update Status</Button>
      </div>
    </div>
  );
}
