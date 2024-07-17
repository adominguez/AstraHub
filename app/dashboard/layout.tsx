// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { interFontHeading, interFontBody } from '@/app/ui/fonts';
import { cn } from '@/lib/utils'
import '@/app/ui/global.css'
import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased',
          interFontHeading.variable,
          interFontBody.variable
        )}
      >
        <div className="flex min-h-screen w-full bg-background">
          <SideNav />
          <div className="flex relative flex-col sm:gap-4 sm:pl-14 w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}