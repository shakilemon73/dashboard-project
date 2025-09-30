import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon?: React.ReactNode;
  description?: string;
}

export function MetricCard({ title, value, trend, icon, description }: MetricCardProps) {
  return (
    <Card 
      className="hover-elevate transition-all duration-300 group"
      data-testid={`card-metric-${title.toLowerCase().replace(/\s+/g, "-")}`}
      role="article"
      aria-label={`${title} metric: ${value}${trend ? `, ${trend.isPositive ? 'up' : 'down'} ${trend.value}%` : ''}`}
    >
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-3">
        <div className="space-y-1 flex-1">
          <p className="text-sm font-medium text-muted-foreground">
            {title}
          </p>
          {description && (
            <p className="text-xs text-muted-foreground/70 sr-only">
              {description}
            </p>
          )}
        </div>
        {icon && (
          <div 
            className="text-muted-foreground transition-transform duration-300 group-hover:scale-110" 
            aria-hidden="true"
          >
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between gap-4">
          <p 
            className="text-3xl font-bold tabular-nums tracking-tight" 
            data-testid={`text-metric-value-${title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {value}
          </p>
          {trend && (
            <div
              className={cn(
                "flex items-center gap-1 text-xs font-medium transition-all duration-200 min-h-8 px-2 py-1 rounded-md",
                trend.isPositive 
                  ? "text-chart-2 bg-chart-2/10" 
                  : "text-chart-5 bg-chart-5/10"
              )}
              role="status"
              aria-label={`Trend: ${trend.isPositive ? 'increase' : 'decrease'} of ${Math.abs(trend.value)} percent`}
            >
              {trend.isPositive ? (
                <ArrowUp className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5" aria-hidden="true" />
              ) : (
                <ArrowDown className="h-3 w-3 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
              )}
              <span className="tabular-nums">{Math.abs(trend.value)}%</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
