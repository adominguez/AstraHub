'use client'
import Link from 'next/link';
import {
  UserGroupIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { LightbulbIcon, DollarSignIcon, BarChart2Icon, FileTextIcon, BriefcaseIcon } from "@/app/ui/icons"
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const navigation = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Generación de ideas y planificación estratégica',
    href: '/dashboard/ideas-y-estrategia',
    icon: LightbulbIcon,
  },
  {
    name: 'Departamento Financiero',
    href: '/dashboard/financiero',
    icon: DollarSignIcon,
  },
  {
    name: 'Departamento Marketing',
    href: '/dashboard/marketing',
    icon: BarChart2Icon,
  },
  {
    name: 'Departamento de Recursos Humanos',
    href: '/dashboard/recursos-humanos',
    icon: UserGroupIcon,
  },
  {
    name: 'Departamento legal',
    href: '/dashboard/legal',
    icon: FileTextIcon,
  },
  {
    name: 'Departamento de operaciones',
    href: '/dashboard/operaciones',
    icon: BriefcaseIcon,
  },
]

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <TooltipProvider>
      {
        navigation.map(({ name, href, icon: LinkIcon }) => (
          <Tooltip key={name}>
            <TooltipTrigger asChild>
              <Link
                href={href}
                className={clsx(
                  'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                  {
                    'bg-primary/30': pathname === href,
                  },
                )}
                prefetch={false}
              >
                <LinkIcon className="h-5 w-5" />
                <span className="sr-only">{name}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{name}</TooltipContent>
          </Tooltip>
        ))
      }
    </TooltipProvider>
  );
}
