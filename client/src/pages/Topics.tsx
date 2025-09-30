import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Edit, Trash2, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const topics = [
  { 
    id: 1, 
    name: "Technical Issues", 
    subcategories: ["API", "Database", "Performance"], 
    fields: ["Software Version", "Error Message", "Steps to Reproduce"],
    ticketCount: 234
  },
  { 
    id: 2, 
    name: "Billing & Payments", 
    subcategories: ["Invoices", "Subscriptions", "Refunds"], 
    fields: ["Invoice Number", "Payment Method", "Amount"],
    ticketCount: 89
  },
  { 
    id: 3, 
    name: "Feature Requests", 
    subcategories: ["UI/UX", "Integrations", "Performance"], 
    fields: ["Feature Category", "Use Case", "Priority Level"],
    ticketCount: 156
  },
  { 
    id: 4, 
    name: "Account Management", 
    subcategories: ["Login Issues", "Password Reset", "Profile"], 
    fields: ["Account Email", "Issue Type"],
    ticketCount: 67
  },
];

export default function Topics() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold" data-testid="text-page-title">Ticket Topics</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Create ticket topics with important information such as categories, software used, plugin version, and error messages
            </p>
          </div>
          <Button data-testid="button-create-topic">
            <Plus className="h-4 w-4 mr-2" />
            Create Topic
          </Button>
        </div>

        <div className="grid gap-4">
          {topics.map((topic) => (
            <Card key={topic.id} className="p-6 hover-elevate" data-testid={`card-topic-${topic.id}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{topic.name}</h3>
                    <Badge variant="secondary">{topic.ticketCount} tickets</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {topic.subcategories.map((sub) => (
                      <Badge key={sub} variant="outline" className="text-xs">
                        {sub}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" data-testid={`button-edit-${topic.id}`}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" data-testid={`button-delete-${topic.id}`}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Custom Fields</p>
                <div className="flex flex-wrap gap-2">
                  {topic.fields.map((field) => (
                    <div key={field} className="flex items-center gap-1 px-3 py-1 rounded-md border bg-muted/50">
                      <span className="text-sm">{field}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Create New Topic</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="topic-name">Topic Name</Label>
              <Input
                id="topic-name"
                placeholder="e.g., Technical Issues, Billing Questions"
                data-testid="input-topic-name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subcategories">Subcategories</Label>
              <Input
                id="subcategories"
                placeholder="Separate with commas: API, Database, Performance"
                data-testid="input-subcategories"
              />
            </div>

            <div className="space-y-2">
              <Label>Custom Fields</Label>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <Input placeholder="Field name" data-testid="input-field-name" />
                  <Button variant="outline" data-testid="button-add-field">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Add custom fields like "Software Version", "Plugin Version", "Error Message", etc.
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" data-testid="button-cancel">Cancel</Button>
              <Button data-testid="button-save-topic">Save Topic</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
