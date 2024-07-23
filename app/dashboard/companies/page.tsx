import Template from "@/app/ui/dashboard/template";
import { BreadcrumbType } from "@/app/ui/dashboard/types";

const breadcrumb = [{
  href: '/dashboard',
  name: 'Dashboard'
}, {
  href: '/dashboard/companies',
  name: 'companies'
}] as BreadcrumbType[]

export default function Page() {
  return (
    <Template breadcrumb={breadcrumb}>
      <p>Companies Page</p>
    </Template>
  )
}