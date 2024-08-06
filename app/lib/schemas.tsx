import { z } from "zod"

export const companyFormSchema = z.object({
  user_id: z.string(),
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
  logo_url: z.string().url(),
  founded_date: z.date({
    required_error: "Es necesario insertar la fecha de creación de la empresa.",
  }),
  business: z.string({
    required_error: "Selecciona un tipo de negocio.",
  }),
  industry: z.string({
    required_error: "Selecciona un sector.",
  }),
  city: z.string(),
  website: z.string(),
  country: z.string(),
  employees: z.number(),
  revenue: z.number(),
})

export const webCompanySchema = z.object({
  name: z.string().min(2, {
    message: "Debes ingresar el nombre de la empresa.",
  }),
  description: z.string().min(10, {
    message: "Debes ingresar la descripción de la empresa.",
  }),
  scope: z.string().min(2, {
    message: "Debes ingresar donde trabaja la empresa.",
  }),
  business: z.string().nonempty("Selecciona un tipo de negocio."),
  industry: z.string().nonempty("Selecciona una industria."),
  employees: z.string().nonempty("Selecciona los empleados de tu empresa"),
  revenue: z.string().nonempty("Selecciona las ganancias anuales de tu empresa"),
  age: z.string().nonempty("Selecciona la antiguedad de tu empresa"),
})