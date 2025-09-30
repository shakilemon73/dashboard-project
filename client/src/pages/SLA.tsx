import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Edit, Trash2, Clock, Target, AlertCircle, CheckCircle2, TrendingUp, ArrowRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const slaRules = [
  { 
    id: 1, 
    name: "Priority - Critical", 
    responseTime: "1 hour", 
    resolutionTime: "4 hours", 
    businessHours: true, 
    categories: ["Technical", "Security"], 
    active: true,
    performance: { met: 95, atRisk: 3, breached: 2 }
  },
  { 
    id: 2, 
    name: "High Priority", 
    responseTime: "2 hours", 
    resolutionTime: "8 hours", 
    businessHours: true, 
    categories: ["Billing", "Technical"], 
    active: true,
    performance: { met: 92, atRisk: 5, breached: 3 }
  },
  { 
    id: 3, 
    name: "Normal Priority", 
    responseTime: "4 hours", 
    resolutionTime: "24 hours", 
    businessHours: true, 
    categories: ["All"], 
    active: true,
    performance: { met: 97, atRisk: 2, breached: 1 }
  },
  { 
    id: 4, 
    name: "Low Priority", 
    responseTime: "24 hours", 
    resolutionTime: "72 hours", 
    businessHours: false, 
    categories: ["General"], 
    active: true,
    performance: { met: 98, atRisk: 1, breached: 1 }
  },
];

export default function SLA() {
  const [selectedSLA, setSelectedSLA] = useState<number | null>(null);

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 95) return "text-chart-2";
    if (percentage >= 80) return "text-chart-4";
    return "text-chart-5";
  };

  return (
    <div className="flex-1 overflow-auto" role="main" aria-label="SLA management page">
      <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
        {/* Header Section - Goal-Oriented with Clear Context */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <h1 
              className="text-2xl sm:text-3xl font-semibold tracking-tight" 
              data-testid="text-page-title"
              id="sla-title"
            >
              SLA Management
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Set response and resolution deadlines based on priority, business hours, and categories
            </p>
          </div>
          <Button 
            className="min-h-11 transition-all duration-200 self-start sm:self-auto"
            data-testid="button-create-sla"
            aria-label="Create new SLA rule"
          >
            <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
            Create SLA
          </Button>
        </header>

        <Separator className="my-6" />

        {/* Performance Summary - Information Chunking */}
        <section 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          aria-label="SLA performance overview"
          role="region"
        >
          <Card className="transition-all duration-200 hover-elevate">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">Total SLAs</p>
                  <p className="text-2xl sm:text-3xl font-bold tabular-nums" data-testid="text-total-slas">
                    {slaRules.length}
                  </p>
                </div>
                <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Target className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-200 hover-elevate">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">Active Rules</p>
                  <p className="text-2xl sm:text-3xl font-bold tabular-nums text-chart-2" data-testid="text-active-slas">
                    {slaRules.filter(s => s.active).length}
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
                  <p className="text-sm text-muted-foreground mb-1">Avg. Performance</p>
                  <p className="text-2xl sm:text-3xl font-bold tabular-nums text-chart-2" data-testid="text-avg-performance">
                    95%
                  </p>
                </div>
                <div className="h-12 w-12 rounded-md bg-chart-2/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="h-6 w-6 text-chart-2" aria-hidden="true" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-200 hover-elevate">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">At Risk</p>
                  <p className="text-2xl sm:text-3xl font-bold tabular-nums text-chart-4" data-testid="text-at-risk">
                    11
                  </p>
                </div>
                <div className="h-12 w-12 rounded-md bg-chart-4/10 flex items-center justify-center shrink-0">
                  <AlertCircle className="h-6 w-6 text-chart-4" aria-hidden="true" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* SLA Rules List - Information Chunking with Visual Hierarchy */}
        <section 
          className="space-y-4"
          role="list"
          aria-label="List of SLA rules"
        >
          <h2 className="text-lg font-semibold">SLA Rules</h2>
          
          {slaRules.map((sla) => (
            <Card 
              key={sla.id}
              className={`transition-all duration-200 hover-elevate ${
                selectedSLA === sla.id ? 'ring-2 ring-primary' : ''
              }`}
              data-testid={`card-sla-${sla.id}`}
              role="listitem"
              onClick={() => setSelectedSLA(sla.id)}
              tabIndex={0}
              aria-label={`SLA rule: ${sla.name}`}
            >
              <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0 pb-4">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-110">
                    <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-lg" data-testid={`text-name-${sla.id}`}>
                        {sla.name}
                      </h3>
                      <Badge 
                        variant={sla.active ? "default" : "secondary"}
                        className="self-start transition-all duration-200"
                        aria-label={sla.active ? "Active" : "Inactive"}
                      >
                        {sla.active ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {sla.businessHours ? "Business Hours Only" : "24/7 Coverage"}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 shrink-0">
                  <Switch 
                    checked={sla.active} 
                    className="transition-all duration-200"
                    data-testid={`switch-active-${sla.id}`}
                    aria-label={`Toggle ${sla.name} ${sla.active ? 'off' : 'on'}`}
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="min-h-11 min-w-11 transition-all duration-200"
                    data-testid={`button-edit-${sla.id}`}
                    aria-label={`Edit ${sla.name}`}
                  >
                    <Edit className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="min-h-11 min-w-11 transition-all duration-200 hover:text-destructive"
                    data-testid={`button-delete-${sla.id}`}
                    aria-label={`Delete ${sla.name}`}
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Time Targets - Clear Visual Hierarchy */}
                <div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  role="group"
                  aria-label="Time targets"
                >
                  <div className="p-4 rounded-md border bg-muted/50 transition-all duration-200 hover-elevate">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <p className="text-sm font-medium text-muted-foreground">Response Time</p>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    </div>
                    <p className="text-xl font-bold text-chart-4" data-testid={`text-response-${sla.id}`}>
                      {sla.responseTime}
                    </p>
                  </div>

                  <div className="p-4 rounded-md border bg-muted/50 transition-all duration-200 hover-elevate">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <p className="text-sm font-medium text-muted-foreground">Resolution Time</p>
                      <Target className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    </div>
                    <p className="text-xl font-bold text-chart-1" data-testid={`text-resolution-${sla.id}`}>
                      {sla.resolutionTime}
                    </p>
                  </div>
                </div>

                {/* Performance Metrics - Delightful Micro-interactions */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Performance</span>
                    <span 
                      className={`font-bold tabular-nums ${getPerformanceColor(sla.performance.met)}`}
                      aria-label={`${sla.performance.met}% of targets met`}
                    >
                      {sla.performance.met}% Met
                    </span>
                  </div>
                  <div 
                    className="flex h-2 rounded-full overflow-hidden bg-muted transition-all duration-300"
                    role="progressbar"
                    aria-label={`SLA performance: ${sla.performance.met}% met, ${sla.performance.atRisk}% at risk, ${sla.performance.breached}% breached`}
                    aria-valuenow={sla.performance.met}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="bg-chart-2 transition-all duration-500 hover:opacity-80"
                      style={{ width: `${sla.performance.met}%` }}
                      title="Met"
                    />
                    <div
                      className="bg-chart-4 transition-all duration-500 hover:opacity-80"
                      style={{ width: `${sla.performance.atRisk}%` }}
                      title="At risk"
                    />
                    <div
                      className="bg-chart-5 transition-all duration-500 hover:opacity-80"
                      style={{ width: `${sla.performance.breached}%` }}
                      title="Breached"
                    />
                  </div>
                </div>

                {/* Categories - Recognition over Recall */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-muted-foreground">Categories:</span>
                  {sla.categories.map((category, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="text-xs transition-all duration-200"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Create New SLA Form - Goal-Oriented Design */}
        <Card className="transition-all duration-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" aria-hidden="true" />
              Create New SLA Rule
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Define response and resolution targets to ensure timely ticket handling
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="sla-name" className="text-sm font-medium">
                SLA Name
              </Label>
              <Input
                id="sla-name"
                placeholder="e.g., Priority - Critical"
                className="min-h-11 transition-all duration-200 focus:ring-2"
                data-testid="input-sla-name"
                aria-label="SLA rule name"
                aria-required="true"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="response-time" className="text-sm font-medium">
                  Response Time Target
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="response-time"
                    type="number"
                    placeholder="24"
                    className="min-h-11 transition-all duration-200 focus:ring-2"
                    data-testid="input-response-time"
                    aria-label="Response time value"
                    aria-required="true"
                  />
                  <Select defaultValue="hours">
                    <SelectTrigger 
                      className="w-32 min-h-11 transition-all duration-200" 
                      data-testid="select-response-unit"
                      aria-label="Response time unit"
                    >
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
                <Label htmlFor="resolution-time" className="text-sm font-medium">
                  Resolution Time Target
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="resolution-time"
                    type="number"
                    placeholder="72"
                    className="min-h-11 transition-all duration-200 focus:ring-2"
                    data-testid="input-resolution-time"
                    aria-label="Resolution time value"
                    aria-required="true"
                  />
                  <Select defaultValue="hours">
                    <SelectTrigger 
                      className="w-32 min-h-11 transition-all duration-200" 
                      data-testid="select-resolution-unit"
                      aria-label="Resolution time unit"
                    >
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

            <div className="flex items-center gap-3 p-4 rounded-md border bg-muted/50 transition-all duration-200 hover-elevate">
              <Switch 
                id="business-hours" 
                className="transition-all duration-200"
                data-testid="switch-business-hours"
                aria-label="Apply only during business hours"
              />
              <Label 
                htmlFor="business-hours" 
                className="cursor-pointer text-sm font-medium flex-1"
              >
                Apply only during business hours (Mon-Fri, 9 AM - 5 PM)
              </Label>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-2 pt-4 border-t">
              <Button 
                variant="outline" 
                className="min-h-11 transition-all duration-200"
                data-testid="button-cancel"
                aria-label="Cancel SLA creation"
              >
                Cancel
              </Button>
              <Button 
                className="min-h-11 transition-all duration-200"
                data-testid="button-save-sla"
                aria-label="Save new SLA rule"
              >
                <CheckCircle2 className="h-4 w-4 mr-2" aria-hidden="true" />
                Save SLA Rule
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
