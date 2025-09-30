import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Zap, Edit, Trash2, CheckCircle2, AlertCircle, PlayCircle, PauseCircle, Info } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const automationRules = [
  {
    id: 1,
    name: "Auto-close resolved tickets",
    trigger: "Status changes to Resolved",
    actions: ["Wait 7 days", "Change status to Closed", "Send notification to customer"],
    active: true,
    executions: 234,
    lastExecuted: "2 hours ago",
  },
  {
    id: 2,
    name: "Escalate overdue tickets",
    trigger: "SLA breach detected",
    actions: ["Assign to manager", "Set priority to High", "Send alert email"],
    active: true,
    executions: 12,
    lastExecuted: "30 minutes ago",
  },
  {
    id: 3,
    name: "Auto-tag by keywords",
    trigger: "New ticket created",
    actions: ["Scan subject and description", "Add relevant tags", "Categorize ticket"],
    active: false,
    executions: 0,
    lastExecuted: "Never",
  },
  {
    id: 4,
    name: "Customer satisfaction survey",
    trigger: "Ticket closed",
    actions: ["Wait 1 hour", "Send CSAT survey email"],
    active: true,
    executions: 456,
    lastExecuted: "5 minutes ago",
  },
];

export default function Automation() {
  const [selectedRule, setSelectedRule] = useState<number | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [ruleToDelete, setRuleToDelete] = useState<{ id: number; name: string } | null>(null);

  const handleDeleteClick = (ruleId: number, ruleName: string) => {
    setRuleToDelete({ id: ruleId, name: ruleName });
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    setDeleteDialogOpen(false);
    setRuleToDelete(null);
  };

  return (
    <div className="flex-1 overflow-auto" role="main" aria-label="Automation rules page">
      <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
        {/* Header Section - Clear Purpose */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <h1 
              className="text-2xl sm:text-3xl font-semibold tracking-tight" 
              data-testid="text-page-title"
              id="automation-title"
            >
              Automation Rules
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Automate recurring tasks and perform multiple actions on a ticket with a single click
            </p>
          </div>
          <Button 
            className="min-h-11 transition-all duration-200 self-start sm:self-auto"
            data-testid="button-create-automation"
            aria-label="Create new automation rule"
          >
            <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
            Create Automation
          </Button>
        </header>

        <Separator className="my-6" />

        {/* Stats Overview - Simple and Clear */}
        <section 
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          aria-label="Automation statistics"
          role="region"
        >
          <Card className="transition-all duration-200 hover-elevate">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">Total Rules</p>
                  <p className="text-2xl sm:text-3xl font-bold tabular-nums" data-testid="text-total-rules">
                    {automationRules.length}
                  </p>
                </div>
                <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Zap className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-200 hover-elevate">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">Active Rules</p>
                  <p className="text-2xl sm:text-3xl font-bold tabular-nums text-chart-2" data-testid="text-active-rules">
                    {automationRules.filter(r => r.active).length}
                  </p>
                </div>
                <div className="h-12 w-12 rounded-md bg-chart-2/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-chart-2" aria-hidden="true" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-200 hover-elevate">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">Total Executions</p>
                  <p className="text-2xl sm:text-3xl font-bold tabular-nums text-chart-4" data-testid="text-total-executions">
                    702
                  </p>
                </div>
                <div className="h-12 w-12 rounded-md bg-chart-4/10 flex items-center justify-center shrink-0">
                  <PlayCircle className="h-6 w-6 text-chart-4" aria-hidden="true" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Automation Rules - Understandable and Simple */}
        <section 
          className="space-y-4"
          role="list"
          aria-label="List of automation rules"
        >
          <h2 className="text-lg font-semibold">Automation Rules</h2>
          
          {automationRules.map((rule) => (
            <Card 
              key={rule.id}
              className={`transition-all duration-200 hover-elevate ${
                selectedRule === rule.id ? 'ring-2 ring-primary' : ''
              }`}
              data-testid={`card-automation-${rule.id}`}
              role="listitem"
              onClick={() => setSelectedRule(rule.id)}
              tabIndex={0}
              aria-label={`Automation rule: ${rule.name}`}
            >
              <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-110">
                    <Zap className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-lg" data-testid={`text-name-${rule.id}`}>
                        {rule.name}
                      </h3>
                      <Badge 
                        variant={rule.active ? "default" : "secondary"}
                        className="self-start transition-all duration-200"
                        aria-label={rule.active ? "Active" : "Inactive"}
                      >
                        {rule.active ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span>Executed {rule.executions} times</span>
                      <span>•</span>
                      <span>Last: {rule.lastExecuted}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 shrink-0">
                  <Switch 
                    checked={rule.active} 
                    className="transition-all duration-200"
                    data-testid={`switch-active-${rule.id}`}
                    aria-label={`Toggle ${rule.name} ${rule.active ? 'off' : 'on'}`}
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="min-h-11 min-w-11 transition-all duration-200"
                    data-testid={`button-edit-${rule.id}`}
                    aria-label={`Edit ${rule.name}`}
                  >
                    <Edit className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="min-h-11 min-w-11 transition-all duration-200 hover:text-destructive"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteClick(rule.id, rule.name);
                    }}
                    data-testid={`button-delete-${rule.id}`}
                    aria-label={`Delete ${rule.name}`}
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Trigger - Clear and Understandable */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-muted-foreground">Trigger Event</p>
                    <Badge variant="outline" className="text-xs">WHEN</Badge>
                  </div>
                  <div className="p-4 rounded-md border bg-muted/50 transition-all duration-200 hover-elevate">
                    <div className="flex items-center gap-2">
                      <PlayCircle className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                      <span className="text-sm font-medium">{rule.trigger}</span>
                    </div>
                  </div>
                </div>

                {/* Actions - Step-by-Step Clarity */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-muted-foreground">Actions Performed</p>
                    <Badge variant="outline" className="text-xs">DO</Badge>
                  </div>
                  <div className="space-y-2">
                    {rule.actions.map((action, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 transition-all duration-200 hover-elevate p-3 rounded-md"
                        role="listitem"
                        aria-label={`Step ${index + 1}: ${action}`}
                      >
                        <div className="h-7 w-7 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-semibold shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1 p-3 rounded-md border bg-background">
                          <span className="text-sm">{action}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Indicators - Error Prevention */}
                {rule.active && rule.executions > 0 && (
                  <div className="flex items-start gap-2 p-3 rounded-md bg-chart-2/10 text-chart-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Active and running</p>
                      <p className="text-xs mt-1 opacity-90">
                        This rule has successfully executed {rule.executions} times
                      </p>
                    </div>
                  </div>
                )}

                {!rule.active && (
                  <div className="flex items-start gap-2 p-3 rounded-md bg-chart-4/10 text-chart-4">
                    <PauseCircle className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Rule is paused</p>
                      <p className="text-xs mt-1 opacity-90">
                        Enable this rule to start automating actions
                      </p>
                    </div>
                  </div>
                )}

                {rule.active && rule.executions === 0 && (
                  <div className="flex items-start gap-2 p-3 rounded-md bg-primary/10">
                    <Info className="h-4 w-4 mt-0.5 text-primary shrink-0" aria-hidden="true" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-primary">Waiting for trigger</p>
                      <p className="text-xs mt-1 text-primary/80">
                        This rule hasn't been triggered yet
                      </p>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-end gap-2 pt-4 border-t">
                  <Button 
                    variant="outline" 
                    className="min-h-11 transition-all duration-200"
                    data-testid={`button-test-${rule.id}`}
                    aria-label={`Test run ${rule.name}`}
                  >
                    <PlayCircle className="h-4 w-4 mr-2" aria-hidden="true" />
                    Test Run
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Help Section - Error Prevention */}
        <Card className="border-primary/20 bg-primary/5 transition-all duration-200">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <Info className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-sm font-semibold">Automation Best Practices</h3>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Test rules before activating them to prevent unexpected behavior</li>
                  <li>Use specific conditions to avoid triggering rules too frequently</li>
                  <li>Review execution logs regularly to ensure rules work as expected</li>
                  <li>Keep actions simple and focused on a single workflow</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Delete Confirmation Dialog - Error Prevention */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" aria-hidden="true" />
              Delete Automation Rule?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. Deleting "{ruleToDelete?.name}" will permanently remove 
              this automation rule and stop all associated automated actions.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="min-h-11 transition-all duration-200">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDelete}
              className="min-h-11 bg-destructive hover:bg-destructive/90 transition-all duration-200"
            >
              <Trash2 className="h-4 w-4 mr-2" aria-hidden="true" />
              Delete Rule
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
