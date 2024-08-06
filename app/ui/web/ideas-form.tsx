import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { businessTypes, industries, employeesTypes, revenues, companyAges } from '@/app/lib/placeholder-data'
import { webCompanySchema } from '@/app/lib/schemas'

type SubmitFormValues = z.infer<typeof webCompanySchema>;

interface Props {
  submitForm: (values: SubmitFormValues) => void;
  onBack: () => void;
  onResult: () => void;
  isConsulted?: boolean;
}

export default function IdeasForm({ submitForm, onBack, onResult, isConsulted = false }: Props) {

  const {
    name = '',
    description = '',
    business = '',
    industry = '',
    employees = '',
    revenue = '',
    age = '',
    scope = '',
  } = JSON.parse(localStorage.getItem('values') || '{}')

  // 1. Define your form.
  const form = useForm<z.infer<typeof webCompanySchema>>({
    resolver: zodResolver(webCompanySchema),
    defaultValues: {
      name,
      description,
      business,
      industry,
      employees,
      revenue,
      age,
      scope,
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof webCompanySchema>) {
    submitForm && submitForm(values)
  }

  function handlerBack() {
    onBack && onBack()
  }

  function handlerResult() {
    onResult && onResult()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 demo-form flex flex-col md:flex-row gap-4 flex-wrap">
        <div className='flex-1 flex-col flex gap-2'>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de la empresa</FormLabel>
                <FormControl>
                  <Input placeholder="Mi Empresa" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripción de la empresa</FormLabel>
                <FormControl>
                  <Textarea placeholder="Describe un poco tu empresa, a que se dedica, que usuarios tiene..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="scope"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ámbito de actuación</FormLabel>
                <FormControl>
                  <Input placeholder="Dónde trabaja la empresa por ejemplo: Madrid Bilbao y Asturias" {...field} />
                </FormControl>
                <FormDescription>
                  (Ciudades, regiones, países, en los que trabaja la empresa.)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex-1 flex-col flex gap-2 second-column'>
          <FormField
            control={form.control}
            name="business"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de negocio</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona la industria" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {
                      businessTypes.map((type) => (
                        <SelectItem key={type.id} value={type.name}>{type.name}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Industria o sector</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona la industria" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {
                      industries.map((type) => (
                        <SelectItem key={type.id} value={type.name}>{type.name}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="employees"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número de empleados</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona los empleados de tu empresa" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {
                      employeesTypes.map((type) => (
                        <SelectItem key={type.id} value={type.name}>{type.name}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Antiguedad de la empresa</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona la antiguedad de tu empresa" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {
                      companyAges.map((type) => (
                        <SelectItem key={type.id} value={type.name}>{type.name}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="revenue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ganancias anuales</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona las ganancias anuales de tu empresa" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {
                      revenues.map((type) => (
                        <SelectItem key={type.id} value={type.name}>{type.name}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>
        <div className='w-full flex gap-2'>
          <Button type="button" onClick={() => handlerBack()}>Modificar análisis</Button>
          {
            isConsulted ? <Button type="button" onClick={() => handlerResult()}>Ver análisis realizado</Button> : <Button type="submit">Obtener un análisis</Button>
          }
        </div>
      </form>
    </Form>
  )
}