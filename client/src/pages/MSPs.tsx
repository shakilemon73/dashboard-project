import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash2, Building } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const msps = [
  { id: 1, name: "TechCorp Solutions", companies: 12, agents: 8, tickets: 234, status: "active" },
  { id: 2, name: "Global IT Services", companies: 8, agents: 5, tickets: 156, status: "active" },
  { id: 3, name: "CloudCare MSP", companies: 15, agents: 12, tickets: 342, status: "active" },
  { id: 4, name: "SecureNet Partners", companies: 6, agents: 4, tickets: 89, status: "inactive" },
  { id: 5, name: "DataStream Services", companies: 10, agents: 7, tickets: 198, status: "active" },
];

export default function MSPs() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold" data-testid="text-page-title">MSPs Management</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage Managed Service Providers with add, edit, and delete functionality
            </p>
          </div>
          <Button data-testid="button-add-msp">
            <Plus className="h-4 w-4 mr-2" />
            Add MSP
          </Button>
        </div>

        <Card className="p-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search MSPs..."
              className="pl-9"
              data-testid="input-search"
            />
          </div>

          <div className="border rounded-md">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left text-sm font-medium p-3">MSP Name</th>
                    <th className="text-left text-sm font-medium p-3">Companies</th>
                    <th className="text-left text-sm font-medium p-3">Agents</th>
                    <th className="text-left text-sm font-medium p-3">Total Tickets</th>
                    <th className="text-left text-sm font-medium p-3">Status</th>
                    <th className="text-left text-sm font-medium p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {msps.map((msp) => (
                    <tr key={msp.id} className="border-t hover-elevate" data-testid={`row-msp-${msp.id}`}>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                            <Building className="h-4 w-4 text-primary" />
                          </div>
                          <span className="font-medium text-sm">{msp.name}</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="text-sm">{msp.companies}</span>
                      </td>
                      <td className="p-3">
                        <span className="text-sm">{msp.agents}</span>
                      </td>
                      <td className="p-3">
                        <span className="text-sm font-medium">{msp.tickets}</span>
                      </td>
                      <td className="p-3">
                        <Badge variant={msp.status === "active" ? "default" : "secondary"}>
                          {msp.status}
                        </Badge>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" data-testid={`button-edit-${msp.id}`}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" data-testid={`button-delete-${msp.id}`}>
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
