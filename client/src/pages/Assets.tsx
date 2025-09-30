import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Package, 
  Laptop, 
  Smartphone, 
  Monitor, 
  Server, 
  HardDrive,
  Wrench,
  CheckCircle2,
  Eye
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";

const assets = [
  { id: 1, name: "Dell Laptop XPS 15", type: "Hardware", serialNumber: "DL-XPS-2024-001", company: "Acme Corp", assignedTo: "Alice Cooper", status: "active", category: "laptop" },
  { id: 2, name: "Microsoft Office 365", type: "Software", serialNumber: "MS-O365-ENT-002", company: "Tech Innovations", assignedTo: "Bob Martinez", status: "active", category: "software" },
  { id: 3, name: "Cisco Router 2900", type: "Network", serialNumber: "CS-R29-2023-003", company: "Digital Solutions", assignedTo: "Carol White", status: "active", category: "network" },
  { id: 4, name: "iPhone 15 Pro", type: "Mobile", serialNumber: "AP-IP15-2024-004", company: "Enterprise Systems", assignedTo: "Daniel Lee", status: "maintenance", category: "mobile" },
  { id: 5, name: "Adobe Creative Cloud", type: "Software", serialNumber: "AD-CC-PRO-005", company: "StartupHub", assignedTo: "Eva Green", status: "active", category: "software" },
];

const getAssetIcon = (category: string) => {
  switch (category) {
    case "laptop":
      return Laptop;
    case "mobile":
      return Smartphone;
    case "network":
      return Server;
    case "software":
      return HardDrive;
    default:
      return Package;
  }
};

const getStatusConfig = (status: string) => {
  switch (status) {
    case "active":
      return {
        variant: "default" as const,
        className: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
        label: "Active",
        icon: CheckCircle2,
        ariaLabel: "Status: Active and in use"
      };
    case "maintenance":
      return {
        variant: "outline" as const,
        className: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
        label: "Maintenance",
        icon: Wrench,
        ariaLabel: "Status: Under maintenance"
      };
    case "inactive":
      return {
        variant: "outline" as const,
        className: "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20",
        label: "Inactive",
        icon: Package,
        ariaLabel: "Status: Inactive"
      };
    default:
      return {
        variant: "outline" as const,
        className: "",
        label: status,
        icon: Package,
        ariaLabel: `Status: ${status}`
      };
  }
};

export default function Assets() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex-1 overflow-auto" role="main" aria-label="Assets management page">
      <div className="p-6 md:p-8 space-y-8">
        {/* Header Section - Visual Hierarchy with Clear Labels */}
        <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h1 
              className="text-3xl font-bold tracking-tight" 
              data-testid="text-page-title"
              id="page-title"
            >
              Assets Management
            </h1>
            <p 
              className="text-base text-muted-foreground max-w-2xl" 
              id="page-description"
            >
              Manage customer assets, equipment, and products linked to support tickets with tracking and assignment capabilities
            </p>
          </div>
          <Button 
            data-testid="button-add-asset"
            className="min-h-11 shrink-0 transition-all duration-200"
            aria-label="Add new asset"
          >
            <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
            Add Asset
          </Button>
        </header>

        {/* Search Section - Clear Labels and Form Guidance */}
        <Card className="p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="asset-search" className="text-sm font-medium">
                Search Assets
              </Label>
              <div className="relative">
                <Search 
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" 
                  aria-hidden="true"
                />
                <Input
                  id="asset-search"
                  placeholder="Search by name, serial number, type, or company..."
                  className="pl-10 min-h-11 transition-all duration-200 focus:ring-2"
                  data-testid="input-search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search assets by name, serial number, type, or company"
                  aria-describedby="search-hint"
                />
              </div>
              <p id="search-hint" className="text-xs text-muted-foreground sr-only">
                Type to filter assets by name, serial number, asset type, or company name
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
              aria-label="Assets table"
              aria-describedby="page-description"
            >
              <thead>
                <tr className="border-b bg-muted/50">
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[280px]">
                    Asset
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[120px]">
                    Type
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[180px]">
                    Serial Number
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[180px]">
                    Company
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[160px]">
                    Assigned To
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[140px]">
                    Status
                  </th>
                  <th scope="col" className="text-left text-sm font-semibold p-4 min-w-[220px]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {assets.map((asset) => {
                  const AssetIcon = getAssetIcon(asset.category);
                  const statusConfig = getStatusConfig(asset.status);
                  const StatusIcon = statusConfig.icon;
                  
                  return (
                    <tr 
                      key={asset.id} 
                      className="border-b last:border-0 hover-elevate transition-all duration-200 focus-within:bg-muted/30" 
                      data-testid={`row-asset-${asset.id}`}
                      tabIndex={0}
                      role="row"
                      aria-label={`Asset ${asset.name}`}
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10 transition-transform duration-200 hover:scale-105">
                            <AvatarFallback className="bg-primary/10 text-primary">
                              <AssetIcon className="h-5 w-5" aria-hidden="true" />
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span 
                              className="font-semibold text-sm" 
                              data-testid={`text-name-${asset.id}`}
                            >
                              {asset.name}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge 
                          variant="secondary" 
                          className="transition-all duration-200"
                          aria-label={`Asset type: ${asset.type}`}
                          data-testid={`badge-type-${asset.id}`}
                        >
                          {asset.type}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <code 
                          className="text-sm font-mono bg-muted px-2 py-1 rounded text-muted-foreground"
                          data-testid={`text-serial-${asset.id}`}
                        >
                          {asset.serialNumber}
                        </code>
                      </td>
                      <td className="p-4">
                        <span 
                          className="text-sm font-medium"
                          data-testid={`text-company-${asset.id}`}
                        >
                          {asset.company}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs">
                              {asset.assignedTo.split(" ").map((n) => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span 
                            className="text-sm text-muted-foreground"
                            data-testid={`text-assigned-${asset.id}`}
                          >
                            {asset.assignedTo}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge 
                          variant={statusConfig.variant}
                          className={`transition-all duration-200 ${statusConfig.className}`}
                          aria-label={statusConfig.ariaLabel}
                          data-testid={`badge-status-${asset.id}`}
                        >
                          <StatusIcon className="h-3 w-3 mr-1" aria-hidden="true" />
                          {statusConfig.label}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2" role="group" aria-label="Asset actions">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="min-h-11 transition-all duration-200"
                            data-testid={`button-view-${asset.id}`}
                            aria-label={`View details for ${asset.name}`}
                          >
                            <Eye className="h-4 w-4 mr-2" aria-hidden="true" />
                            <span className="hidden sm:inline">View</span>
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="min-h-11 min-w-11 transition-all duration-200"
                            data-testid={`button-edit-${asset.id}`}
                            aria-label={`Edit ${asset.name}`}
                          >
                            <Edit className="h-4 w-4" aria-hidden="true" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="min-h-11 min-w-11 transition-all duration-200 text-destructive hover:text-destructive"
                            data-testid={`button-delete-${asset.id}`}
                            aria-label={`Delete ${asset.name}`}
                          >
                            <Trash2 className="h-4 w-4" aria-hidden="true" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          {/* Empty State - Clear Feedback */}
          {assets.length === 0 && (
            <div className="p-12 text-center space-y-3" role="status">
              <Package className="h-12 w-12 mx-auto text-muted-foreground opacity-50" aria-hidden="true" />
              <p className="text-lg font-medium text-muted-foreground">No assets found</p>
              <p className="text-sm text-muted-foreground">Try adjusting your search or add a new asset to get started</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
