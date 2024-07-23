import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { type BusinessType, type Industry, type StatusGoals } from '../lib/definitions';
import { invoices, customers, revenue, users, businessTypes, industries, statusGoals } from '../lib/placeholder-data';

const client = await db.connect();

async function dropTables() {
  const tableNames = ['users', 'invoices', 'customers', 'revenue', 'business_types', 'industries', 'companies', 'services', 'status_goals', 'goals'];
  return await Promise.all(
    tableNames.map(async (table) => {
      return client.sql`DROP TABLE ${table}`;
    }),
  );
}

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedBusinessTypes() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS business_types (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL
    );
  `;

  const insertedBusinessTypes = await Promise.all(
    businessTypes.map(
      (businessType: BusinessType) => client.sql`
        INSERT INTO business_types (id, name, description)
        VALUES (${businessType.id}, ${businessType.name}, ${businessType.description})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedBusinessTypes;
}

async function seedIndustries() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS industries (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL
    );
  `;

  const insertedIndustries = await Promise.all(
    industries.map(
      (industry: Industry) => client.sql`
        INSERT INTO industries (id, name, description)
        VALUES (${industry.id}, ${industry.name}, ${industry.description})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedIndustries;
}

async function seedStatusGoals() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS status_goals (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL
    );
  `;

  const insertedStatusGoals = await Promise.all(
    statusGoals.map(statusGoal =>
      client.query(
        `
        INSERT INTO status_goals (name, description)
        VALUES ($1, $2)
        ON CONFLICT (id) DO NOTHING;
      `,
        [statusGoal.name, statusGoal.description]
      )
    )
  );
  return insertedStatusGoals;
}

async function seedServices() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS services (
      company_id UUID NOT NULL,
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      category VARCHAR(255) NOT NULL,
      price INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
}

async function seedGoals() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS goals (
      company_id UUID NOT NULL,
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      progress INT NOT NULL,
      status VARCHAR(255) NOT NULL
    );
  `;
}

async function seedCompanies() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS companies (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID NOT NULL,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      logo_url TEXT NOT NULL,
      founded_date DATE NOT NULL,
      business VARCHAR(255) NOT NULL,
      industry VARCHAR(255) NOT NULL,
      city VARCHAR(255),
      website VARCHAR(255),
      country VARCHAR(255),
      employees INT,
      revenue INT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
}

async function seedInvoices() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `;

  const insertedInvoices = await Promise.all(
    invoices.map(
      (invoice) => client.sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedInvoices;
}

async function seedCustomers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedCustomers = await Promise.all(
    customers.map(
      (customer) => client.sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedCustomers;
}

async function seedRevenue() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `;

  const insertedRevenue = await Promise.all(
    revenue.map(
      (rev) => client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
    ),
  );

  return insertedRevenue;
}

export async function GET() {
  // return Response.json({
  //   message:
  //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
  // });
  try {
    await client.sql`BEGIN`;
    // await dropTables();
    // await seedUsers();
    // await seedBusinessTypes();
    // await seedIndustries();
    // await seedStatusGoals();
    await seedCompanies();
    // await seedServices();
    // await seedGoals();
    // await seedCustomers();
    // await seedInvoices();
    // await seedRevenue();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
