'use client'
import clsx from 'clsx'
import { SetStateAction, useState } from 'react'
import IdeasForm from '@/app/ui/web/ideas-form'
import { sourceSans } from '@/app/ui/fonts'
import { MarketStudyIcon, IdeasGenerationIcon, MarketingStudyIcon } from '@/app/ui/icons'
import { Button } from '@/components/ui/button'
import IdeasResult from '@/app/ui/web/ideas-result'
import MarketStudyResult from '@/app/ui/web/market-study-result'

const services = [{
  key: 'ideas',
  title: 'Generación de Ideas para el Negocio',
  description: 'Encuentra nuevas oportunidades y propuestas innovadoras para expandir tu negocio.',
  icon: IdeasGenerationIcon,
  route: '/api/new-idea'
}, {
  key: 'marketStudy',
  title: 'Estudios de Mercado y Análisis de la Competencia',
  description: 'Obtén una visión clara del mercado y evalúa a tus competidores para tomar decisiones informadas.',
  icon: MarketStudyIcon,
  route: '/api/market-study'
},
// {
//   key: 'marketingStrategy',
//   title: 'Desarrollo de Estrategias de Marketing Personalizadas',
//   description: 'Crea campañas de marketing adaptadas a tus objetivos y conecta mejor con tu audiencia.',
//   icon: MarketingStudyIcon,
//   route: '/api/marketing-strategy'
// }
]

const STATUS = {
  IDLE: 0,
  FORM: 1,
  LOADING: 2,
  RESULT: 3
}

export default function DemoForm() {
  const [status, setStatus] = useState(STATUS.IDLE)
  const [values, setValues] = useState({})
  const [service, setService] = useState('')
  const [result, setResult] = useState<{ ideas?: any, marketStudy?: any, marketingStrategy?: any }>({})
  const { ideas = [], marketStudy, marketingStrategy } = result

  const onSubmit = async (val: SetStateAction<{}>) => {
    setValues(val)
    localStorage.setItem('values', JSON.stringify(val))
    setStatus(STATUS.LOADING)
    const selectedService = services.find(s => s.key === service)
    const route = selectedService?.route
    const key = selectedService?.key
    if (route) {
      const response = await fetch(route, {
        method: 'POST',
        body: JSON.stringify(val)
      })
      const res = await response.json()
      if (key && res[key]) {
        setResult({
          ...result,
          [String(key)]: res[key]
        })
      }
      setStatus(STATUS.RESULT)
    }
  }

  const selectService = (key: string) => {
    const selectedService = services.find(s => s.key === key)
    if (selectedService?.key) {
      setService(selectedService?.key)
      setStatus(STATUS.FORM)
    }
  }

  return (
    <div className={
      clsx('flex transition-transform duration-300 ease-in',
        { '-translate-x-[200%]': status === STATUS.RESULT },
        { '-translate-x-[100%]': status === STATUS.FORM || status === STATUS.LOADING },
        { 'translate-x-0': status === STATUS.IDLE },
      )}>
      <div className='w-full flex flex-col justify-center items-center p-2 lg:p-4 flex-shrink-0'>
        <div className="speech-form flex-1 mx-auto w-full">
          <h2 className={`text-xl md:text-2xl lg:text-3xl text-balance tracking-wide font-bold text-web-secondary pb-4 ${sourceSans.className}`}>¿En qué puede ayudarte Astra?</h2>
          <p>Astra puede ayudarte a identificar nuevas oportunidades de negocio, optimizar tus procesos empresariales y desarrollar estrategias de marketing personalizadas. Con herramientas basadas en inteligencia artificial, Astra te guía para tomar decisiones informadas y maximizar el crecimiento de tu empresa. ¡Comienza a impulsar tu éxito hoy mismo!</p>
          <p>Selecciona una de las siguientes tareas que puede hacer Astra para tí para hacer crecer tu negocio.</p>
          <ul className="grid md:grid-cols-2 md:gap-2 gap-8 mt-4">
            {
              services.map(({ title, key, description, icon: Icon }) => <li key={key} className='flex flex-col justify-center items-center md:border-r last:border-none px-2 py-1 gap-2'>
                <Icon />
                <h2 className={`text-base md:text-xl lg:text-2xl text-balance tracking-wide font-bold text-web-primary text-center pb-4 ${sourceSans.className}`}>{title}</h2>
                <p className='text-base md:text-xl lg:text-2xl text-center hidden md:block'>{description}</p>
                <Button onClick={() => selectService(key)}>Comenzar</Button>
              </li>)
            }
          </ul>
        </div>
      </div>
      {
        status === STATUS.LOADING && <div className='w-full flex flex-col justify-center items-center p-2 lg:p-4 flex-shrink-0'>
          <div className="speech-form flex flex-col justify-center items-center flex-1 mx-auto w-full">
            <h2 className={`text-xl md:text-2xl lg:text-3xl text-balance tracking-wide font-bold text-web-secondary pb-4 ${sourceSans.className}`}>Cargando...</h2>
            <p>Estamos generando ideas para tu negocio. Por favor, espera un momento.</p>
          </div>
        </div>
      }
      <div className='w-full flex flex-col justify-center items-center p-2 lg:p-4 flex-shrink-0'>
        <div className="speech-form flex-1 mx-auto w-full">
          <IdeasForm submitForm={onSubmit} onBack={() => setStatus(STATUS.IDLE)} isConsulted={result[service]} onResult={() => setStatus(STATUS.RESULT)} />
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center p-2 lg:p-4 flex-shrink-0'>
        <div className="speech-form flex-1 mx-auto w-full">
          {
            service === 'marketStudy' && <MarketStudyResult marketStudy={marketStudy} />
          }
          {
            service === 'ideas' && <IdeasResult ideas={ideas} />
          }
          <button
            className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
            onClick={() => setStatus(STATUS.FORM)}>
              pasar al anterior
          </button>
        </div>
      </div>
    </div>
  )
}