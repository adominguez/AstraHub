import { type NextRequest, type NextResponse } from 'next/server'
import { openai } from '@ai-sdk/openai';
import { generateObject } from 'ai';
import { z } from 'zod';

export async function POST(request: NextRequest, res:NextResponse) {
  const {
    name,
    description,
    web,
    business,
    industry,
    employees,
    revenue,
    age
  } = await request.json();

  const prompt = `La empresa se llama ${name}, la descripción de la empresa es: ${description}. Está en el sector de ${business}, en la industria de ${industry}. es una empresa de ${employees}. La antiguedad de la empresa es de ${age}. Debes de dar un descripción detallada de la idea. un rango de precio aproximado que podría costar realizar esa idea, el tiempo aproximado que se podría tardar en implementar, y el número de empleados que necesitaría para poder llevarlo a cabo y sus puestos, teniendo en cuenta que las ganancias de la empresa son de ${revenue} al año`;

  const result = await generateObject({
    model: openai('gpt-4'),
    system: `Eres un experto en Marketing. Genera cinco ideas de negocio innovadoras que pueda llevar a cabo la empresa ${name}.`,
    prompt,
    schema: z.object({
      ideas: z.array(
        z.object({
          idea: z.string().describe("Nombre de la idea de negocio"),
          description: z.string().describe("Descripción detallada de la idea de negocio."),
          priceRange: z.string().describe("Rango de precio aproximado"),
          time: z.string().describe("Tiempo aproximado que se podría tardar en implementar"),
          jobs: z.array(z.string()).describe("Puestos de los empleados"),
        })
      ),
    }),
  });

  return result.toJsonResponse();
}