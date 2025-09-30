import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const users = [
  { id: 1, name: "Robert Johnson", email: "robert.j@email.com", company: "Acme Corp", tickets: 12, lastActive: "2 hours ago", status: "active" },
  { id: 2, name: "Lisa Anderson", email: "lisa.a@email.com", company: "Tech Innovations", tickets: 8, lastActive: "1 day ago", status: "active" },
  { id: 3, name: "David Wilson", email: "david.w@email.com", company: "Digital Solutions", tickets: 15, lastActive: "3 hours ago", status: "active" },
  { id: 4, name: "Emma Thompson", email: "emma.t@email.com", company: "Enterprise Systems", tickets: 5, lastActive: "1 week ago", status: "inactive" },
  { id: 5, name: "James Brown", email: "james.b@email.com", company: "StartupHub", tickets: 20, lastActive: "30 min ago", status: "active" },
];

export default function Users() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 md:p-8 space-y-8">
        {/* Header Section - Visual Hierarchy */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h1 
              className="text-3xl font-bold tracking-tight" 
              data-testid="text-page-title"
              id="page-title"
            >
              Users Management
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl" id="page-description">
              Manage end-users and customers with contact information and ticket history
            </p>
          </div>
          <Button 
            data-testid="button-add-user"
            className="min-h-11 shrink-0"
            aria-label="Add new user"
          >
            <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
            Add User
          </Button>
        </div>

        {/* Search Section - Form Simplicity */}
        <Card className="p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="user-search" className="text-sm font-medium">
                Search Users
              </Label>
              <div className="relative">
                <Search 
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" 
                  aria-hidden="true"
                />
                <Input
                  id="user-search"
                  placeholder="Search by name, email, or company..."
                  className="pl-10 min-h-11"
                  data-testid="input-search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search users by name, email, or company"
                  aria-describedby="search-hint"
                />
              </div>
              <p id="search-hint" className="text-xs text-muted-foreground sr-only">
                Type to filter users by name, email address, or company name
              </p>
            </div>
          </div>
        </Card>

        {/* Table Section - Responsive & Accessible */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table 
              className="w-full" 
              role="table"
              aria-label="Users table"
              aria-describedby="page-description"
            >
              <thead>
                <tr className="border-b bg-muted/50">
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[200px]">
                    User
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[200px]">
                    Email
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[150px]">
                    Company
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[100px]">
                    Tickets
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[120px]">
                    Last Active
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[100px]">
                    Status
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[200px]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr 
                    key={user.id} 
                    className="border-b last:border-0 hover-elevate transition-all duration-200 focus-within:bg-muted/30" 
                    data-testid={`row-user-${user.id}`}
                    tabIndex={0}
                    role="row"
                    aria-label={`User ${user.name}`}
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 transition-transform duration-200 hover:scale-105">
                          <AvatarFallback className="text-sm font-medium">
                            {user.name.split(" ").map((n) => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-semibold text-sm">{user.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-muted-foreground">{user.email}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-medium">{user.company}</span>
                    </td>
                    <td className="p-4">
                      <span 
                        className="inline-flex items-center justify-center min-w-[2rem] text-sm font-bold"
                        aria-label={`${user.tickets} tickets`}
                      >
                        {user.tickets}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {user.lastActive}
                      </span>
                    </td>
                    <td className="p-4">
                      <Badge 
                        variant={user.status === "active" ? "default" : "outline"}
                        className={`transition-all duration-200 ${
                          user.status === "active" 
                            ? "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20" 
                            : "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20"
                        }`}
                        aria-label={`Status: ${user.status}`}
                      >
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="min-h-11"
                          data-testid={`button-view-${user.id}`}
                          aria-label={`View details for ${user.name}`}
                        >
                          <Eye className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span className="hidden sm:inline">View</span>
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="min-h-11 min-w-11"
                          data-testid={`button-edit-${user.id}`}
                          aria-label={`Edit ${user.name}`}
                        >
                          <Edit className="h-4 w-4" aria-hidden="true" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="min-h-11 min-w-11 text-destructive hover:text-destructive"
                          data-testid={`button-delete-${user.id}`}
                          aria-label={`Delete ${user.name}`}
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
          
          {/* Empty State - Psychology */}
          {users.length === 0 && (
            <div className="p-12 text-center">
              <p className="text-muted-foreground">No users found</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
