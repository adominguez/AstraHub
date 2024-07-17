import Template from "@/app/ui/dashboard/template";
import { BreadcrumbType } from "@/app/ui/dashboard/types";

const breadcrumb = [{
  href: '/dashboard',
  name: 'Dashboard'
}] as BreadcrumbType[]

export default function Page() {
  return (
    <Template breadcrumb={breadcrumb}>
      <p>Dashboard Page</p>
    </Template>
  )
}