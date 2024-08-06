import Header from "@/app/ui/dashboard/header";
import { BreadcrumbType, SearchParams } from "@/app/ui/dashboard/types";
import NewCompanyForm from "./company/new-company-form";
import DashboardSkeleton from "@/app/ui/skeletons";

type TemplateProps = {
  children: React.ReactNode
  breadcrumb?: BreadcrumbType[]
  searchParams?: SearchParams
}

export default async function template({ children, breadcrumb, searchParams }: TemplateProps) {
  const { step } = searchParams || {}
  return (<>
    <DashboardSkeleton />
    <Header breadcrumb={breadcrumb} />
    <main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <NewCompanyForm step={step} />
    </main>
  </>)
}