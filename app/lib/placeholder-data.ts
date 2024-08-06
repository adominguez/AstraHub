// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:

import { create } from "domain";

// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const employeesTypes = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6423a",
    name: "un autónomo",
    description: "Autónomo"
  }, {
    id: "41054fe2-4001-4271-9855-fec4b6a6442a",
    name: "2-10 empleados",
    description: "empresa familiar"
  }, {
    id: "410544b2-4001-4271-9855-fec4b6a644ed",
    name: "11 - 50 empleados",
    description: "Pequeña empresa"
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6990e",
    name: "51-200 empleados",
    description: "Mediana empresa"
  },
  {
    id: "410544b2-4001-4271-9855-fec34ea6442a",
    name: "201-2000 empleados",
    description: "Gran empresa"
  },
  {
    id: "410544b2-4001-4271-9855-fec4b3e4c42a",
    name: "+2000 empleados",
    description: "Multinacional"
  },
]

const companyAges = [
  {
    id: "410544b2-4001-4271-9855-eac4b6a6442a",
    name: "0-1 años",
    description: "Recien creada"
  },
  {
    id: "410544b2-4001-7564-9855-fec4b6a6442a",
    name: "1-5 años",
    description: "Emergente"
  },
  {
    id: "410544b2-897e-4271-9855-fec4b6a6442a",
    name: "6-10 años",
    description: "Establecida"
  },
  {
    id: "410544b2-4001-4271-9855-fec4ee78442a",
    name: "11-20 años",
    description: "Consolidada"
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6aedc73",
    name: "21-50 años",
    description: "Madura"
  },
  {
    id: "410544b2-4001-4271-9855-fec4b5e7c4a1",
    name: "+50 años",
    description: "Veterana"
  }
]

const revenues = [
  {
    id: "410544b2-4001-0098-9855-fec4b6a6442a",
    name: "0-100K euros",
    description: "Ingresos bajos"
  },
  {
    id: "890044b2-4001-4271-9855-fec4b6a6442a",
    name: "100K-500K euros",
    description: "Ingresos medios"
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a0087a",
    name: "500K-1M euros",
    description: "Ingresos altos"
  },
  {
    id: "410544b2-3022-4271-9855-fec4b6a6442a",
    name: "1M-5M euros",
    description: "Ingresos muy altos"
  },
  {
    id: "41052902-4001-4271-9855-fec4b6a62caa",
    name: "5M-10M euros",
    description: "Ingresos millonarios"
  },
  {
    id: "410544b2-4001-8002-9855-fec4b6a6442a",
    name: "+10M euros",
    description: "Ingresos multimillonarios"
  }
]


const businessTypes = [
  {
    id: "410544b2-4001-4271-9855-fec4b606442a",
    name: "E-commerce",
    description: "Negocios que venden productos o servicios a través de plataformas en línea."
  },
  {
    id: "f30c8df5-4d6e-4b4d-96f4-907e82d0ebd6",
    name: "Marketplace",
    description: "Plataformas que conectan a vendedores y compradores para transacciones de productos o servicios."
  },
  {
    id: "d4515e4a-2d3b-4a6b-8c17-77e7b6a6e92a",
    name: "Retail",
    description: "Negocios que venden productos directamente a los consumidores, ya sea en tiendas físicas o en línea."
  },
  {
    id: "a5b29a9e-8a5f-4676-bb93-cf5e50f1fadb",
    name: "Servicios",
    description: "Negocios que ofrecen servicios profesionales, técnicos, de consultoría, entre otros."
  },
  {
    id: "85f4bfa6-5a3f-4d1a-a8f3-6a16f3b14b9a",
    name: "SaaS",
    description: "Software as a Service, negocios que ofrecen aplicaciones y servicios de software a través de la nube."
  },
  {
    id: "11902f58-9d45-4a1e-a474-faadf3f4526d",
    name: "Educación",
    description: "Negocios que proporcionan servicios educativos y de formación, tanto en línea como presenciales."
  },
  {
    id: "d3277d38-2e2f-40a3-9db5-87d912b5e36e",
    name: "Fintech",
    description: "Negocios que utilizan la tecnología para mejorar y automatizar los servicios financieros."
  },
  {
    id: "437bbd64-9ff5-4b73-b8f1-92e8d3b1f09d",
    name: "Salud",
    description: "Negocios que ofrecen productos y servicios relacionados con la salud y el bienestar."
  },
  {
    id: "b7cb8194-779d-4030-9210-3d6a0e788254",
    name: "Consultoría",
    description: "Negocios que proporcionan asesoramiento y servicios especializados en diferentes áreas."
  },
  {
    id: "ff1f9dc7-dc33-4f1e-91f5-07cb1e5f5a61",
    name: "Manufactura",
    description: "Negocios que producen bienes a partir de materias primas mediante el uso de maquinaria y procesos industriales."
  },
  {
    id: "4d9bcb43-0c49-4e96-88a1-2d2f0e9a83c5",
    name: "Logística",
    description: "Negocios que gestionan la distribución y almacenamiento de productos."
  },
  {
    id: "7b33b5c9-5e39-4f62-a7d3-86c2bfae923e",
    name: "Turismo y Hospitalidad",
    description: "Negocios que ofrecen servicios de viaje, alojamiento, restauración y entretenimiento."
  },
  {
    id: "fb4f7c0f-1b5e-4e57-8d58-810ef49d0e7d",
    name: "Tecnología",
    description: "Negocios que desarrollan y venden productos y servicios tecnológicos, incluyendo hardware y software."
  },
  {
    id: "c0a8f44e-cb4d-49a1-9e0f-4e9d6b6a857f",
    name: "Energía",
    description: "Negocios relacionados con la producción y distribución de energía, incluyendo fuentes renovables."
  },
  {
    id: "a0b4c917-1d47-41b4-8e9f-3d6f6c2f73b6",
    name: "Construcción",
    description: "Negocios dedicados a la construcción y desarrollo de infraestructuras y edificaciones."
  }
];

const industries = [
  {
    id: "3a10b1f1-6f41-4e92-86a5-1d3e10c681a0",
    name: "Agricultura",
    description: "Negocios relacionados con la agricultura, la silvicultura y la pesca."
  },
  {
    id: "7b45d47d-6d2b-4b77-9a54-2b2e3edb452e",
    name: "Automotriz",
    description: "Negocios involucrados en el diseño, desarrollo, fabricación, marketing y venta de vehículos de motor."
  },
  {
    id: "8b45d4d1-7e5c-4a88-9f2e-2d2d0f1d2a34",
    name: "Banca",
    description: "Negocios que brindan servicios financieros, incluidos bancos, cooperativas de crédito y otras instituciones financieras."
  },
  {
    id: "9f10d3b1-5c31-4e2b-81d5-3d3e50f1e4b6",
    name: "Construcción",
    description: "Negocios involucrados en la construcción de edificios e infraestructura."
  },
  {
    id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5ob6",
    name: "Deporte",
    description: "Negocios relacionados con el deporte y la actividad física."
  },
  {
    id: "8a12b4c4-5d1a-4e56-91f3-4e4e3d3d3e5b",
    name: "Educación",
    description: "Negocios que brindan servicios y productos educativos."
  },
  {
    id: "5d2b1e4e-6f54-4a9e-8e6d-5d5d4d4f4e7b",
    name: "Energía",
    description: "Negocios involucrados en la producción y distribución de energía, incluidas las energías renovables."
  },
  {
    id: "6d2b5e5f-7d4e-4e9a-8f6d-6d6d5e5f5f6c",
    name: "Entretenimiento",
    description: "Negocios que brindan productos y servicios de entretenimiento, incluidas películas, música y actuaciones en vivo."
  },
  {
    id: "4b5d1e2f-5c5a-4a5d-8d6e-7e7d6d5e5d5a",
    name: "Finanzas",
    description: "Negocios que brindan servicios financieros, incluidos inversión, seguros y bienes raíces."
  },
  {
    id: "3e4d1e3e-5f5b-4a8d-9e7d-8e8d6d5f5f7b",
    name: "Alimentos y Bebidas",
    description: "Negocios involucrados en la producción, distribución y venta de alimentos y bebidas."
  },
  {
    id: "1e2d4d3e-6e4e-4a9d-8e8d-9d9e5e6d6e6c",
    name: "Salud",
    description: "Negocios que brindan productos y servicios relacionados con la salud y el bienestar."
  },
  {
    id: "7d1e2e3e-7f4e-4e8d-9d6d-aeae6d5e5e5d",
    name: "Hospitalidad",
    description: "Negocios que brindan servicios relacionados con el alojamiento, la comida y la bebida, incluidos hoteles, restaurantes y bares."
  },
  {
    id: "5e2d4e4e-5d5e-4e6d-8d8d-bebe6d5d5e6b",
    name: "Tecnología de la Información",
    description: "Negocios que brindan productos y servicios de TI, incluidos software, hardware y consultoría."
  },
  {
    id: "6e2d4e5e-6f4e-4e7d-8d7d-cece5e6d5e7c",
    name: "Logística",
    description: "Negocios involucrados en la planificación, implementación y control del movimiento y almacenamiento de bienes."
  },
  {
    id: "4d2d3e4e-5e5f-4e8d-8d8d-debe5e6d5e5c",
    name: "Manufactura",
    description: "Negocios involucrados en la producción de bienes utilizando mano de obra, maquinaria y herramientas."
  },
  {
    id: "3e1d4d5e-5d5e-4e9d-8d9d-fefe6d5e5e5d",
    name: "Medios de Comunicación",
    description: "Negocios involucrados en la creación, producción y distribución de contenido a través de diversos canales."
  },
  {
    id: "2e4d3d5e-5e6e-4e9d-8e8d-fefe5e6e5e5b",
    name: "Retail",
    description: "Negocios que venden bienes directamente a los consumidores."
  },
  {
    id: "1e5d3e5e-6f5e-4e8d-8e8d-bdbd5e6d5d6c",
    name: "Telecomunicaciones",
    description: "Negocios que brindan servicios de comunicación, incluidos servicios telefónicos, internet e inalámbricos."
  },
  {
    id: "5e2d5d5e-6f6e-4e9d-8d9d-cdcd5e6e5e7d",
    name: "Turismo",
    description: "Negocios que brindan servicios y productos relacionados con los viajes."
  },
  {
    id: "6d3e4e5e-5f5e-4e8d-8d8d-dcdc5e6e5e5d",
    name: "Transporte",
    description: "Negocios que brindan servicios de transporte de bienes y personas."
  }
];

// Compañías de ejemplo
const companies = [
  {
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Supermercado Los Mejores Precios",
    description: "Supermercado de barrio",
    logo_url: "/companies/supermercado-el-mejor.png",
    type: "Retail",
    address: "Calle 123, Ciudad, País",
    city: "Ciudad",
    country: "País",
    phone: "+123456789",
    email: "contacto@supermercadolosmejoresprecios.com",
    website: "http://www.supermercadolosmejoresprecios.com",
    founded_date: "2020-01-15",
    employees: 25,
    revenue: 150000,
    industry: "Alimentación",
    social_media: {
      facebook: "http://www.facebook.com/supermercadolosmejoresprecios",
      twitter: "http://www.twitter.com/super_mejorprecio",
      instagram: "http://www.instagram.com/super_mejorprecio"
    },
    founders: [
      {
        name: "Juan Pérez",
        role: "CEO",
        email: "juan.perez@supermercadolosmejoresprecios.com"
      },
      {
        name: "María García",
        role: "COO",
        email: "maria.garcia@supermercadolosmejoresprecios.com"
      }
    ],
    services: [
      "Venta de productos de alimentación",
      "Entrega a domicilio",
      "Pedidos online"
    ],
    goals: [
      "Expandir a tres nuevas ubicaciones en el próximo año",
      "Incrementar las ventas online en un 20%",
      "Introducir una línea de productos orgánicos"
    ],
    milestones: [
      {
        date: "2021-06-01",
        achievement: "Apertura de la segunda tienda"
      },
      {
        date: "2022-03-15",
        achievement: "Lanzamiento del servicio de entrega a domicilio"
      }
    ]
  }
]

const services = [
  {
    company_Id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    id: "1b2d3f4g-5h6j-7k8l-9m0n-1o2p3q4r5s6t",
    name: "Consultoría Financiera",
    description: "Asesoría especializada en la gestión financiera de tu empresa.",
    category: "Finanzas",
    price: 150.00,
    duration: "2 horas",
    created_at: "2022-01-15",
    updated_at: "2022-01-15"
  }
]

const statusGoals = [
  {
    name: "Pendiente",
    description: "El objetivo aún no ha comenzado."
  },
  {
    name: "En progreso",
    description: "El objetivo está actualmente en progreso."
  },
  {
    name: "Completado",
    description: "El objetivo ha sido completado."
  },
  {
    name: "Pospuesto",
    description: "El objetivo ha sido pospuesto para una fecha futura."
  },
  {
    name: "Cancelado",
    description: "El objetivo ha sido cancelado y no se llevará a cabo."
  },
  {
    name: "Bloqueado",
    description: "El objetivo está bloqueado debido a algún impedimento o problema."
  }
]

const goals = [
  {
    company_Id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    name: "Expandir a tres nuevas ubicaciones",
    description: "Abrir tres nuevas tiendas en diferentes ciudades antes de fin de año.",
    target_date: "2024-12-31",
    progress: 60,
    status: "En progreso",
    priority: "Alta",
    assigned_to: "Equipo de Expansión",
    created_at: "2023-01-01T09:00:00Z",
    updated_at: "2023-07-01T12:00:00Z"
  }
]

const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

export { users, customers, invoices, revenue, businessTypes, revenues, industries, employeesTypes, companyAges, companies, services, statusGoals, goals };
