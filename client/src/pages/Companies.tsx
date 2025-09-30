import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Search, Edit, Trash2, Building2, Users, Ticket, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";

const companies = [
  { id: 1, name: "Acme Corporation", msp: "TechCorp Solutions", contacts: 8, tickets: 45, status: "active" },
  { id: 2, name: "Tech Innovations Ltd", msp: "Global IT Services", contacts: 12, tickets: 67, status: "active" },
  { id: 3, name: "Digital Solutions Inc", msp: "CloudCare MSP", contacts: 5, tickets: 23, status: "active" },
  { id: 4, name: "Enterprise Systems", msp: "TechCorp Solutions", contacts: 15, tickets: 89, status: "active" },
  { id: 5, name: "StartupHub Co", msp: "DataStream Services", contacts: 3, tickets: 12, status: "inactive" },
  { id: 6, name: "FinTech Partners", msp: "SecureNet Partners", contacts: 10, tickets: 34, status: "active" },
];

export default function Companies() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex-1 overflow-auto" role="main" aria-label="Companies management page">
      <div className="p-6 md:p-8 space-y-8">
        {/* Header Section - Visual Hierarchy with Clear Labels */}
        <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h1 
              className="text-3xl font-bold tracking-tight" 
              data-testid="text-page-title"
              id="page-title"
            >
              Companies Management
            </h1>
            <p 
              className="text-base text-muted-foreground max-w-2xl" 
              id="page-description"
            >
              Manage customer organizations with hierarchical structure, MSP assignments, and contact relationships
            </p>
          </div>
          <Button 
            data-testid="button-add-company"
            className="min-h-11 shrink-0 transition-all duration-200"
            aria-label="Add new company"
          >
            <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
            Add Company
          </Button>
        </header>

        {/* Search Section - Clear Labels and Form Guidance */}
        <Card className="p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company-search" className="text-sm font-medium">
                Search Companies
              </Label>
              <div className="relative">
                <Search 
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" 
                  aria-hidden="true"
                />
                <Input
                  id="company-search"
                  placeholder="Search by company name or MSP provider..."
                  className="pl-10 min-h-11 transition-all duration-200 focus:ring-2"
                  data-testid="input-search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search companies by name or MSP provider"
                  aria-describedby="search-hint"
                />
              </div>
              <p id="search-hint" className="text-xs text-muted-foreground sr-only">
                Type to filter companies by name or managed service provider
              </p>
            </div>
          </div>
        </Card>

        {/* Table Section - Accessible and Touch-Friendly */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table 
              className="w-full" 
              role="table"
              aria-label="Companies table"
              aria-describedby="page-description"
            >
              <thead>
                <tr className="border-b bg-muted/50">
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[250px]">
                    Company
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[200px]">
                    MSP Provider
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[120px]">
                    Contacts
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[120px]">
                    Tickets
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[120px]">
                    Status
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[220px]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company) => (
                  <tr 
                    key={company.id} 
                    className="border-b last:border-0 hover-elevate transition-all duration-200 focus-within:bg-muted/30" 
                    data-testid={`row-company-${company.id}`}
                    tabIndex={0}
                    role="row"
                    aria-label={`Company ${company.name}`}
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 transition-transform duration-200 hover:scale-105">
                          <AvatarFallback className="text-sm font-medium bg-primary/10 text-primary">
                            <Building2 className="h-5 w-5" aria-hidden="true" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span 
                            className="font-semibold text-sm" 
                            data-testid={`text-name-${company.id}`}
                          >
                            {company.name}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span 
                        className="text-sm text-muted-foreground"
                        data-testid={`text-msp-${company.id}`}
                      >
                        {company.msp}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                        <span 
                          className="text-sm font-medium"
                          aria-label={`${company.contacts} contacts`}
                          data-testid={`text-contacts-${company.id}`}
                        >
                          {company.contacts}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Ticket className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                        <span 
                          className="text-sm font-medium"
                          aria-label={`${company.tickets} tickets`}
                          data-testid={`text-tickets-${company.id}`}
                        >
                          {company.tickets}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge 
                        variant={company.status === "active" ? "default" : "outline"}
                        className={`transition-all duration-200 ${
                          company.status === "active" 
                            ? "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20" 
                            : "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20"
                        }`}
                        aria-label={`Status: ${company.status}`}
                        data-testid={`badge-status-${company.id}`}
                      >
                        {company.status.charAt(0).toUpperCase() + company.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2" role="group" aria-label="Company actions">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="min-h-11 transition-all duration-200"
                          data-testid={`button-view-${company.id}`}
                          aria-label={`View details for ${company.name}`}
                        >
                          <Eye className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span className="hidden sm:inline">View</span>
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="min-h-11 min-w-11 transition-all duration-200"
                          data-testid={`button-edit-${company.id}`}
                          aria-label={`Edit ${company.name}`}
                        >
                          <Edit className="h-4 w-4" aria-hidden="true" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="min-h-11 min-w-11 transition-all duration-200 text-destructive hover:text-destructive"
                          data-testid={`button-delete-${company.id}`}
                          aria-label={`Delete ${company.name}`}
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
          {companies.length === 0 && (
            <div className="p-12 text-center space-y-3" role="status">
              <Building2 className="h-12 w-12 mx-auto text-muted-foreground opacity-50" aria-hidden="true" />
              <p className="text-lg font-medium text-muted-foreground">No companies found</p>
              <p className="text-sm text-muted-foreground">Try adjusting your search or add a new company to get started</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
