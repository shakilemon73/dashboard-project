import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Edit, Trash2, GripVertical } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

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
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex-1 overflow-auto" role="main" aria-label="Statuses management page">
      <div className="p-6 md:p-8 space-y-8">
        {/* Header Section - Clear Hierarchy */}
        <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h1 
              className="text-3xl font-bold tracking-tight" 
              data-testid="text-page-title"
              id="page-title"
            >
              Custom Ticket Statuses
            </h1>
            <p 
              className="text-base text-muted-foreground max-w-2xl"
              id="page-description"
            >
              Create custom status messages that adapt to your unique workflow
            </p>
          </div>
          <Button 
            data-testid="button-create-status"
            className="min-h-11 shrink-0 transition-all duration-200"
            aria-label="Create new status"
          >
            <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
            Create Status
          </Button>
        </header>

        {/* Status List - Color Psychology with Clear Affordances */}
        <Card className="p-6">
          <div 
            className="space-y-3" 
            role="list" 
            aria-label="List of ticket statuses"
            aria-describedby="page-description"
          >
            {statuses.map((status) => (
              <div
                key={status.id}
                className="flex items-center gap-3 p-4 rounded-md border hover-elevate transition-all duration-200 focus-within:ring-2 focus-within:ring-primary"
                data-testid={`row-status-${status.id}`}
                role="listitem"
                aria-label={`Status: ${status.name}, Order ${status.order}`}
                tabIndex={0}
              >
                {/* Drag Handle - Clear Affordance */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="min-h-11 min-w-11 cursor-grab transition-all duration-200" 
                  data-testid={`button-drag-${status.id}`}
                  aria-label={`Drag to reorder ${status.name} status`}
                >
                  <GripVertical className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                </Button>

                {/* Status Badge - Color Psychology */}
                <div className="shrink-0">
                  <StatusBadge status={status.key as any} />
                </div>

                {/* Status Info - Clear Layout */}
                <div className="flex-1 min-w-0">
                  <h4 
                    className="font-semibold text-sm mb-0.5" 
                    data-testid={`text-name-${status.id}`}
                  >
                    {status.name}
                  </h4>
                  <p 
                    className="text-xs text-muted-foreground line-clamp-1"
                    data-testid={`text-description-${status.id}`}
                  >
                    {status.description}
                  </p>
                </div>

                {/* Order Indicator */}
                <div className="hidden sm:block text-sm text-muted-foreground font-medium px-3">
                  <span className="sr-only">Order:</span>
                  {status.order}
                </div>

                {/* Action Buttons - Touch-friendly */}
                <div 
                  className="flex gap-2" 
                  role="group" 
                  aria-label="Status actions"
                >
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="min-h-11 min-w-11 transition-all duration-200"
                    data-testid={`button-edit-${status.id}`}
                    aria-label={`Edit ${status.name} status`}
                  >
                    <Edit className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="min-h-11 min-w-11 transition-all duration-200 hover:text-destructive"
                    data-testid={`button-delete-${status.id}`}
                    aria-label={`Delete ${status.name} status`}
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {statuses.length === 0 && (
            <div className="text-center py-12 space-y-3" role="status">
              <p className="text-lg font-medium text-muted-foreground">No statuses found</p>
              <p className="text-sm text-muted-foreground">Create a new status to get started</p>
            </div>
          )}
        </Card>

        <Separator />

        {/* Create New Status Form - Clear Affordances */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Create New Status</h3>
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="status-name" className="text-sm font-medium">
                  Status Name
                </Label>
                <Input
                  id="status-name"
                  placeholder="e.g., Awaiting Approval"
                  className="min-h-11 transition-all duration-200 focus:ring-2"
                  data-testid="input-status-name"
                  aria-label="Enter status name"
                />
                <p className="text-xs text-muted-foreground">
                  A clear name that describes the ticket state
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status-color" className="text-sm font-medium">
                  Color
                </Label>
                <select
                  id="status-color"
                  className="flex h-11 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-all duration-200 focus:ring-2"
                  data-testid="select-status-color"
                  aria-label="Select status color"
                >
                  <option value="blue">Blue - New/Information</option>
                  <option value="green">Green - Success/Complete</option>
                  <option value="amber">Amber - In Progress/Warning</option>
                  <option value="red">Red - Blocked/Critical</option>
                  <option value="purple">Purple - Waiting/Pending</option>
                  <option value="gray">Gray - Inactive/Closed</option>
                </select>
                <p className="text-xs text-muted-foreground">
                  Choose a color that represents the status meaning
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status-description" className="text-sm font-medium">
                Description
              </Label>
              <Input
                id="status-description"
                placeholder="Brief description of this status"
                className="min-h-11 transition-all duration-200 focus:ring-2"
                data-testid="input-status-description"
                aria-label="Enter status description"
              />
              <p className="text-xs text-muted-foreground">
                Explain what this status means in your workflow
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-2 pt-4">
              <Button 
                variant="outline" 
                className="min-h-11 transition-all duration-200"
                data-testid="button-cancel"
                aria-label="Cancel status creation"
              >
                Cancel
              </Button>
              <Button 
                className="min-h-11 transition-all duration-200"
                data-testid="button-save-status"
                aria-label="Save new status"
              >
                Save Status
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
