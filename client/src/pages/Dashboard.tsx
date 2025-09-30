import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, UserCog, Ticket } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";

const ticketData = [
  { name: "New", value: 227, color: "hsl(var(--chart-1))" },
  { name: "Assigned", value: 180, color: "hsl(var(--chart-4))" },
  { name: "In Progress", value: 250, color: "hsl(var(--chart-4))" },
  { name: "On Hold", value: 85, color: "hsl(var(--chart-5))" },
  { name: "Completed", value: 342, color: "hsl(var(--chart-2))" },
  { name: "Reviewed", value: 95, color: "hsl(var(--chart-2))" },
  { name: "Billed", value: 56, color: "hsl(var(--chart-3))" },
  { name: "Waiting", value: 93, color: "hsl(var(--chart-3))" },
];

const dateFilters = ["Today", "This Week", "This Month", "This Year", "Custom"];

export default function Dashboard() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold" data-testid="text-page-title">Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Monitor your support ticket system with real-time data
            </p>
          </div>
          <div className="flex gap-2">
            {dateFilters.map((filter) => (
              <Button
                key={filter}
                variant={filter === "This Week" ? "default" : "outline"}
                size="sm"
                data-testid={`button-filter-${filter.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="MSPs"
            value={15}
            trend={{ value: 12, isPositive: true }}
            icon={<Building className="h-4 w-4" />}
          />
          <MetricCard
            title="Companies"
            value={87}
            trend={{ value: 5, isPositive: true }}
            icon={<Building className="h-4 w-4" />}
          />
          <MetricCard
            title="Agents"
            value={10}
            icon={<UserCog className="h-4 w-4" />}
          />
          <MetricCard
            title="Users"
            value={12}
            icon={<Users className="h-4 w-4" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Ticket Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <ResponsiveContainer width={280} height={280}>
                    <PieChart>
                      <Pie
                        data={ticketData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={120}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {ticketData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="text-4xl font-bold" data-testid="text-total-tickets">1328</p>
                  </div>
                </div>
                <div className="ml-8 space-y-2">
                  {ticketData.map((item) => (
                    <div key={item.name} className="flex items-center gap-2 text-sm">
                      <div
                        className="h-3 w-3 rounded-sm"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-muted-foreground">{item.name}</span>
                      <span className="ml-auto font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { ticket: "#TK-1234", action: "New ticket created", agent: "John Doe", time: "2 minutes ago" },
                  { ticket: "#TK-1233", action: "Status updated to Completed", agent: "Jane Smith", time: "15 minutes ago" },
                  { ticket: "#TK-1232", action: "Assigned to agent", agent: "Mike Johnson", time: "1 hour ago" },
                  { ticket: "#TK-1231", action: "Customer reply received", agent: "Sarah Williams", time: "2 hours ago" },
                  { ticket: "#TK-1230", action: "SLA deadline approaching", agent: "System", time: "3 hours ago" },
                ].map((activity, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        <span className="font-mono text-primary">{activity.ticket}</span> - {activity.action}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.agent} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>SLA Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { tier: "Priority - 2 Hours", met: 85, atRisk: 10, breached: 5 },
                { tier: "High - 4 Hours", met: 92, atRisk: 5, breached: 3 },
                { tier: "Normal - 8 Hours", met: 95, atRisk: 3, breached: 2 },
                { tier: "Low - 24 Hours", met: 98, atRisk: 1, breached: 1 },
              ].map((sla, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{sla.tier}</span>
                    <span className="text-muted-foreground">{sla.met}% Met</span>
                  </div>
                  <div className="flex h-2 rounded-full overflow-hidden bg-muted">
                    <div
                      className="bg-chart-2"
                      style={{ width: `${sla.met}%` }}
                    />
                    <div
                      className="bg-chart-4"
                      style={{ width: `${sla.atRisk}%` }}
                    />
                    <div
                      className="bg-chart-5"
                      style={{ width: `${sla.breached}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
