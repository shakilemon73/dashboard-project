import { StatusBadge } from '../StatusBadge';

export default function StatusBadgeExample() {
  return (
    <div className="flex flex-wrap gap-2 p-4">
      <StatusBadge status="new" />
      <StatusBadge status="assigned" />
      <StatusBadge status="in-progress" />
      <StatusBadge status="on-hold" />
      <StatusBadge status="completed" />
      <StatusBadge status="reviewed" />
      <StatusBadge status="billed" />
      <StatusBadge status="waiting" />
    </div>
  );
}
