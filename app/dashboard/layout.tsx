// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import SideNav from "@/app/ui/dashboard/sidenav";
import Template from "@/app/ui/dashboard/template";
import NewCompanyForm from "@/app/ui/dashboard/company/new-company-form";
import { fetchCompaniesUserCount } from "@/app/lib/data"

export default async function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  const countCompany = await fetchCompaniesUserCount('410544b2-4001-4271-9855-fec4b6a6442a')

  return (
    <div className="flex min-h-screen w-full bg-background">
      <div className={`flex relative flex-col sm:gap-4 ${countCompany !== 0 ? 'sm:pl-14': ''} w-full`}>
        {countCompany !== 0 ? <SideNav /> : null}
        {children}
      </div>
    </div>
  )
}