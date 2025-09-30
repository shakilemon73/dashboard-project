import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const agents = [
  { id: 1, name: "Sarah Williams", email: "sarah.w@company.com", role: "Senior Agent", tickets: 45, resolved: 42, rating: 4.8, status: "online" },
  { id: 2, name: "John Doe", email: "john.d@company.com", role: "Agent", tickets: 38, resolved: 35, rating: 4.6, status: "online" },
  { id: 3, name: "Jane Smith", email: "jane.s@company.com", role: "Senior Agent", tickets: 52, resolved: 48, rating: 4.9, status: "away" },
  { id: 4, name: "Mike Johnson", email: "mike.j@company.com", role: "Agent", tickets: 29, resolved: 26, rating: 4.5, status: "online" },
  { id: 5, name: "Emily Davis", email: "emily.d@company.com", role: "Team Lead", tickets: 34, resolved: 32, rating: 4.7, status: "offline" },
];

export default function Agents() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold" data-testid="text-page-title">Agents Management</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage support agents with profiles, performance metrics, and assignment settings
            </p>
          </div>
          <Button data-testid="button-add-agent">
            <Plus className="h-4 w-4 mr-2" />
            Add Agent
          </Button>
        </div>

        <Card className="p-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search agents..."
              className="pl-9"
              data-testid="input-search"
            />
          </div>

          <div className="grid gap-4">
            {agents.map((agent) => (
              <Card key={agent.id} className="p-4 hover-elevate" data-testid={`card-agent-${agent.id}`}>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>
                        {agent.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-background ${
                        agent.status === "online"
                          ? "bg-green-500"
                          : agent.status === "away"
                          ? "bg-yellow-500"
                          : "bg-gray-400"
                      }`}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{agent.name}</h3>
                      <Badge variant="secondary" className="text-xs">{agent.role}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{agent.email}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-2xl font-bold">{agent.tickets}</p>
                      <p className="text-xs text-muted-foreground">Active</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-chart-2">{agent.resolved}</p>
                      <p className="text-xs text-muted-foreground">Resolved</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{agent.rating}</p>
                      <p className="text-xs text-muted-foreground">Rating</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" data-testid={`button-edit-${agent.id}`}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" data-testid={`button-delete-${agent.id}`}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
