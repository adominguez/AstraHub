'use client'
import Link from 'next/link';
import {
  UserGroupIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { BotIcon, LayoutGridIcon } from "@/app/ui/icons/icons"
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const navigation = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Projects',
    href: '/dashboard/projects',
    icon: LayoutGridIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
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
