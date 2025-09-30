import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Search, Copy, Edit, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const categories = ["General", "Technical", "Billing", "Account"];

const savedAnswers = [
  {
    id: 1,
    title: "Password Reset Instructions",
    category: "Account",
    content: "Hi {{customer_name}},\n\nTo reset your password, please follow these steps:\n1. Go to the login page\n2. Click 'Forgot Password'\n3. Enter your email address\n4. Check your inbox for the reset link\n\nIf you don't receive the email within 5 minutes, please check your spam folder.\n\nBest regards,\n{{agent_name}}",
    usageCount: 145,
  },
  {
    id: 2,
    title: "Refund Policy Explanation",
    category: "Billing",
    content: "Hello {{customer_name}},\n\nThank you for reaching out. Our refund policy is as follows:\n- Full refund within 30 days of purchase\n- No questions asked\n- Processing time: 5-7 business days\n\nTo process your refund, please provide:\n- Order number\n- Reason for refund (optional)\n\nLet me know how you'd like to proceed.\n\nBest regards,\n{{agent_name}}",
    usageCount: 89,
  },
  {
    id: 3,
    title: "API Rate Limit Information",
    category: "Technical",
    content: "Hi {{customer_name}},\n\nOur API rate limits are:\n- Free tier: 100 requests/hour\n- Pro tier: 1,000 requests/hour\n- Enterprise: Custom limits\n\nIf you're hitting the rate limit, consider:\n1. Implementing request caching\n2. Upgrading your plan\n3. Optimizing your API calls\n\nWould you like help with any of these?\n\nBest regards,\n{{agent_name}}",
    usageCount: 67,
  },
];

export default function SavedAnswers() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold" data-testid="text-page-title">Saved Answers</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Respond quickly and consistently to frequently asked questions with canned responses
            </p>
          </div>
          <Button data-testid="button-create-answer">
            <Plus className="h-4 w-4 mr-2" />
            Create Answer
          </Button>
        </div>

        <div className="flex gap-4">
          <Card className="w-64 p-4">
            <h3 className="text-sm font-semibold mb-3">Categories</h3>
            <div className="space-y-1">
              <Button
                variant={selectedCategory === "All" ? "secondary" : "ghost"}
                className="w-full justify-start"
                size="sm"
                onClick={() => setSelectedCategory("All")}
                data-testid="button-category-all"
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`button-category-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </Card>

          <div className="flex-1 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search saved answers..."
                className="pl-9"
                data-testid="input-search"
              />
            </div>

            <div className="grid gap-4">
              {savedAnswers.map((answer) => (
                <Card key={answer.id} className="p-4" data-testid={`card-answer-${answer.id}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{answer.title}</h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{answer.category}</Badge>
                        <span className="text-xs text-muted-foreground">
                          Used {answer.usageCount} times
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" data-testid={`button-copy-${answer.id}`}>
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" data-testid={`button-edit-${answer.id}`}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" data-testid={`button-delete-${answer.id}`}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-3 rounded-md bg-muted/50 border">
                    <p className="text-sm whitespace-pre-wrap font-mono">{answer.content}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Variables: {`{{customer_name}}, {{agent_name}}`}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
