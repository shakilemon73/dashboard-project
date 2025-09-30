import { MetricCard } from '../MetricCard';
import { Building, Users, UserCog, Ticket } from 'lucide-react';

export default function MetricCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <MetricCard
        title="MSPs"
        value={15}
        trend={{ value: 12, isPositive: true }}
        icon={<Building className="h-4 w-4" />}
      />
      <MetricCard
        title="Companies"
        value={87}
        trend={{ value: 5, isPositive: true }}
        icon={<Building className="h-4 w-4" />}
      />
      <MetricCard
        title="Agents"
        value={10}
        icon={<UserCog className="h-4 w-4" />}
      />
      <MetricCard
        title="Total Tickets"
        value={1266}
        trend={{ value: 8, isPositive: false }}
        icon={<Ticket className="h-4 w-4" />}
      />
    </div>
  );
}
