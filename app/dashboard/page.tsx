import Template from "@/app/ui/dashboard/template";
import { BreadcrumbType, SearchParams } from "@/app/ui/dashboard/types";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const breadcrumb = [{
  href: '/dashboard',
  name: 'Dashboard'
}] as BreadcrumbType[]

interface PageProps {
  searchParams?: SearchParams
}

export default async function Page({ searchParams }: PageProps) {

  // const revenue = await fetchRevenue();
  return (
    <Template breadcrumb={breadcrumb} searchParams={searchParams}>
      <h1 className={`mb-4 text-xl md:text-2xl`}>
        {breadcrumb[0].name}
      </h1>
      <div className="flex-1">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Generación de Ideas y Planificación Estratégica</CardTitle>
            <CardDescription>
              Crea tu nueva empresa con ayuda de nuestras herramientas de ideación y planificación.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Generación de Ideas</CardTitle>
                    <CardDescription>
                      Utiliza nuestras herramientas de ideación para generar nuevas ideas de negocio.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button>Comenzar</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Análisis de Viabilidad</CardTitle>
                    <CardDescription>
                      Evalúa la viabilidad de tus ideas de negocio con nuestros análisis.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button>Comenzar</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Creación de Plan de Negocios</CardTitle>
                    <CardDescription>Crea un plan de negocios sólido para tu nueva empresa.</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button>Comenzar</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div> */}
    </Template>
  )
}