import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Edit, Trash2, Clock } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const slaRules = [
  { id: 1, name: "Priority - Critical", responseTime: "1 hour", resolutionTime: "4 hours", businessHours: true, categories: ["Technical", "Security"], active: true },
  { id: 2, name: "High Priority", responseTime: "2 hours", resolutionTime: "8 hours", businessHours: true, categories: ["Billing", "Technical"], active: true },
  { id: 3, name: "Normal Priority", responseTime: "4 hours", resolutionTime: "24 hours", businessHours: true, categories: ["All"], active: true },
  { id: 4, name: "Low Priority", responseTime: "24 hours", resolutionTime: "72 hours", businessHours: false, categories: ["General"], active: true },
];

export default function SLA() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold" data-testid="text-page-title">SLA Management</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Set deadlines for ticket response and resolution times depending on business hours or categories
            </p>
          </div>
          <Button data-testid="button-create-sla">
            <Plus className="h-4 w-4 mr-2" />
            Create SLA
          </Button>
        </div>

        <Card className="p-4">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left text-sm font-medium p-3">SLA Name</th>
                  <th className="text-left text-sm font-medium p-3">Response Time</th>
                  <th className="text-left text-sm font-medium p-3">Resolution Time</th>
                  <th className="text-left text-sm font-medium p-3">Business Hours</th>
                  <th className="text-left text-sm font-medium p-3">Categories</th>
                  <th className="text-left text-sm font-medium p-3">Status</th>
                  <th className="text-left text-sm font-medium p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {slaRules.map((sla) => (
                  <tr key={sla.id} className="border-b hover-elevate" data-testid={`row-sla-${sla.id}`}>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium text-sm">{sla.name}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <span className="text-sm text-chart-4 font-medium">{sla.responseTime}</span>
                    </td>
                    <td className="p-3">
                      <span className="text-sm text-chart-1 font-medium">{sla.resolutionTime}</span>
                    </td>
                    <td className="p-3">
                      <span className="text-sm">{sla.businessHours ? "Yes" : "24/7"}</span>
                    </td>
                    <td className="p-3">
                      <span className="text-sm text-muted-foreground">{sla.categories.join(", ")}</span>
                    </td>
                    <td className="p-3">
                      <Switch checked={sla.active} data-testid={`switch-active-${sla.id}`} />
                    </td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" data-testid={`button-edit-${sla.id}`}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" data-testid={`button-delete-${sla.id}`}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Create New SLA</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sla-name">SLA Name</Label>
              <Input
                id="sla-name"
                placeholder="e.g., Priority - Critical"
                data-testid="input-sla-name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="response-time">Response Time</Label>
                <div className="flex gap-2">
                  <Input
                    id="response-time"
                    type="number"
                    placeholder="24"
                    data-testid="input-response-time"
                  />
                  <Select defaultValue="hours">
                    <SelectTrigger className="w-32" data-testid="select-response-unit">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minutes">Minutes</SelectItem>
                      <SelectItem value="hours">Hours</SelectItem>
                      <SelectItem value="days">Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="resolution-time">Resolution Time</Label>
                <div className="flex gap-2">
                  <Input
                    id="resolution-time"
                    type="number"
                    placeholder="72"
                    data-testid="input-resolution-time"
                  />
                  <Select defaultValue="hours">
                    <SelectTrigger className="w-32" data-testid="select-resolution-unit">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minutes">Minutes</SelectItem>
                      <SelectItem value="hours">Hours</SelectItem>
                      <SelectItem value="days">Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Switch id="business-hours" data-testid="switch-business-hours" />
              <Label htmlFor="business-hours" className="cursor-pointer">
                Apply only during business hours
              </Label>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" data-testid="button-cancel">Cancel</Button>
              <Button data-testid="button-save-sla">Save SLA</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
