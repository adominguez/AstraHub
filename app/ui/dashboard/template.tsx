import Header from "@/app/ui/dashboard/header";
import { BreadcrumbType } from "@/app/ui/dashboard/types";

type TemplateProps = {
  children: React.ReactNode
  breadcrumb?: BreadcrumbType[]
}

export default function template({ children, breadcrumb }: TemplateProps) {
  return (<>
    <Header breadcrumb={breadcrumb} />
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      {children}
    </main>
  </>)
}