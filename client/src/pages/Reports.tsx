import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Plus, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const reportTemplates = [
  { id: 1, name: "Agent Performance Report", description: "Track agent productivity and customer satisfaction", frequency: "Weekly", lastRun: "2 days ago" },
  { id: 2, name: "Ticket Volume Analysis", description: "Analyze ticket trends and patterns", frequency: "Daily", lastRun: "5 hours ago" },
  { id: 3, name: "SLA Compliance Report", description: "Monitor SLA performance across all tickets", frequency: "Weekly", lastRun: "1 day ago" },
  { id: 4, name: "Customer Satisfaction Survey", description: "Aggregate CSAT scores and feedback", frequency: "Monthly", lastRun: "1 week ago" },
];

const recentReports = [
  { id: 1, name: "September Agent Performance", date: "2024-09-28", size: "2.4 MB", format: "PDF" },
  { id: 2, name: "Q3 Ticket Analysis", date: "2024-09-25", size: "1.8 MB", format: "Excel" },
  { id: 3, name: "Weekly SLA Report", date: "2024-09-27", size: "890 KB", format: "PDF" },
  { id: 4, name: "Customer Feedback Summary", date: "2024-09-20", size: "1.2 MB", format: "PDF" },
];

export default function Reports() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold" data-testid="text-page-title">Reports & Statistics</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Easily access data and reports to get tailored insights relevant to your daily operations
            </p>
          </div>
          <Button data-testid="button-create-report">
            <Plus className="h-4 w-4 mr-2" />
            Create Report
          </Button>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Report Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reportTemplates.map((template) => (
              <Card key={template.id} className="hover-elevate" data-testid={`card-template-${template.id}`}>
                <CardHeader className="flex flex-row items-start justify-between gap-2 space-y-0">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                      <BarChart3 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{template.frequency}</Badge>
                      <span className="text-xs text-muted-foreground">Last run: {template.lastRun}</span>
                    </div>
                    <Button size="sm" data-testid={`button-run-${template.id}`}>Run Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
          <div className="space-y-2">
            {recentReports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between p-4 rounded-md border hover-elevate"
                data-testid={`row-report-${report.id}`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{report.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {report.date} • {report.size} • {report.format}
                    </p>
                  </div>
                </div>

                <Button variant="outline" size="sm" data-testid={`button-download-${report.id}`}>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
