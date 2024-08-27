import {
  LayoutDashboard,
  GraduationCap,
  File,
  UserPlus,
  CalendarDays,
  Users,
  Ticket,
  ClipboardList,
  BarChart3,
  Book,
} from 'lucide-react'; // Example import, adjust as needed

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface NavLinkType {
  href: string;
  label: string;
  icon?: IconType;
  children?: NavLinkType[];
}

export const navLinks: NavLinkType[] = [
  {
    href: '/',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    href: '/lms',
    label: 'LMS',
    icon: GraduationCap,
    children: [
      { href: '/lms/courses', label: 'Courses', icon: File },
      { href: '/lms/knowlegde', label: 'Knowledge Base', icon: Book }, 
      { href: '/lms/enrollments', label: 'Enrollments', icon: ClipboardList },
      { href: '/lms/reports', label: 'Reports', icon: BarChart3 },
      { href: '/lms/create-course', label: 'Create Course', icon: File },
    ],
  },
  {
    href: '/hr',
    label: 'HR Module',
    icon: Users,
    children: [
      { href: '/hr/onboarding', label: 'Onboarding', icon: UserPlus },
      { href: '/hr/leaves', label: 'Leave', icon: CalendarDays },
      { href: '/hr/employees', label: 'Employees', icon: Users },
    ],
  },
  {
    href: '/it-support',
    label: 'IT Support Tickets',
    icon: Ticket,
    children: [
      { href: '/it-support/dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { href: '/it-support/tickets', label: 'Tickets', icon: ClipboardList },
    ],
  },
];
