# Support Ticket System - Comprehensive Design Guidelines

## Design Approach: Modern SaaS Productivity System

**Selected Approach**: Design System-based with Linear/Notion-inspired patterns
**Justification**: Information-dense productivity tool requiring clarity, efficiency, and professional aesthetics
**Key References**: Linear (interface patterns), Intercom (helpdesk UX), Notion (data organization)

---

## Core Design Principles

1. **Information Clarity First**: Every pixel serves data comprehension
2. **Rapid Navigation**: 2-click access to any critical function
3. **Status Visibility**: Real-time feedback on all ticket states
4. **Collaborative Context**: Team awareness built into every interaction

---

## Color System

### Light Mode
- **Primary Brand**: 220 75% 50% (Professional blue for trust/reliability)
- **Secondary Action**: 220 70% 45% (Darker blue for hierarchy)
- **Success States**: 142 70% 45% (Ticket resolved, SLA met)
- **Warning States**: 38 92% 50% (SLA approaching deadline)
- **Error States**: 0 84% 60% (Ticket overdue, critical issues)
- **Neutral Grays**: 220 10% 98% (backgrounds) to 220 10% 20% (text)

### Dark Mode
- **Primary Brand**: 220 75% 55% (Brighter for contrast)
- **Secondary Action**: 220 70% 60%
- **Success States**: 142 60% 50%
- **Warning States**: 38 90% 55%
- **Error States**: 0 75% 65%
- **Neutral Grays**: 220 15% 10% (backgrounds) to 220 5% 95% (text)

### Status Color System
- **New Ticket**: 220 75% 50% (Primary blue)
- **In Progress**: 38 92% 50% (Amber)
- **Awaiting Customer**: 280 60% 50% (Purple)
- **Resolved**: 142 70% 45% (Green)
- **Closed**: 220 10% 40% (Gray)

---

## Typography

**Font Stack**: 
- **Primary**: 'Inter' for UI elements, data, and navigation
- **Mono**: 'JetBrains Mono' for ticket IDs, timestamps, technical data

**Scale**:
- **Display (Dashboard Headers)**: text-3xl font-semibold (30px)
- **Page Titles**: text-2xl font-semibold (24px)
- **Section Headers**: text-xl font-semibold (20px)
- **Card Titles**: text-lg font-medium (18px)
- **Body Text**: text-sm font-normal (14px)
- **Metadata/Captions**: text-xs font-normal (12px)
- **Ticket IDs**: text-xs font-mono tracking-tight

---

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, and 8
- **Micro spacing**: p-2, gap-2 (8px) - within components
- **Component spacing**: p-4, gap-4 (16px) - card padding, form fields
- **Section spacing**: p-6, gap-6 (24px) - between card groups
- **Page spacing**: p-8, gap-8 (32px) - page margins, major sections

**Grid System**:
- **Sidebar**: fixed w-64 (256px) with collapsible to w-16
- **Main Content**: flex-1 with max-w-7xl container
- **Data Tables**: Full-width with horizontal scroll on mobile
- **Dashboard Cards**: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 for metrics

---

## Component Library

### Navigation Architecture
**Primary Sidebar** (All Pages):
- Fixed left navigation (w-64)
- Grouped menu items: Dashboard, Tickets (Inbox, Assignment, Topics), Automation (Rules, Saved Answers), Team (Collaboration, Permissions), Reports
- Active state: bg-primary/10 with left border accent
- Expandable sections for sub-navigation
- User profile footer with quick settings

**Top Bar** (All Pages):
- Search bar (1/3 width, left-aligned)
- Breadcrumb navigation (center)
- Notifications + User menu (right-aligned)

### Dashboard Page Components
**Metric Cards** (4-column grid):
- Large number display (text-3xl font-bold)
- Label + trend indicator (↑↓ with percentage)
- Sparkline chart (24px height)
- Click to drill-down capability

**Ticket Status Overview**:
- Donut chart (center: total tickets)
- Legend with status breakdown + counts
- Interactive segments (hover reveals details)

**Recent Activity Feed**:
- Timeline layout (vertical line connector)
- Avatar + action + timestamp
- Ticket ID link (monospace, clickable)

**SLA Performance Widget**:
- Progress bars for each SLA tier
- Color-coded: green (met), amber (at-risk), red (breached)
- Percentage text overlay

### Inbox Page Layout
**Multi-Panel Design**:
- Left: Ticket list (w-96, scrollable)
  - Compact card per ticket: ID, subject, customer, status badge, timestamp
  - Sort/filter controls at top
  - Unread indicator (blue dot)
  
- Right: Ticket detail (flex-1)
  - Sticky header: Title, status dropdown, assign dropdown, priority
  - Conversation thread (chronological)
  - Rich text reply editor (bottom, sticky)
  - Sidebar: Customer info, ticket metadata, related tickets

### Ticket Assignment Page
**Rule Builder Interface**:
- Condition blocks (if-then-else logic)
- Dropdown selectors for: keywords, categories, priority
- Team/agent picker (searchable dropdown with avatars)
- Visual connector lines between conditions
- Test simulation panel (right sidebar)

### Ticket Topics/Categories
**Hierarchical Tree View**:
- Expandable/collapsible categories
- Drag-to-reorder capability
- Inline edit mode
- Metadata panel: Associated fields (software version, plugin, error type)
- Tag-based filtering at top

### SLA Management
**Table Layout with Inline Editing**:
- Columns: SLA Name, Response Time, Resolution Time, Business Hours, Categories
- Time picker inputs (hours/days dropdowns)
- Color-coded priority badges
- Bulk action toolbar (activate, deactivate, duplicate)

### Automation Rules
**Card-Based Rule Gallery**:
- 3-column grid of rule cards
- Card contents: Rule name, trigger icon, action summary, enabled toggle
- "+ New Rule" prominent card
- Modal for rule creation: Trigger selection, condition builder, action picker
- Preview pane showing rule logic flow

### Saved Answers Library
**Two-Column Layout**:
- Left: Category tree + search (w-72)
- Right: Answer cards in grid
  - Card: Title, snippet (truncated), usage count, last updated
  - Click to expand: Full content with variables highlighted
  - Rich text editor for creation/editing

### Teamwork/Collaboration Pages
**Conversation View**:
- Slack-inspired message threading
- @mentions with autocomplete
- File attachment previews
- Inline ticket references (auto-linked)
- Real-time presence indicators

**Joint Editing Interface**:
- Google Docs-style collaborative editor
- Cursor presence (color-coded by user)
- Version history sidebar
- Comment threads in margin

### Email Integration Setup
**Connection Wizard**:
- Step indicator progress bar
- Provider selection (Gmail, Outlook, custom IMAP)
- OAuth flow or credential input
- Folder mapping interface
- Test connection with sample email fetch

### Reporting & Analytics
**Dashboard Builder**:
- Widget library (left sidebar): Charts, tables, metrics
- Drag-and-drop canvas (grid-based)
- Widget configuration panel (right)
- Date range picker (top bar)
- Export options (PDF, CSV, scheduled email)

**Chart Types**:
- Line charts: Ticket trends over time
- Bar charts: Category distribution
- Heat maps: Activity by hour/day
- Tables: Agent performance metrics

---

## Iconography

**Icon System**: Heroicons (outline for navigation, solid for actions)
- **Dashboard**: chart-bar
- **Inbox**: inbox
- **Assignment**: user-group
- **Topics**: tag
- **SLA**: clock
- **Status**: check-circle, x-circle, arrow-path
- **Automation**: bolt
- **Saved Answers**: chat-bubble-left-right
- **Team**: users
- **Reports**: document-chart-bar
- **Notifications**: bell
- **Search**: magnifying-glass

---

## Data Visualization Standards

**Tables**: 
- Striped rows (subtle gray-50/gray-900)
- Hover state: bg-gray-100/800
- Sortable headers with arrow indicators
- Inline actions (right-aligned icon buttons)
- Sticky header on scroll

**Status Badges**:
- Rounded-full px-3 py-1
- Color-coded backgrounds (20% opacity)
- Full-color text
- Dot indicator prefix

**Priority Indicators**:
- Urgent: Red filled circle
- High: Orange filled triangle
- Normal: Blue outline square
- Low: Gray outline dash

---

## Responsive Behavior

**Desktop (lg+)**: Full multi-panel layouts
**Tablet (md)**: Collapsible sidebar, stacked panels
**Mobile (base)**: 
- Hamburger menu navigation
- Single-column layouts
- Bottom sheet for ticket details
- Swipe actions on ticket cards

---

## Interactive States

**Buttons**:
- Primary: bg-primary hover:bg-primary/90 shadow-sm
- Secondary: bg-white dark:bg-gray-800 border hover:bg-gray-50
- Ghost: hover:bg-gray-100 dark:hover:bg-gray-800

**Form Inputs**:
- Border: border-gray-300 dark:border-gray-600
- Focus: ring-2 ring-primary/20 border-primary
- Error: border-red-500 ring-red-500/20

**Cards**:
- Default: bg-white dark:bg-gray-800 border shadow-sm
- Hover: shadow-md border-gray-300 (for clickable cards)

---

## Accessibility Requirements

- WCAG AA contrast ratios (4.5:1 text, 3:1 UI)
- Keyboard navigation for all interactions
- Screen reader labels on icon-only buttons
- Focus indicators (2px ring, primary color)
- Error messages with icons + text

---

## Images

**Dashboard Hero/Empty States**:
- Illustration style: Minimalist line art in brand colors
- Placement: Center of empty inbox/reports with explanatory text
- No large hero images (utility-focused interface)

**User Avatars**:
- Circular, 32px standard size
- Initials fallback with generated background colors
- Presence indicator (bottom-right, 8px dot)

---

## Performance Targets

- Initial load: <2s
- Page transitions: <200ms
- Real-time updates: WebSocket with <100ms latency
- Pagination: 50 tickets per page load
- Lazy load ticket conversations (load on scroll)