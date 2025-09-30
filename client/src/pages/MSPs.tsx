import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Search, Edit, Trash2, Building, Users, Ticket, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";

const msps = [
  { id: 1, name: "TechCorp Solutions", companies: 12, agents: 8, tickets: 234, status: "active" },
  { id: 2, name: "Global IT Services", companies: 8, agents: 5, tickets: 156, status: "active" },
  { id: 3, name: "CloudCare MSP", companies: 15, agents: 12, tickets: 342, status: "active" },
  { id: 4, name: "SecureNet Partners", companies: 6, agents: 4, tickets: 89, status: "inactive" },
  { id: 5, name: "DataStream Services", companies: 10, agents: 7, tickets: 198, status: "active" },
];

export default function MSPs() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex-1 overflow-auto" role="main" aria-label="MSPs management page">
      <div className="p-6 md:p-8 space-y-8">
        {/* Header Section - Visual Hierarchy */}
        <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h1 
              className="text-3xl font-bold tracking-tight" 
              data-testid="text-page-title"
              id="page-title"
            >
              MSPs Management
            </h1>
            <p 
              className="text-base text-muted-foreground max-w-2xl"
              id="page-description"
            >
              Manage Managed Service Providers with add, edit, and delete functionality
            </p>
          </div>
          <Button 
            data-testid="button-add-msp"
            className="min-h-11 shrink-0 transition-all duration-200"
            aria-label="Add new MSP"
          >
            <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
            Add MSP
          </Button>
        </header>

        {/* Search Section - Clear Form Guidance */}
        <Card className="p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="msp-search" className="text-sm font-medium">
                Search MSPs
              </Label>
              <div className="relative">
                <Search 
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" 
                  aria-hidden="true"
                />
                <Input
                  id="msp-search"
                  placeholder="Search by MSP name or status..."
                  className="pl-10 min-h-11 transition-all duration-200 focus:ring-2"
                  data-testid="input-search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search MSPs by name or status"
                  aria-describedby="search-hint"
                />
              </div>
              <p id="search-hint" className="text-xs text-muted-foreground sr-only">
                Type to filter managed service providers by name or status
              </p>
            </div>
          </div>
        </Card>

        {/* Table Section - Consistent and Accessible */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table 
              className="w-full" 
              role="table"
              aria-label="MSPs table"
              aria-describedby="page-description"
            >
              <thead>
                <tr className="border-b bg-muted/50">
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[220px]">
                    MSP Name
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[120px]">
                    Companies
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[120px]">
                    Agents
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[140px]">
                    Total Tickets
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[120px]">
                    Status
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[180px]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {msps.map((msp) => (
                  <tr 
                    key={msp.id} 
                    className="border-b last:border-0 hover-elevate transition-all duration-200 focus-within:bg-muted/30" 
                    data-testid={`row-msp-${msp.id}`}
                    tabIndex={0}
                    role="row"
                    aria-label={`MSP ${msp.name}`}
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 transition-transform duration-200 hover:scale-105">
                          <AvatarFallback className="bg-primary/10 text-primary">
                            <Building className="h-5 w-5" aria-hidden="true" />
                          </AvatarFallback>
                        </Avatar>
                        <span 
                          className="font-semibold text-sm"
                          data-testid={`text-name-${msp.id}`}
                        >
                          {msp.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                        <span 
                          className="text-sm font-medium"
                          aria-label={`${msp.companies} companies`}
                          data-testid={`text-companies-${msp.id}`}
                        >
                          {msp.companies}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                        <span 
                          className="text-sm font-medium"
                          aria-label={`${msp.agents} agents`}
                          data-testid={`text-agents-${msp.id}`}
                        >
                          {msp.agents}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Ticket className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                        <span 
                          className="text-sm font-bold"
                          aria-label={`${msp.tickets} tickets`}
                          data-testid={`text-tickets-${msp.id}`}
                        >
                          {msp.tickets}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge 
                        variant={msp.status === "active" ? "default" : "outline"}
                        className={`transition-all duration-200 ${
                          msp.status === "active" 
                            ? "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20" 
                            : "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20"
                        }`}
                        aria-label={`Status: ${msp.status}`}
                        data-testid={`badge-status-${msp.id}`}
                      >
                        {msp.status.charAt(0).toUpperCase() + msp.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2" role="group" aria-label="MSP actions">
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="min-h-11 min-w-11 transition-all duration-200"
                          data-testid={`button-edit-${msp.id}`}
                          aria-label={`Edit ${msp.name}`}
                        >
                          <Edit className="h-4 w-4" aria-hidden="true" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="min-h-11 min-w-11 transition-all duration-200 hover:text-destructive"
                          data-testid={`button-delete-${msp.id}`}
                          aria-label={`Delete ${msp.name}`}
                        >
                          <Trash2 className="h-4 w-4" aria-hidden="true" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State - Clear Feedback */}
          {msps.length === 0 && (
            <div className="p-12 text-center space-y-3" role="status">
              <Building className="h-12 w-12 mx-auto text-muted-foreground opacity-50" aria-hidden="true" />
              <p className="text-lg font-medium text-muted-foreground">No MSPs found</p>
              <p className="text-sm text-muted-foreground">Try adjusting your search or add a new MSP to get started</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
