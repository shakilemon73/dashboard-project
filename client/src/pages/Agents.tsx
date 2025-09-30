import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash2, Mail, Star, CheckCircle2, Activity } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const agents = [
  { id: 1, name: "Sarah Williams", email: "sarah.w@company.com", role: "Senior Agent", tickets: 45, resolved: 42, rating: 4.8, status: "online" },
  { id: 2, name: "John Doe", email: "john.d@company.com", role: "Agent", tickets: 38, resolved: 35, rating: 4.6, status: "online" },
  { id: 3, name: "Jane Smith", email: "jane.s@company.com", role: "Senior Agent", tickets: 52, resolved: 48, rating: 4.9, status: "away" },
  { id: 4, name: "Mike Johnson", email: "mike.j@company.com", role: "Agent", tickets: 29, resolved: 26, rating: 4.5, status: "online" },
  { id: 5, name: "Emily Davis", email: "emily.d@company.com", role: "Team Lead", tickets: 34, resolved: 32, rating: 4.7, status: "offline" },
];

const getStatusConfig = (status: string) => {
  switch (status) {
    case "online":
      return { 
        color: "bg-green-500", 
        label: "Online", 
        ariaLabel: "Status: Online and available"
      };
    case "away":
      return { 
        color: "bg-yellow-500", 
        label: "Away", 
        ariaLabel: "Status: Away from desk"
      };
    case "offline":
      return { 
        color: "bg-gray-400", 
        label: "Offline", 
        ariaLabel: "Status: Offline"
      };
    default:
      return { 
        color: "bg-gray-400", 
        label: "Unknown", 
        ariaLabel: "Status: Unknown"
      };
  }
};

export default function Agents() {
  return (
    <div className="flex-1 overflow-auto" role="main" aria-label="Agents management page">
      <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
        {/* Header Section - Consistent spacing with 8px grid */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <h1 
              className="text-2xl sm:text-3xl font-semibold tracking-tight" 
              data-testid="text-page-title"
            >
              Agents Management
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Manage support agents with profiles, performance metrics, and assignment settings
            </p>
          </div>
          <Button 
            className="min-h-11 transition-all duration-200"
            data-testid="button-add-agent"
            aria-label="Add new agent"
          >
            <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
            Add Agent
          </Button>
        </header>

        <Separator className="my-6" />

        {/* Main Content Section */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Search Section - Touch-friendly with min-h-11 */}
          <div className="relative" role="search">
            <Search 
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" 
              aria-hidden="true"
            />
            <Input
              placeholder="Search agents by name or email..."
              className="pl-10 min-h-11 transition-all duration-200 focus:ring-2"
              data-testid="input-search"
              aria-label="Search agents"
            />
          </div>

          {/* Agents List - Semantic structure with proper ARIA */}
          <div 
            className="grid gap-4" 
            role="list" 
            aria-label="List of agents"
          >
            {agents.map((agent, index) => {
              const statusConfig = getStatusConfig(agent.status);
              
              return (
                <Card 
                  key={agent.id} 
                  className="p-4 sm:p-6 hover-elevate transition-all duration-200 focus-within:ring-2 focus-within:ring-primary" 
                  data-testid={`card-agent-${agent.id}`}
                  role="listitem"
                  aria-label={`Agent: ${agent.name}, ${agent.role}`}
                  tabIndex={0}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                    {/* Avatar with Status Indicator */}
                    <div className="relative flex-shrink-0">
                      <Avatar className="h-14 w-14 sm:h-16 sm:w-16 transition-transform duration-200 hover:scale-105">
                        <AvatarFallback className="text-lg font-medium">
                          {agent.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-background ${statusConfig.color} transition-all duration-200`}
                        role="status"
                        aria-label={statusConfig.ariaLabel}
                        title={statusConfig.label}
                      />
                    </div>

                    {/* Agent Info - Recognition over recall with clear labels */}
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 flex-wrap">
                        <h2 className="font-semibold text-lg truncate" data-testid={`text-name-${agent.id}`}>
                          {agent.name}
                        </h2>
                        <Badge 
                          variant="secondary" 
                          className="text-xs self-start transition-all duration-200"
                          aria-label={`Role: ${agent.role}`}
                        >
                          {agent.role}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className="text-xs self-start transition-all duration-200"
                          aria-label={statusConfig.ariaLabel}
                        >
                          <Activity className="h-3 w-3 mr-1" aria-hidden="true" />
                          {statusConfig.label}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                        <span className="truncate" data-testid={`text-email-${agent.id}`}>{agent.email}</span>
                      </div>
                    </div>

                    {/* Performance Metrics - Clear visual hierarchy */}
                    <div 
                      className="grid grid-cols-3 gap-4 sm:gap-6 py-4 lg:py-0" 
                      role="group" 
                      aria-label="Performance metrics"
                    >
                      <div className="text-center space-y-1 transition-transform duration-200 hover:scale-105">
                        <div className="flex items-center justify-center gap-1">
                          <Activity className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                        </div>
                        <p 
                          className="text-xl sm:text-2xl font-bold" 
                          data-testid={`text-tickets-${agent.id}`}
                        >
                          {agent.tickets}
                        </p>
                        <p className="text-xs text-muted-foreground font-medium">Active</p>
                      </div>
                      <div className="text-center space-y-1 transition-transform duration-200 hover:scale-105">
                        <div className="flex items-center justify-center gap-1">
                          <CheckCircle2 className="h-4 w-4 text-chart-2" aria-hidden="true" />
                        </div>
                        <p 
                          className="text-xl sm:text-2xl font-bold text-chart-2" 
                          data-testid={`text-resolved-${agent.id}`}
                        >
                          {agent.resolved}
                        </p>
                        <p className="text-xs text-muted-foreground font-medium">Resolved</p>
                      </div>
                      <div className="text-center space-y-1 transition-transform duration-200 hover:scale-105">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" aria-hidden="true" />
                        </div>
                        <p 
                          className="text-xl sm:text-2xl font-bold" 
                          data-testid={`text-rating-${agent.id}`}
                        >
                          {agent.rating}
                        </p>
                        <p className="text-xs text-muted-foreground font-medium">Rating</p>
                      </div>
                    </div>

                    {/* Action Buttons - Touch-friendly with clear affordances */}
                    <div 
                      className="flex gap-2 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l lg:pl-6" 
                      role="group" 
                      aria-label="Agent actions"
                    >
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="min-h-11 min-w-11 transition-all duration-200"
                        data-testid={`button-edit-${agent.id}`}
                        aria-label={`Edit ${agent.name}`}
                      >
                        <Edit className="h-4 w-4" aria-hidden="true" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="min-h-11 min-w-11 transition-all duration-200 hover:text-destructive"
                        data-testid={`button-delete-${agent.id}`}
                        aria-label={`Delete ${agent.name}`}
                      >
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Empty State - Would be shown when no results */}
          {agents.length === 0 && (
            <div className="text-center py-12 space-y-3" role="status">
              <p className="text-lg font-medium text-muted-foreground">No agents found</p>
              <p className="text-sm text-muted-foreground">Try adjusting your search or add a new agent</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
