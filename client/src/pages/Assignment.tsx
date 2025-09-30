import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Edit, Trash2, UserCheck, AlertTriangle, CheckCircle2, Filter, Users } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

const assignmentRules = [
  { 
    id: 1, 
    name: "High Priority to Senior Agents", 
    condition: "Priority is High", 
    action: "Assign to Senior Agent Group", 
    active: true,
    executionCount: 142,
    lastExecuted: "2 hours ago"
  },
  { 
    id: 2, 
    name: "Billing Issues to Finance Team", 
    condition: "Category contains 'billing'", 
    action: "Assign to Finance Team", 
    active: true,
    executionCount: 89,
    lastExecuted: "30 minutes ago"
  },
  { 
    id: 3, 
    name: "Technical Issues by Product", 
    condition: "Product is 'API Gateway'", 
    action: "Assign to Backend Team", 
    active: false,
    executionCount: 0,
    lastExecuted: "Never"
  },
  { 
    id: 4, 
    name: "VIP Customer Escalation", 
    condition: "Customer tag is 'VIP'", 
    action: "Assign to Manager", 
    active: true,
    executionCount: 23,
    lastExecuted: "1 day ago"
  },
];

export default function Assignment() {
  const [selectedRule, setSelectedRule] = useState<number | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [ruleToDelete, setRuleToDelete] = useState<number | null>(null);
  const [conditionType, setConditionType] = useState("priority");
  const [assignmentType, setAssignmentType] = useState("agent");

  const handleDeleteClick = (ruleId: number) => {
    setRuleToDelete(ruleId);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    setDeleteDialogOpen(false);
    setRuleToDelete(null);
  };

  return (
    <div className="flex-1 overflow-auto" role="main" aria-label="Ticket assignment page">
      <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
        {/* Header Section - Direct Manipulation Context */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <h1 
              className="text-2xl sm:text-3xl font-semibold tracking-tight" 
              data-testid="text-page-title"
              id="assignment-title"
            >
              Ticket Assignment
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Automatically assign tickets to agents and groups based on keywords, requests, or characteristics
            </p>
          </div>
          <Button 
            className="min-h-11 transition-all duration-200 self-start sm:self-auto"
            data-testid="button-create-rule"
            aria-label="Create new assignment rule"
          >
            <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
            Create Rule
          </Button>
        </header>

        <Separator className="my-6" />

        {/* Stats Overview - Immediate Visual Feedback */}
        <section 
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          aria-label="Assignment statistics"
          role="region"
        >
          <Card className="transition-all duration-200 hover-elevate">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">Total Rules</p>
                  <p className="text-2xl sm:text-3xl font-bold tabular-nums" data-testid="text-total-rules">
                    {assignmentRules.length}
                  </p>
                </div>
                <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Filter className="h-6 w-6 text-primary" aria-hidden="true" />
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
                    {assignmentRules.filter(r => r.active).length}
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
                  <p className="text-sm text-muted-foreground mb-1">Auto-Assigned Today</p>
                  <p className="text-2xl sm:text-3xl font-bold tabular-nums text-chart-4" data-testid="text-assigned-today">
                    254
                  </p>
                </div>
                <div className="h-12 w-12 rounded-md bg-chart-4/10 flex items-center justify-center shrink-0">
                  <UserCheck className="h-6 w-6 text-chart-4" aria-hidden="true" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Assignment Rules - Direct Manipulation with Feedback */}
        <section 
          className="space-y-4"
          role="list"
          aria-label="List of assignment rules"
        >
          <h2 className="text-lg font-semibold">Assignment Rules</h2>
          
          {assignmentRules.map((rule) => (
            <Card 
              key={rule.id}
              className={`transition-all duration-200 hover-elevate ${
                selectedRule === rule.id ? 'ring-2 ring-primary' : ''
              }`}
              data-testid={`card-rule-${rule.id}`}
              role="listitem"
              onClick={() => setSelectedRule(rule.id)}
              tabIndex={0}
              aria-label={`Assignment rule: ${rule.name}`}
            >
              <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0 pb-4">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-110">
                    <UserCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-lg" data-testid={`text-name-${rule.id}`}>
                        {rule.name}
                      </h3>
                      <Badge 
                        variant={rule.active ? "default" : "secondary"}
                        className="self-start transition-all duration-200"
                        aria-label={rule.active ? "Active rule" : "Inactive rule"}
                      >
                        {rule.active ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        Executed {rule.executionCount} times
                      </span>
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
                      handleDeleteClick(rule.id);
                    }}
                    data-testid={`button-delete-${rule.id}`}
                    aria-label={`Delete ${rule.name}`}
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Condition - Direct Visual Feedback */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-muted-foreground">Condition</p>
                    <Badge variant="outline" className="text-xs">IF</Badge>
                  </div>
                  <div className="p-4 rounded-md border bg-muted/50 transition-all duration-200 hover-elevate">
                    <code className="text-sm font-mono">{rule.condition}</code>
                  </div>
                </div>

                {/* Action - Direct Visual Feedback */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-muted-foreground">Action</p>
                    <Badge variant="outline" className="text-xs">THEN</Badge>
                  </div>
                  <div className="p-4 rounded-md border bg-primary/5 border-primary/20 transition-all duration-200 hover-elevate">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                      <code className="text-sm font-mono text-primary">{rule.action}</code>
                    </div>
                  </div>
                </div>

                {/* Execution Status - Immediate Feedback */}
                {rule.executionCount > 0 && (
                  <div className="flex items-center gap-2 p-3 rounded-md bg-chart-2/10 text-chart-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium">
                      Successfully executed {rule.executionCount} times
                    </span>
                  </div>
                )}

                {!rule.active && (
                  <div className="flex items-center gap-2 p-3 rounded-md bg-chart-4/10 text-chart-4">
                    <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium">
                      This rule is currently inactive and will not assign tickets
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Create New Assignment Rule - Constraints and Validation */}
        <Card className="transition-all duration-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" aria-hidden="true" />
              Create New Assignment Rule
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Define conditions and actions to automatically route tickets to the right team
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="rule-name" className="text-sm font-medium">
                Rule Name
              </Label>
              <Input
                id="rule-name"
                placeholder="e.g., Route API Issues to Backend Team"
                className="min-h-11 transition-all duration-200 focus:ring-2"
                data-testid="input-rule-name"
                aria-label="Assignment rule name"
                aria-required="true"
              />
            </div>

            {/* Condition Builder - Direct Manipulation */}
            <div className="space-y-4 p-4 rounded-md border bg-muted/30">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">IF</Badge>
                <h3 className="text-sm font-semibold">Condition</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Condition Type</Label>
                  <Select 
                    value={conditionType} 
                    onValueChange={setConditionType}
                  >
                    <SelectTrigger 
                      className="min-h-11 transition-all duration-200"
                      data-testid="select-condition-type"
                      aria-label="Select condition type"
                    >
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
                  <Label className="text-sm font-medium">Condition Value</Label>
                  <Input 
                    placeholder="Enter value" 
                    className="min-h-11 transition-all duration-200 focus:ring-2"
                    data-testid="input-condition-value" 
                    aria-label="Condition value"
                    aria-required="true"
                  />
                </div>
              </div>
            </div>

            {/* Action Builder - Direct Manipulation with Constraints */}
            <div className="space-y-4 p-4 rounded-md border bg-primary/5 border-primary/20">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs border-primary/20">THEN</Badge>
                <h3 className="text-sm font-semibold">Action</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Assignment Type</Label>
                  <Select 
                    value={assignmentType} 
                    onValueChange={setAssignmentType}
                  >
                    <SelectTrigger 
                      className="min-h-11 transition-all duration-200"
                      data-testid="select-assignment-type"
                      aria-label="Select assignment type"
                    >
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
                  <Label className="text-sm font-medium">
                    {assignmentType === 'agent' ? 'Select Agent' : assignmentType === 'group' ? 'Select Group' : 'Select Team'}
                  </Label>
                  <Select>
                    <SelectTrigger 
                      className="min-h-11 transition-all duration-200"
                      data-testid="select-assign-to"
                      aria-label={`Select ${assignmentType}`}
                      aria-required="true"
                    >
                      <SelectValue placeholder={`Select ${assignmentType === 'agent' ? 'agent' : 'group'}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {assignmentType === 'agent' && (
                        <>
                          <SelectItem value="john">John Doe</SelectItem>
                          <SelectItem value="jane">Jane Smith</SelectItem>
                          <SelectItem value="mike">Mike Johnson</SelectItem>
                        </>
                      )}
                      {assignmentType === 'group' && (
                        <>
                          <SelectItem value="senior">Senior Agent Group</SelectItem>
                          <SelectItem value="backend">Backend Team</SelectItem>
                          <SelectItem value="finance">Finance Team</SelectItem>
                        </>
                      )}
                      {assignmentType === 'round-robin' && (
                        <>
                          <SelectItem value="support">Support Team</SelectItem>
                          <SelectItem value="technical">Technical Team</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Immediate Feedback - Constraints */}
              <div className="flex items-start gap-2 p-3 rounded-md bg-background border">
                <AlertTriangle className="h-4 w-4 text-chart-4 mt-0.5 shrink-0" aria-hidden="true" />
                <p className="text-sm text-muted-foreground">
                  {assignmentType === 'round-robin' 
                    ? 'Tickets will be distributed evenly across all agents in the selected team'
                    : assignmentType === 'group'
                    ? 'The next available agent in the group will be assigned'
                    : 'Tickets will be assigned directly to the selected agent'}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-2 pt-4 border-t">
              <Button 
                variant="outline" 
                className="min-h-11 transition-all duration-200"
                data-testid="button-cancel"
                aria-label="Cancel rule creation"
              >
                Cancel
              </Button>
              <Button 
                className="min-h-11 transition-all duration-200"
                data-testid="button-save-rule"
                aria-label="Save assignment rule"
              >
                <CheckCircle2 className="h-4 w-4 mr-2" aria-hidden="true" />
                Save Rule
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Delete Confirmation Dialog - Error Prevention */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Assignment Rule?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the assignment rule
              {ruleToDelete && ` #${ruleToDelete}`} and stop automatic ticket assignments based on this rule.
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
              Delete Rule
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
