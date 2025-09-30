import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type TicketStatus =
  | "new"
  | "assigned"
  | "in-progress"
  | "on-hold"
  | "completed"
  | "reviewed"
  | "billed"
  | "waiting";

interface StatusBadgeProps {
  status: TicketStatus;
  className?: string;
}

const statusConfig: Record<
  TicketStatus,
  { label: string; className: string }
> = {
  new: {
    label: "New",
    className: "bg-chart-1/20 text-chart-1 hover:bg-chart-1/30",
  },
  assigned: {
    label: "Assigned",
    className: "bg-chart-4/20 text-chart-4 hover:bg-chart-4/30",
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-chart-4/20 text-chart-4 hover:bg-chart-4/30",
  },
  "on-hold": {
    label: "On Hold",
    className: "bg-chart-5/20 text-chart-5 hover:bg-chart-5/30",
  },
  completed: {
    label: "Completed",
    className: "bg-chart-2/20 text-chart-2 hover:bg-chart-2/30",
  },
  reviewed: {
    label: "Reviewed",
    className: "bg-chart-2/20 text-chart-2 hover:bg-chart-2/30",
  },
  billed: {
    label: "Billed",
    className: "bg-muted text-muted-foreground hover:bg-muted/80",
  },
  waiting: {
    label: "Waiting",
    className: "bg-chart-3/20 text-chart-3 hover:bg-chart-3/30",
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <Badge
      variant="outline"
      className={cn(
        "border-0 font-medium",
        config.className,
        className
      )}
      data-testid={`badge-status-${status}`}
    >
      {config.label}
    </Badge>
  );
}
