"use client"

import { z } from "zod"
import { format } from "date-fns"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { type BusinessType, type Industry } from "@/app/lib/definitions"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Calendar } from "@/components/ui/calendar"
import { createCompany } from '@/app/lib/actions';
import { companyFormSchema } from '@/app/lib/schemas';

interface Props {
  businessTypes: BusinessType[]
  industries: Industry[]
}

export default function FirstStepForm({ businessTypes, industries }: Props) {

  // 1. Define your form.
  const form = useForm<z.infer<typeof companyFormSchema>>({
    resolver: zodResolver(companyFormSchema),
    defaultValues: {
      user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: '3DMakerNow',
      description: 'Empresa de impresión 3D',
      logo_url: 'https://via.placeholder.com/150',
      founded_date: new Date(),
      business: 'Servicios',
      industry: 'Tecnología de la Información',
      city: 'Cáceres',
      website: 'https://3dmakernow.com',
      country: 'España',
      employees: 1,
      revenue: 0,

    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof companyFormSchema>) {
    createCompany(values)
  }

  return (<Form {...form}>
    <form
      onSubmit={form.handleSubmit(onSubmit)} 
      className="flex flex-col sm:flex-row gap-4 flex-wrap">
      <div className="flex flex-1 flex-col gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de la Empresa</FormLabel>
              <FormControl>
                <Input placeholder="El nombre oficial de la empresa" {...field} />
              </FormControl>
              <FormDescription>
                Inserta el nombre oficial de la empresa
              </FormDescription>
              <FormMessage />
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
                <Textarea placeholder="Una breve descripción de la empresa, sus objetivos y actividades principales." rows={3} {...field} />
              </FormControl>
              <FormDescription>
                Inserta la descripción de la empresa
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
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
              <FormDescription>
                Selecciona el tipo de negocio de la empresa.
              </FormDescription>
              <FormMessage />
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
              <FormDescription>
                Selecciona la industria o sector de la empresa.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="user_id"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="logo_url"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Web</FormLabel>
              <FormControl>
                <Input placeholder="Web de la empresa" {...field} />
              </FormControl>
              <FormDescription>
                Inserta la web de la empresa
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ciudad</FormLabel>
              <FormControl>
                <Input placeholder="Ciudad donde se encuentra la empresa" {...field} />
              </FormControl>
              <FormDescription>
                Ciudad donde se focaliza la empresa
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>País</FormLabel>
              <FormControl>
                <Input placeholder="País donde se encuentra la empresa" {...field} />
              </FormControl>
              <FormDescription>
                País donde se focaliza la empresa
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="employees"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Empleados</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Número de empleados" {...field} />
              </FormControl>
              <FormDescription>
                Inserta el número de empleados de la empresa
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="revenue"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ingresos anuales</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Revenue" {...field} />
              </FormControl>
              <FormDescription>
                Inserta los ingresos anuales de la empresa
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="founded_date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Fecha de creación</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Selecciona una fecha</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Inserta la fecha en la que se creó la empresa
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="w-full flex justify-end border-t pt-4">
        <Button disabled={!form.formState.isValid} type="submit">Submit</Button>
      </div>
    </form>
  </Form>)
}