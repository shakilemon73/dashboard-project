import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Edit, Trash2, Tag, List, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

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
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex-1 overflow-auto" role="main" aria-label="Topics management page">
      <div className="p-6 md:p-8 space-y-8">
        {/* Header Section - Scannable and Clear */}
        <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h1 
              className="text-3xl font-bold tracking-tight" 
              data-testid="text-page-title"
              id="page-title"
            >
              Ticket Topics
            </h1>
            <p 
              className="text-base text-muted-foreground max-w-2xl"
              id="page-description"
            >
              Create ticket topics with important information such as categories, software used, plugin version, and error messages
            </p>
          </div>
          <Button 
            data-testid="button-create-topic"
            className="min-h-11 shrink-0 transition-all duration-200"
            aria-label="Create new topic"
          >
            <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
            Create Topic
          </Button>
        </header>

        {/* Search Section - Familiar Convention */}
        <Card className="p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="topic-search" className="text-sm font-medium">
                Search Topics
              </Label>
              <div className="relative">
                <Tag 
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" 
                  aria-hidden="true"
                />
                <Input
                  id="topic-search"
                  placeholder="Search by topic name or category..."
                  className="pl-10 min-h-11 transition-all duration-200 focus:ring-2"
                  data-testid="input-search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search topics by name or category"
                  aria-describedby="search-hint"
                />
              </div>
              <p id="search-hint" className="text-xs text-muted-foreground sr-only">
                Type to filter topics by name or subcategory
              </p>
            </div>
          </div>
        </Card>

        {/* Topics List - Scannable Layout */}
        <div 
          className="grid gap-4" 
          role="list" 
          aria-label="List of topics"
          aria-describedby="page-description"
        >
          {topics.map((topic) => (
            <Card 
              key={topic.id} 
              className="p-6 hover-elevate transition-all duration-200 focus-within:ring-2 focus-within:ring-primary" 
              data-testid={`card-topic-${topic.id}`}
              role="listitem"
              aria-label={`Topic: ${topic.name}, ${topic.ticketCount} tickets`}
              tabIndex={0}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6">
                {/* Topic Icon - Recognition */}
                <div className="flex-shrink-0">
                  <Avatar className="h-14 w-14 sm:h-16 sm:w-16 transition-transform duration-200 hover:scale-105">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      <Tag className="h-7 w-7" aria-hidden="true" />
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Topic Info - Information Chunking */}
                <div className="flex-1 min-w-0 space-y-4">
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 flex-wrap">
                      <h2 
                        className="text-lg font-semibold" 
                        data-testid={`text-name-${topic.id}`}
                      >
                        {topic.name}
                      </h2>
                      <Badge 
                        variant="secondary" 
                        className="text-xs self-start transition-all duration-200"
                        aria-label={`${topic.ticketCount} tickets using this topic`}
                      >
                        <FileText className="h-3 w-3 mr-1" aria-hidden="true" />
                        {topic.ticketCount} tickets
                      </Badge>
                    </div>
                    
                    {/* Subcategories - Easy to Scan */}
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">
                        <List className="h-3 w-3 inline mr-1" aria-hidden="true" />
                        Subcategories
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {topic.subcategories.map((sub) => (
                          <Badge 
                            key={sub} 
                            variant="outline" 
                            className="text-xs transition-all duration-200"
                            aria-label={`Subcategory: ${sub}`}
                          >
                            {sub}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Custom Fields - Clear Sections */}
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">
                      Custom Fields
                    </p>
                    <div 
                      className="flex flex-wrap gap-2"
                      role="list"
                      aria-label="Custom fields for this topic"
                    >
                      {topic.fields.map((field) => (
                        <div 
                          key={field} 
                          className="flex items-center gap-1 px-3 py-1.5 rounded-md border bg-muted/50 text-sm transition-all duration-200 hover-elevate"
                          role="listitem"
                        >
                          <span>{field}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons - Touch-friendly */}
                <div 
                  className="flex gap-2 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l lg:pl-6" 
                  role="group" 
                  aria-label="Topic actions"
                >
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="min-h-11 min-w-11 transition-all duration-200"
                    data-testid={`button-edit-${topic.id}`}
                    aria-label={`Edit ${topic.name}`}
                  >
                    <Edit className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="min-h-11 min-w-11 transition-all duration-200 hover:text-destructive"
                    data-testid={`button-delete-${topic.id}`}
                    aria-label={`Delete ${topic.name}`}
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State - Clear Feedback */}
        {topics.length === 0 && (
          <div className="text-center py-12 space-y-3" role="status">
            <Tag className="h-12 w-12 mx-auto text-muted-foreground opacity-50" aria-hidden="true" />
            <p className="text-lg font-medium text-muted-foreground">No topics found</p>
            <p className="text-sm text-muted-foreground">Try adjusting your search or create a new topic to get started</p>
          </div>
        )}

        <Separator />

        {/* Create New Topic Form - Familiar Convention */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Create New Topic</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="topic-name" className="text-sm font-medium">
                Topic Name
              </Label>
              <Input
                id="topic-name"
                placeholder="e.g., Technical Issues, Billing Questions"
                className="min-h-11 transition-all duration-200 focus:ring-2"
                data-testid="input-topic-name"
                aria-label="Enter topic name"
              />
              <p className="text-xs text-muted-foreground">
                A clear, descriptive name for this ticket category
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subcategories" className="text-sm font-medium">
                Subcategories
              </Label>
              <Input
                id="subcategories"
                placeholder="Separate with commas: API, Database, Performance"
                className="min-h-11 transition-all duration-200 focus:ring-2"
                data-testid="input-subcategories"
                aria-label="Enter subcategories separated by commas"
              />
              <p className="text-xs text-muted-foreground">
                Comma-separated subcategories to organize tickets within this topic
              </p>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Custom Fields</Label>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Input 
                    placeholder="Field name" 
                    className="min-h-11 transition-all duration-200 focus:ring-2"
                    data-testid="input-field-name"
                    aria-label="Enter custom field name"
                  />
                  <Button 
                    variant="outline" 
                    className="min-h-11 min-w-11 transition-all duration-200"
                    data-testid="button-add-field"
                    aria-label="Add custom field"
                  >
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Add custom fields like "Software Version", "Plugin Version", "Error Message", etc.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-2 pt-4">
              <Button 
                variant="outline" 
                className="min-h-11 transition-all duration-200"
                data-testid="button-cancel"
                aria-label="Cancel topic creation"
              >
                Cancel
              </Button>
              <Button 
                className="min-h-11 transition-all duration-200"
                data-testid="button-save-topic"
                aria-label="Save new topic"
              >
                Save Topic
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
