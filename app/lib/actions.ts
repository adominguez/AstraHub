'use server'
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { companyFormSchema } from '@/app/lib/schemas';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';



export async function createCompany(values: z.infer<typeof companyFormSchema>) {
  const {user_id, name, description, logo_url, founded_date, business, industry, city, website, country, employees, revenue,} = values;
  await sql`
    INSERT INTO companies (user_id, name, description, logo_url, founded_date, business, industry, city, website, country, employees, revenue)
    VALUES (${user_id}, ${name}, ${description}, ${logo_url}, ${founded_date.toISOString().split('T')[0]}, ${business}, ${industry}, ${city}, ${website}, ${country}, ${employees}, ${revenue})
  `;
  revalidatePath('/dashboard?step=manage');
  redirect('/dashboard?step=manage');
}