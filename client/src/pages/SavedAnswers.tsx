import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Copy, Edit, Trash2, Star, TrendingUp, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const categories = ["General", "Technical", "Billing", "Account"];

const savedAnswers = [
  {
    id: 1,
    title: "Password Reset Instructions",
    category: "Account",
    content: "Hi {{customer_name}},\n\nTo reset your password, please follow these steps:\n1. Go to the login page\n2. Click 'Forgot Password'\n3. Enter your email address\n4. Check your inbox for the reset link\n\nIf you don't receive the email within 5 minutes, please check your spam folder.\n\nBest regards,\n{{agent_name}}",
    usageCount: 145,
    lastUsed: "2 hours ago",
    isFavorite: true,
  },
  {
    id: 2,
    title: "Refund Policy Explanation",
    category: "Billing",
    content: "Hello {{customer_name}},\n\nThank you for reaching out. Our refund policy is as follows:\n- Full refund within 30 days of purchase\n- No questions asked\n- Processing time: 5-7 business days\n\nTo process your refund, please provide:\n- Order number\n- Reason for refund (optional)\n\nLet me know how you'd like to proceed.\n\nBest regards,\n{{agent_name}}",
    usageCount: 89,
    lastUsed: "1 day ago",
    isFavorite: false,
  },
  {
    id: 3,
    title: "API Rate Limit Information",
    category: "Technical",
    content: "Hi {{customer_name}},\n\nOur API rate limits are:\n- Free tier: 100 requests/hour\n- Pro tier: 1,000 requests/hour\n- Enterprise: Custom limits\n\nIf you're hitting the rate limit, consider:\n1. Implementing request caching\n2. Upgrading your plan\n3. Optimizing your API calls\n\nWould you like help with any of these?\n\nBest regards,\n{{agent_name}}",
    usageCount: 67,
    lastUsed: "3 hours ago",
    isFavorite: true,
  },
];

export default function SavedAnswers() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex-1 overflow-auto" role="main" aria-label="Saved answers page">
      <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
        {/* Header Section - Clear Purpose */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <h1 
              className="text-2xl sm:text-3xl font-semibold tracking-tight" 
              data-testid="text-page-title"
              id="saved-answers-title"
            >
              Saved Answers
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Respond quickly and consistently to frequently asked questions with canned responses
            </p>
          </div>
          <Button 
            className="min-h-11 transition-all duration-200 self-start sm:self-auto"
            data-testid="button-create-answer"
            aria-label="Create new saved answer"
          >
            <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
            Create Answer
          </Button>
        </header>

        <Separator className="my-6" />

        {/* Stats Overview - Recognition with Icons */}
        <section 
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          aria-label="Saved answers statistics"
          role="region"
        >
          <Card className="transition-all duration-200 hover-elevate">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">Total Templates</p>
                  <p className="text-2xl sm:text-3xl font-bold tabular-nums" data-testid="text-total-templates">
                    {savedAnswers.length}
                  </p>
                </div>
                <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Copy className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-200 hover-elevate">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">Most Used</p>
                  <p className="text-xl sm:text-2xl font-bold truncate" data-testid="text-most-used">
                    Password Reset
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
                  <p className="text-sm text-muted-foreground mb-1">Total Uses</p>
                  <p className="text-2xl sm:text-3xl font-bold tabular-nums text-chart-4" data-testid="text-total-uses">
                    301
                  </p>
                </div>
                <div className="h-12 w-12 rounded-md bg-chart-4/10 flex items-center justify-center shrink-0">
                  <Star className="h-6 w-6 text-chart-4" aria-hidden="true" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          {/* Categories Sidebar - Recognition over Recall */}
          <aside 
            className="space-y-4"
            role="navigation"
            aria-label="Answer categories"
          >
            <Card className="transition-all duration-200">
              <CardHeader>
                <h3 className="text-sm font-semibold">Categories</h3>
              </CardHeader>
              <CardContent className="space-y-1">
                <Button
                  variant={selectedCategory === "All" ? "default" : "ghost"}
                  className="w-full justify-start min-h-11 transition-all duration-200"
                  onClick={() => setSelectedCategory("All")}
                  data-testid="button-category-all"
                  aria-label="View all categories"
                  aria-pressed={selectedCategory === "All"}
                >
                  All Categories
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "ghost"}
                    className="w-full justify-start min-h-11 transition-all duration-200"
                    onClick={() => setSelectedCategory(category)}
                    data-testid={`button-category-${category.toLowerCase()}`}
                    aria-label={`View ${category} category`}
                    aria-pressed={selectedCategory === category}
                  >
                    {category}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions - Attention to Purpose */}
            <Card className="border-primary/20 bg-primary/5 transition-all duration-200">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-primary" aria-hidden="true" />
                  <h3 className="text-sm font-semibold">Quick Tip</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Use variables like {`{{customer_name}}`} and {`{{agent_name}}`} to personalize your responses automatically.
                </p>
              </CardContent>
            </Card>
          </aside>

          {/* Answers List - Easy Recognition */}
          <div className="space-y-4">
            {/* Search Bar - Recognition with Icon */}
            <div className="relative">
              <Search 
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" 
                aria-hidden="true"
              />
              <Input
                placeholder="Search saved answers by title or content..."
                className="pl-9 min-h-11 transition-all duration-200 focus:ring-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-search"
                aria-label="Search saved answers"
              />
            </div>

            {/* Answers Grid - Clear Hierarchy */}
            <section 
              className="space-y-4"
              role="list"
              aria-label="List of saved answers"
            >
              {savedAnswers.map((answer) => (
                <Card 
                  key={answer.id} 
                  className="transition-all duration-200 hover-elevate" 
                  data-testid={`card-answer-${answer.id}`}
                  role="listitem"
                >
                  <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0 pb-4">
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        {answer.isFavorite && (
                          <Star 
                            className="h-4 w-4 text-chart-4 fill-chart-4 shrink-0" 
                            aria-label="Favorite answer"
                          />
                        )}
                        <h3 className="font-semibold text-lg" data-testid={`text-title-${answer.id}`}>
                          {answer.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge 
                          variant="outline" 
                          className="transition-all duration-200"
                          aria-label={`Category: ${answer.category}`}
                        >
                          {answer.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <TrendingUp className="h-3 w-3" aria-hidden="true" />
                          <span data-testid={`text-usage-${answer.id}`}>
                            Used {answer.usageCount} times
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" aria-hidden="true" />
                          <span>{answer.lastUsed}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Actions - Direct Manipulation with Icons */}
                    <div className="flex items-center gap-1 shrink-0">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="min-h-11 min-w-11 transition-all duration-200"
                        data-testid={`button-copy-${answer.id}`}
                        aria-label={`Copy ${answer.title} to clipboard`}
                      >
                        <Copy className="h-4 w-4" aria-hidden="true" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="min-h-11 min-w-11 transition-all duration-200"
                        data-testid={`button-edit-${answer.id}`}
                        aria-label={`Edit ${answer.title}`}
                      >
                        <Edit className="h-4 w-4" aria-hidden="true" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="min-h-11 min-w-11 transition-all duration-200 hover:text-destructive"
                        data-testid={`button-delete-${answer.id}`}
                        aria-label={`Delete ${answer.title}`}
                      >
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    {/* Answer Preview - Visual Hierarchy */}
                    <div 
                      className="p-4 rounded-md bg-muted/50 border transition-all duration-200 hover-elevate"
                      role="region"
                      aria-label="Answer template preview"
                    >
                      <p className="text-sm whitespace-pre-wrap font-mono leading-relaxed">
                        {answer.content}
                      </p>
                    </div>

                    {/* Variables Info - Recognition */}
                    <div className="flex items-center gap-2 p-3 rounded-md bg-primary/5 border border-primary/20">
                      <Badge variant="outline" className="text-xs border-primary/20">
                        Variables
                      </Badge>
                      <p className="text-xs text-muted-foreground font-mono">
                        {`{{customer_name}}, {{agent_name}}`}
                      </p>
                    </div>

                    {/* Usage Stats - Attention */}
                    {answer.usageCount > 100 && (
                      <div className="flex items-center gap-2 p-3 rounded-md bg-chart-2/10 text-chart-2">
                        <TrendingUp className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span className="text-sm font-medium">
                          High-usage template - {answer.usageCount} uses
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
