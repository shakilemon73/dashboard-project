import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash2, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const assets = [
  { id: 1, name: "Dell Laptop XPS 15", type: "Hardware", serialNumber: "DL-XPS-2024-001", company: "Acme Corp", assignedTo: "Alice Cooper", status: "active" },
  { id: 2, name: "Microsoft Office 365", type: "Software", serialNumber: "MS-O365-ENT-002", company: "Tech Innovations", assignedTo: "Bob Martinez", status: "active" },
  { id: 3, name: "Cisco Router 2900", type: "Network", serialNumber: "CS-R29-2023-003", company: "Digital Solutions", assignedTo: "Carol White", status: "active" },
  { id: 4, name: "iPhone 15 Pro", type: "Mobile", serialNumber: "AP-IP15-2024-004", company: "Enterprise Systems", assignedTo: "Daniel Lee", status: "maintenance" },
  { id: 5, name: "Adobe Creative Cloud", type: "Software", serialNumber: "AD-CC-PRO-005", company: "StartupHub", assignedTo: "Eva Green", status: "active" },
];

export default function Assets() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold" data-testid="text-page-title">Assets Management</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage customer assets, equipment, or products linked to support tickets
            </p>
          </div>
          <Button data-testid="button-add-asset">
            <Plus className="h-4 w-4 mr-2" />
            Add Asset
          </Button>
        </div>

        <Card className="p-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search assets..."
              className="pl-9"
              data-testid="input-search"
            />
          </div>

          <div className="border rounded-md">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left text-sm font-medium p-3">Asset Name</th>
                    <th className="text-left text-sm font-medium p-3">Type</th>
                    <th className="text-left text-sm font-medium p-3">Serial Number</th>
                    <th className="text-left text-sm font-medium p-3">Company</th>
                    <th className="text-left text-sm font-medium p-3">Assigned To</th>
                    <th className="text-left text-sm font-medium p-3">Status</th>
                    <th className="text-left text-sm font-medium p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((asset) => (
                    <tr key={asset.id} className="border-t hover-elevate" data-testid={`row-asset-${asset.id}`}>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                            <Package className="h-4 w-4 text-primary" />
                          </div>
                          <span className="font-medium text-sm">{asset.name}</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <Badge variant="outline">{asset.type}</Badge>
                      </td>
                      <td className="p-3">
                        <span className="text-sm font-mono text-muted-foreground">{asset.serialNumber}</span>
                      </td>
                      <td className="p-3">
                        <span className="text-sm">{asset.company}</span>
                      </td>
                      <td className="p-3">
                        <span className="text-sm">{asset.assignedTo}</span>
                      </td>
                      <td className="p-3">
                        <Badge variant={asset.status === "active" ? "default" : "secondary"}>
                          {asset.status}
                        </Badge>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" data-testid={`button-view-${asset.id}`}>
                            View
                          </Button>
                          <Button variant="ghost" size="sm" data-testid={`button-edit-${asset.id}`}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" data-testid={`button-delete-${asset.id}`}>
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
