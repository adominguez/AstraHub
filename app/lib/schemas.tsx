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