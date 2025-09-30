import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Zap, Play, Pause } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

const automationRules = [
  {
    id: 1,
    name: "Auto-close resolved tickets",
    trigger: "Status changes to Resolved",
    actions: ["Wait 7 days", "Change status to Closed", "Send notification to customer"],
    active: true,
    executions: 234,
  },
  {
    id: 2,
    name: "Escalate overdue tickets",
    trigger: "SLA breach detected",
    actions: ["Assign to manager", "Set priority to High", "Send alert email"],
    active: true,
    executions: 12,
  },
  {
    id: 3,
    name: "Auto-tag by keywords",
    trigger: "New ticket created",
    actions: ["Scan subject and description", "Add relevant tags", "Categorize ticket"],
    active: false,
    executions: 0,
  },
  {
    id: 4,
    name: "Customer satisfaction survey",
    trigger: "Ticket closed",
    actions: ["Wait 1 hour", "Send CSAT survey email"],
    active: true,
    executions: 456,
  },
];

export default function Automation() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold" data-testid="text-page-title">Automation Rules</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Automate recurring tasks and perform multiple actions on a ticket with a single click
            </p>
          </div>
          <Button data-testid="button-create-automation">
            <Plus className="h-4 w-4 mr-2" />
            Create Automation
          </Button>
        </div>

        <div className="grid gap-4">
          {automationRules.map((rule) => (
            <Card key={rule.id} data-testid={`card-automation-${rule.id}`}>
              <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{rule.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Executed {rule.executions} times
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Switch checked={rule.active} data-testid={`switch-active-${rule.id}`} />
                  <Badge variant={rule.active ? "default" : "secondary"}>
                    {rule.active ? "Active" : "Inactive"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Trigger</p>
                    <div className="flex items-center gap-2 p-3 rounded-md border bg-muted/50">
                      <span className="text-sm">{rule.trigger}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Actions</p>
                    <div className="space-y-2">
                      {rule.actions.map((action, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-medium">
                            {index + 1}
                          </div>
                          <div className="flex-1 p-2 rounded-md border bg-background">
                            <span className="text-sm">{action}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline" size="sm" data-testid={`button-test-${rule.id}`}>
                    Test Run
                  </Button>
                  <Button variant="outline" size="sm" data-testid={`button-edit-${rule.id}`}>
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
