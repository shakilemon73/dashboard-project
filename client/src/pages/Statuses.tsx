import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Edit, Trash2, GripVertical } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

const statuses = [
  { id: 1, name: "New", key: "new", description: "Ticket has been created and awaiting initial review", color: "blue", order: 1 },
  { id: 2, name: "Assigned", key: "assigned", description: "Ticket has been assigned to an agent", color: "amber", order: 2 },
  { id: 3, name: "In Progress", key: "in-progress", description: "Agent is actively working on the ticket", color: "amber", order: 3 },
  { id: 4, name: "On Hold", key: "on-hold", description: "Ticket is paused pending additional information", color: "red", order: 4 },
  { id: 5, name: "Completed", key: "completed", description: "Ticket has been resolved", color: "green", order: 5 },
  { id: 6, name: "Reviewed", key: "reviewed", description: "Solution has been reviewed and approved", color: "green", order: 6 },
  { id: 7, name: "Billed", key: "billed", description: "Work has been billed to customer", color: "gray", order: 7 },
  { id: 8, name: "Waiting", key: "waiting", description: "Awaiting customer response", color: "purple", order: 8 },
];

export default function Statuses() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold" data-testid="text-page-title">Custom Ticket Statuses</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Create custom status messages that adapt to your unique workflow
            </p>
          </div>
          <Button data-testid="button-create-status">
            <Plus className="h-4 w-4 mr-2" />
            Create Status
          </Button>
        </div>

        <Card className="p-4">
          <div className="space-y-2">
            {statuses.map((status) => (
              <div
                key={status.id}
                className="flex items-center gap-4 p-4 rounded-md border hover-elevate"
                data-testid={`row-status-${status.id}`}
              >
                <Button variant="ghost" size="icon" className="cursor-grab" data-testid={`button-drag-${status.id}`}>
                  <GripVertical className="h-4 w-4 text-muted-foreground" />
                </Button>

                <div className="flex-1 flex items-center gap-4">
                  <StatusBadge status={status.key as any} />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{status.name}</h4>
                    <p className="text-xs text-muted-foreground">{status.description}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Order: {status.order}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" data-testid={`button-edit-${status.id}`}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" data-testid={`button-delete-${status.id}`}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Create New Status</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="status-name">Status Name</Label>
                <Input
                  id="status-name"
                  placeholder="e.g., Awaiting Approval"
                  data-testid="input-status-name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="status-color">Color</Label>
                <select
                  id="status-color"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
                  data-testid="select-status-color"
                >
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="amber">Amber</option>
                  <option value="red">Red</option>
                  <option value="purple">Purple</option>
                  <option value="gray">Gray</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status-description">Description</Label>
              <Input
                id="status-description"
                placeholder="Brief description of this status"
                data-testid="input-status-description"
              />
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" data-testid="button-cancel">Cancel</Button>
              <Button data-testid="button-save-status">Save Status</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
