import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash2, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const companies = [
  { id: 1, name: "Acme Corporation", msp: "TechCorp Solutions", contacts: 8, tickets: 45, status: "active" },
  { id: 2, name: "Tech Innovations Ltd", msp: "Global IT Services", contacts: 12, tickets: 67, status: "active" },
  { id: 3, name: "Digital Solutions Inc", msp: "CloudCare MSP", contacts: 5, tickets: 23, status: "active" },
  { id: 4, name: "Enterprise Systems", msp: "TechCorp Solutions", contacts: 15, tickets: 89, status: "active" },
  { id: 5, name: "StartupHub Co", msp: "DataStream Services", contacts: 3, tickets: 12, status: "inactive" },
  { id: 6, name: "FinTech Partners", msp: "SecureNet Partners", contacts: 10, tickets: 34, status: "active" },
];

export default function Companies() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold" data-testid="text-page-title">Companies</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage customer organizations with hierarchical structure and assigned contacts
            </p>
          </div>
          <Button data-testid="button-add-company">
            <Plus className="h-4 w-4 mr-2" />
            Add Company
          </Button>
        </div>

        <Card className="p-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search companies..."
              className="pl-9"
              data-testid="input-search"
            />
          </div>

          <div className="border rounded-md">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left text-sm font-medium p-3">Company Name</th>
                    <th className="text-left text-sm font-medium p-3">MSP</th>
                    <th className="text-left text-sm font-medium p-3">Contacts</th>
                    <th className="text-left text-sm font-medium p-3">Tickets</th>
                    <th className="text-left text-sm font-medium p-3">Status</th>
                    <th className="text-left text-sm font-medium p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((company) => (
                    <tr key={company.id} className="border-t hover-elevate" data-testid={`row-company-${company.id}`}>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                            <Building2 className="h-4 w-4 text-primary" />
                          </div>
                          <span className="font-medium text-sm">{company.name}</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="text-sm text-muted-foreground">{company.msp}</span>
                      </td>
                      <td className="p-3">
                        <span className="text-sm">{company.contacts}</span>
                      </td>
                      <td className="p-3">
                        <span className="text-sm font-medium">{company.tickets}</span>
                      </td>
                      <td className="p-3">
                        <Badge variant={company.status === "active" ? "default" : "secondary"}>
                          {company.status}
                        </Badge>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" data-testid={`button-view-${company.id}`}>
                            View
                          </Button>
                          <Button variant="ghost" size="sm" data-testid={`button-edit-${company.id}`}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" data-testid={`button-delete-${company.id}`}>
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
