import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"
import { getMarketingTeam } from "@/lib/marketing"

export default async function MarketingTeamSection() {
  const team = await getMarketingTeam()

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Marketing Team</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {team.slice(0, 3).map((member) => (
          <Card key={member.id}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-gray-500" />
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
  )
}

