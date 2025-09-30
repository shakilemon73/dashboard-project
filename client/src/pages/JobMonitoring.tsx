import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/StatusBadge";
import { Activity, CheckCircle, XCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const jobs = [
  { id: 1, name: "Email to Ticket Sync", status: "completed", lastRun: "2 min ago", duration: "1.2s", nextRun: "In 5 min" },
  { id: 2, name: "SLA Deadline Monitor", status: "in-progress", lastRun: "Running", duration: "2.5s", nextRun: "Every 1 min" },
  { id: 3, name: "Auto-close Resolved Tickets", status: "completed", lastRun: "1 hour ago", duration: "3.8s", nextRun: "In 59 min" },
  { id: 4, name: "Generate Daily Reports", status: "waiting", lastRun: "12 hours ago", duration: "45.2s", nextRun: "Tomorrow 6:00 AM" },
  { id: 5, name: "Backup Database", status: "completed", lastRun: "3 hours ago", duration: "120.5s", nextRun: "In 21 hours" },
  { id: 6, name: "Clean Old Attachments", status: "on-hold", lastRun: "2 days ago", duration: "N/A", nextRun: "Paused" },
];

const jobHistory = [
  { id: 1, job: "Email to Ticket Sync", status: "success", started: "2024-09-30 10:30", duration: "1.2s", tickets: 12 },
  { id: 2, job: "SLA Deadline Monitor", status: "success", started: "2024-09-30 10:29", duration: "2.5s", tickets: 3 },
  { id: 3, job: "Email to Ticket Sync", status: "success", started: "2024-09-30 10:25", duration: "0.9s", tickets: 8 },
  { id: 4, job: "Auto-close Resolved Tickets", status: "success", started: "2024-09-30 09:30", duration: "3.8s", tickets: 15 },
  { id: 5, job: "Email to Ticket Sync", status: "failed", started: "2024-09-30 10:20", duration: "0.5s", tickets: 0 },
];

export default function JobMonitoring() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-semibold" data-testid="text-page-title">Job Monitoring</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Track background tasks, automated processes, and system operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                <Activity className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">6</p>
                <p className="text-xs text-muted-foreground">Total Jobs</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-chart-2/10">
                <CheckCircle className="h-5 w-5 text-chart-2" />
              </div>
              <div>
                <p className="text-2xl font-bold">4</p>
                <p className="text-xs text-muted-foreground">Completed</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-chart-4/10">
                <Clock className="h-5 w-5 text-chart-4" />
              </div>
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-xs text-muted-foreground">Running</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-chart-5/10">
                <XCircle className="h-5 w-5 text-chart-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-xs text-muted-foreground">Paused</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Active Jobs</h2>
          <div className="space-y-3">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="flex items-center justify-between p-4 rounded-md border hover-elevate"
                data-testid={`row-job-${job.id}`}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div>
                    <h4 className="font-medium text-sm mb-1">{job.name}</h4>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Last run: {job.lastRun}</span>
                      <span>•</span>
                      <span>Duration: {job.duration}</span>
                      <span>•</span>
                      <span>Next: {job.nextRun}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <StatusBadge status={job.status as any} />
                  <Button variant="outline" size="sm" data-testid={`button-view-${job.id}`}>
                    View Logs
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Job History</h2>
          <div className="border rounded-md">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left text-sm font-medium p-3">Job Name</th>
                    <th className="text-left text-sm font-medium p-3">Status</th>
                    <th className="text-left text-sm font-medium p-3">Started</th>
                    <th className="text-left text-sm font-medium p-3">Duration</th>
                    <th className="text-left text-sm font-medium p-3">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {jobHistory.map((entry) => (
                    <tr key={entry.id} className="border-t hover-elevate" data-testid={`row-history-${entry.id}`}>
                      <td className="p-3">
                        <span className="text-sm font-medium">{entry.job}</span>
                      </td>
                      <td className="p-3">
                        <Badge variant={entry.status === "success" ? "default" : "destructive"}>
                          {entry.status}
                        </Badge>
                      </td>
                      <td className="p-3">
                        <span className="text-sm text-muted-foreground">{entry.started}</span>
                      </td>
                      <td className="p-3">
                        <span className="text-sm">{entry.duration}</span>
                      </td>
                      <td className="p-3">
                        <span className="text-sm">{entry.tickets} tickets processed</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
