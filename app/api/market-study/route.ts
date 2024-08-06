import { type NextRequest, type NextResponse } from 'next/server'
import { openai } from '@ai-sdk/openai';
import { generateObject } from 'ai';
import { z } from 'zod';

export async function POST(request: NextRequest, res:NextResponse) {
  const {
    name,
    description,
    business,
    industry,
    employees,
    revenue,
    age,
    scope,
  } = await request.json();

  const prompt = `La empresa se llama ${name}, la descripción de la empresa es: ${description}. Está actuando en ${scope} Está en el sector de ${business}, en la industria de ${industry}. es una empresa de ${employees}. La antiguedad de la empresa es de ${age}. Debes de realizar un estudio de mercado tratando de que la información que des sea lo más actualizada posible`;

  const result = await generateObject({
    model: openai('gpt-4'),
    system: `Eres un experto en Marketing. Desarrolla un estudio de mercado para la empresa ${name} que actua en ${scope}.`,
    prompt,
    schema: z.object({
      marketStudy: z.object({
        marketSizeAndGrowth: z.object({
          industry: z.string().describe("Industria del mercado"),
          marketSize: z.string().describe("Tamaño del mercado"),
          growthRate: z.string().describe("Tasa de crecimiento"),
          growthDrivers: z.array(z.string().describe("Factores de crecimiento")),
        }),
        marketSegmentation: z.object({
          demographicSegments: z.array(z.string().describe("Segmentos demográficos")),
          geographicSegments: z.array(z.string().describe("Segmentos geográficos")),
          psychographicSegments: z.array(z.string().describe("Segmentos psicográficos")),
        }),
        competitorAnalysis: z.object({
          mainCompetitors: z.array(z.string().describe("Principales competidores")),
          competitorStrengthsAndWeaknesses: z.object({
            strengths: z.array(z.string().describe("Fortalezas")),
            weaknesses: z.array(z.string().describe("Debilidades")),
          }),
          pricingAndPositioningStrategies: z.array(z.string().describe("Estrategias de precios y posicionamiento")),
        }),
        consumerPreferencesAndBehaviors: z.object({
          preferences: z.array(z.string().describe("Preferencias")),
          purchaseFactors: z.array(z.string().describe("Factores de compra")),
          consumptionPatterns: z.array(z.string().describe("Patrones de consumo")),
        }),
        economicAndRegulatoryConditions: z.object({
          economicConditions: z.array(z.string().describe("Condiciones económicas")),
          regulatoryConditions: z.array(z.string().describe("Condiciones regulatorias")),
        }),
        opportunitiesAndThreats: z.object({
          opportunities: z.array(z.string().describe("Oportunidades")),
          threats: z.array(z.string().describe("Amenazas")),
        }),
        conclusion: z.string().describe("Conclusión del estudio de mercado"),
      }),
    }),
  });

  return result.toJsonResponse();
}