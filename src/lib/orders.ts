export interface Order {
  id: string
  product: string
  customer: string
  status: "Completed" | "Pending" | "Processing"
  amount: number
  date: string
}

// Mock data
const orders: Order[] = [
  {
    id: "#ORD-001",
    product: "Steel Beam H300",
    customer: "John Construction Co.",
    status: "Completed",
    amount: 12350,
    date: "2023-03-15",
  },
  {
    id: "#ORD-002",
    product: "Steel Plates",
    customer: "BuildPro Industries",
    status: "Pending",
    amount: 8420,
    date: "2023-03-18",
  },
  {
    id: "#ORD-003",
    product: "Steel Pipes",
    customer: "MetalWorks Ltd",
    status: "Processing",
    amount: 5890,
    date: "2023-03-20",
  },
]

export async function getRecentOrders(): Promise<Order[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return orders
}

