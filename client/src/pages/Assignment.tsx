import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Play, Pause, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const assignmentRules = [
  { id: 1, name: "High Priority to Senior Agents", condition: "Priority is High", action: "Assign to Senior Agent Group", active: true },
  { id: 2, name: "Billing Issues to Finance Team", condition: "Category contains 'billing'", action: "Assign to Finance Team", active: true },
  { id: 3, name: "Technical Issues by Product", condition: "Product is 'API Gateway'", action: "Assign to Backend Team", active: false },
  { id: 4, name: "VIP Customer Escalation", condition: "Customer tag is 'VIP'", action: "Assign to Manager", active: true },
];

export default function Assignment() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold" data-testid="text-page-title">Ticket Assignment</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Automatically assign tickets to agents and groups based on keywords, requests, or characteristics
            </p>
          </div>
          <Button data-testid="button-create-rule">
            <Plus className="h-4 w-4 mr-2" />
            Create Rule
          </Button>
        </div>

        <div className="grid gap-4">
          {assignmentRules.map((rule) => (
            <Card key={rule.id} data-testid={`card-rule-${rule.id}`}>
              <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-4">
                <div className="flex-1">
                  <CardTitle className="text-lg">{rule.name}</CardTitle>
                </div>
                <div className="flex items-center gap-2">
                  <Switch checked={rule.active} data-testid={`switch-active-${rule.id}`} />
                  <Button variant="ghost" size="icon" data-testid={`button-edit-${rule.id}`}>
                    {rule.active ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <Button variant="ghost" size="icon" data-testid={`button-delete-${rule.id}`}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Condition</p>
                    <div className="flex items-center gap-2 p-3 rounded-md border bg-muted/50">
                      <span className="text-sm font-mono">{rule.condition}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Action</p>
                    <div className="flex items-center gap-2 p-3 rounded-md border bg-muted/50">
                      <span className="text-sm font-mono">{rule.action}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Create New Assignment Rule</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="rule-name">Rule Name</Label>
              <Input
                id="rule-name"
                placeholder="e.g., Route API Issues to Backend Team"
                data-testid="input-rule-name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Condition Type</Label>
                <Select defaultValue="priority">
                  <SelectTrigger data-testid="select-condition-type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="priority">Priority</SelectItem>
                    <SelectItem value="category">Category</SelectItem>
                    <SelectItem value="keyword">Keyword</SelectItem>
                    <SelectItem value="customer-tag">Customer Tag</SelectItem>
                    <SelectItem value="product">Product</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Condition Value</Label>
                <Input placeholder="Enter value" data-testid="input-condition-value" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Assignment Type</Label>
                <Select defaultValue="agent">
                  <SelectTrigger data-testid="select-assignment-type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="agent">Specific Agent</SelectItem>
                    <SelectItem value="group">Agent Group</SelectItem>
                    <SelectItem value="round-robin">Round Robin</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Assign To</Label>
                <Select>
                  <SelectTrigger data-testid="select-assign-to">
                    <SelectValue placeholder="Select agent or group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john">John Doe</SelectItem>
                    <SelectItem value="jane">Jane Smith</SelectItem>
                    <SelectItem value="senior">Senior Agent Group</SelectItem>
                    <SelectItem value="backend">Backend Team</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" data-testid="button-cancel">Cancel</Button>
              <Button data-testid="button-save-rule">Save Rule</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
