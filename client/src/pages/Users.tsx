import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const users = [
  { id: 1, name: "Robert Johnson", email: "robert.j@email.com", company: "Acme Corp", tickets: 12, lastActive: "2 hours ago", status: "active" },
  { id: 2, name: "Lisa Anderson", email: "lisa.a@email.com", company: "Tech Innovations", tickets: 8, lastActive: "1 day ago", status: "active" },
  { id: 3, name: "David Wilson", email: "david.w@email.com", company: "Digital Solutions", tickets: 15, lastActive: "3 hours ago", status: "active" },
  { id: 4, name: "Emma Thompson", email: "emma.t@email.com", company: "Enterprise Systems", tickets: 5, lastActive: "1 week ago", status: "inactive" },
  { id: 5, name: "James Brown", email: "james.b@email.com", company: "StartupHub", tickets: 20, lastActive: "30 min ago", status: "active" },
];

export default function Users() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold" data-testid="text-page-title">Users Management</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage end-users/customers with contact information and ticket history
            </p>
          </div>
          <Button data-testid="button-add-user">
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>

        <Card className="p-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              className="pl-9"
              data-testid="input-search"
            />
          </div>

          <div className="border rounded-md">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left text-sm font-medium p-3">User</th>
                    <th className="text-left text-sm font-medium p-3">Email</th>
                    <th className="text-left text-sm font-medium p-3">Company</th>
                    <th className="text-left text-sm font-medium p-3">Tickets</th>
                    <th className="text-left text-sm font-medium p-3">Last Active</th>
                    <th className="text-left text-sm font-medium p-3">Status</th>
                    <th className="text-left text-sm font-medium p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-t hover-elevate" data-testid={`row-user-${user.id}`}>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="text-xs">
                              {user.name.split(" ").map((n) => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium text-sm">{user.name}</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="text-sm text-muted-foreground">{user.email}</span>
                      </td>
                      <td className="p-3">
                        <span className="text-sm">{user.company}</span>
                      </td>
                      <td className="p-3">
                        <span className="text-sm font-medium">{user.tickets}</span>
                      </td>
                      <td className="p-3">
                        <span className="text-sm text-muted-foreground">{user.lastActive}</span>
                      </td>
                      <td className="p-3">
                        <Badge variant={user.status === "active" ? "default" : "secondary"}>
                          {user.status}
                        </Badge>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" data-testid={`button-view-${user.id}`}>
                            View
                          </Button>
                          <Button variant="ghost" size="sm" data-testid={`button-edit-${user.id}`}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" data-testid={`button-delete-${user.id}`}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
