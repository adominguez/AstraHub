import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { fetchBusinessTypes, fetchIndustries } from "@/app/lib/data"
import FirstStepForm from "./first-step-form"
import { BusinessType, Industry } from "@/app/lib/definitions"


export default async function newCompanyFormStep() {
  const businessTypes = await fetchBusinessTypes() as BusinessType[]
  const industries = await fetchIndustries() as Industry[]
  return <Card>
    <ScrollArea>
      <CardHeader>
        <CardTitle>Crear empresa</CardTitle>
        <CardDescription>
          Completa los datos iniciales de tu nueva empresa.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FirstStepForm businessTypes={businessTypes} industries={industries} />
      </CardContent>
    </ScrollArea>
  </Card>
}