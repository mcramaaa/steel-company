export interface MarketingTeamMember {
  id: string
  name: string
  position: string
  email: string
  phone: string
  region?: string
}

// Mock data
const marketingTeam: MarketingTeamMember[] = [
  {
    id: "mem-001",
    name: "Budi Santoso",
    position: "Marketing Manager",
    email: "budi.santoso@bajakita.com",
    phone: "+62 812 3456 7890",
    region: "Jakarta",
  },
  {
    id: "mem-002",
    name: "Mike Chen",
    position: "Sales Representative",
    email: "mike.chen@bajakita.com",
    phone: "+62 813 4567 8901",
    region: "West Java",
  },
  {
    id: "mem-003",
    name: "Sarah Johnson",
    position: "Sales Representative",
    email: "sarah.johnson@bajakita.com",
    phone: "+62 814 5678 9012",
    region: "East Java",
  },
]

export async function getMarketingTeam(): Promise<MarketingTeamMember[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return marketingTeam
}

