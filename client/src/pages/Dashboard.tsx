import { useState } from "react";
import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, UserCog, Ticket } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

const activities = [
  { ticket: "#TK-1234", action: "New ticket created", agent: "John Doe", time: "2 minutes ago" },
  { ticket: "#TK-1233", action: "Status updated to Completed", agent: "Jane Smith", time: "15 minutes ago" },
  { ticket: "#TK-1232", action: "Assigned to agent", agent: "Mike Johnson", time: "1 hour ago" },
  { ticket: "#TK-1231", action: "Customer reply received", agent: "Sarah Williams", time: "2 hours ago" },
  { ticket: "#TK-1230", action: "SLA deadline approaching", agent: "System", time: "3 hours ago" },
];

const slaData = [
  { tier: "Priority - 2 Hours", met: 85, atRisk: 10, breached: 5 },
  { tier: "High - 4 Hours", met: 92, atRisk: 5, breached: 3 },
  { tier: "Normal - 8 Hours", met: 95, atRisk: 3, breached: 2 },
  { tier: "Low - 24 Hours", met: 98, atRisk: 1, breached: 1 },
];

export default function Dashboard() {
  const [activeFilter, setActiveFilter] = useState("This Week");

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-8">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-1">
            <h1 
              className="text-3xl font-semibold tracking-tight" 
              data-testid="text-page-title"
              id="dashboard-title"
            >
              Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Monitor your support system
            </p>
          </div>
          <nav 
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Date filter"
          >
            {dateFilters.map((filter) => (
              <Button
                key={filter}
                variant={filter === activeFilter ? "default" : "outline"}
                className="min-h-11 transition-all duration-200"
                onClick={() => setActiveFilter(filter)}
                role="tab"
                aria-selected={filter === activeFilter}
                aria-label={`Filter by ${filter}`}
                data-testid={`button-filter-${filter.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {filter}
              </Button>
            ))}
          </nav>
        </header>

        <section 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          aria-label="Key metrics"
        >
          <MetricCard
            title="MSPs"
            value={15}
            trend={{ value: 12, isPositive: true }}
            icon={<Building className="h-4 w-4" />}
            description="Managed Service Providers"
          />
          <MetricCard
            title="Companies"
            value={87}
            trend={{ value: 5, isPositive: true }}
            icon={<Building className="h-4 w-4" />}
            description="Active client companies"
          />
          <MetricCard
            title="Agents"
            value={10}
            icon={<UserCog className="h-4 w-4" />}
            description="Support agents available"
          />
          <MetricCard
            title="Users"
            value={12}
            icon={<Users className="h-4 w-4" />}
            description="Total system users"
          />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="transition-all duration-200">
            <CardHeader className="space-y-1">
              <CardTitle>Ticket Analysis</CardTitle>
              <p className="text-sm text-muted-foreground">
                Current status distribution
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                <div className="relative" role="img" aria-label="Ticket status distribution chart">
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
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p 
                      className="text-4xl font-bold tabular-nums" 
                      data-testid="text-total-tickets"
                      aria-label="Total tickets: 1328"
                    >
                      1328
                    </p>
                  </div>
                </div>
                <div 
                  className="space-y-3 w-full lg:w-auto"
                  role="list"
                  aria-label="Ticket status breakdown"
                >
                  {ticketData.map((item) => (
                    <div 
                      key={item.name} 
                      className="flex items-center gap-3 text-sm min-h-8 hover-elevate rounded-md px-2 py-1 transition-all duration-200"
                      role="listitem"
                    >
                      <div
                        className="h-3 w-3 rounded-sm shrink-0 transition-transform duration-200 hover:scale-110"
                        style={{ backgroundColor: item.color }}
                        aria-hidden="true"
                      />
                      <span className="text-muted-foreground min-w-[100px]">{item.name}</span>
                      <span className="ml-auto font-medium tabular-nums">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-200">
            <CardHeader className="space-y-1">
              <CardTitle>Recent Activity</CardTitle>
              <p className="text-sm text-muted-foreground">
                Latest ticket updates
              </p>
            </CardHeader>
            <CardContent>
              <div 
                className="space-y-1"
                role="feed"
                aria-label="Recent activity feed"
              >
                {activities.map((activity, index) => (
                  <button
                    key={index}
                    className="w-full flex gap-4 items-start p-3 rounded-md hover-elevate active-elevate-2 transition-all duration-200 text-left min-h-11"
                    onClick={() => {}}
                    aria-label={`${activity.ticket}: ${activity.action} by ${activity.agent}, ${activity.time}`}
                    data-testid={`button-activity-${index}`}
                  >
                    <div 
                      className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0 transition-transform duration-200 group-hover:scale-125" 
                      aria-hidden="true"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        <span className="font-mono text-primary">{activity.ticket}</span>
                        {" - "}
                        {activity.action}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.agent} • {activity.time}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="transition-all duration-200">
          <CardHeader className="space-y-1">
            <CardTitle>SLA Performance</CardTitle>
            <p className="text-sm text-muted-foreground">
              Service level agreement metrics
            </p>
          </CardHeader>
          <CardContent>
            <div 
              className="space-y-6"
              role="list"
              aria-label="SLA performance by tier"
            >
              {slaData.map((sla, index) => (
                <div 
                  key={index} 
                  className="space-y-2"
                  role="listitem"
                >
                  <div className="flex items-center justify-between text-sm gap-4">
                    <span className="font-medium">{sla.tier}</span>
                    <span 
                      className={cn(
                        "text-muted-foreground tabular-nums",
                        sla.met >= 95 && "text-chart-2 font-medium"
                      )}
                      aria-label={`${sla.met}% of SLA targets met`}
                    >
                      {sla.met}% Met
                    </span>
                  </div>
                  <div 
                    className="flex h-2 rounded-full overflow-hidden bg-muted transition-all duration-300"
                    role="progressbar"
                    aria-label={`SLA ${sla.tier}: ${sla.met}% met, ${sla.atRisk}% at risk, ${sla.breached}% breached`}
                    aria-valuenow={sla.met}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="bg-chart-2 transition-all duration-500 hover:opacity-80"
                      style={{ width: `${sla.met}%` }}
                      aria-label="Met"
                    />
                    <div
                      className="bg-chart-4 transition-all duration-500 hover:opacity-80"
                      style={{ width: `${sla.atRisk}%` }}
                      aria-label="At risk"
                    />
                    <div
                      className="bg-chart-5 transition-all duration-500 hover:opacity-80"
                      style={{ width: `${sla.breached}%` }}
                      aria-label="Breached"
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
