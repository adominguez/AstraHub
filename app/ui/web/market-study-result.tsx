interface MarketStudy {
  marketSizeAndGrowth: {
    industry: string;
    marketSize: string;
    growthRate: string;
    growthDrivers: string[];
  };
  marketSegmentation: {
    demographicSegments: string[];
    geographicSegments: string[];
    psychographicSegments: string[];
  };
  competitorAnalysis: {
    mainCompetitors: string[];
    competitorStrengthsAndWeaknesses: {
      strengths: string[];
      weaknesses: string[];
    };
    pricingAndPositioningStrategies: string[];
  };
  consumerPreferencesAndBehaviors: {
    preferences: string[];
    purchaseFactors: string[];
    consumptionPatterns: string[];
  };
  economicAndRegulatoryConditions: {
    economicConditions: string[];
    regulatoryConditions: string[];
  };
  opportunitiesAndThreats: {
    opportunities: string[];
    threats: string[];
  };
  conclusion: string;
}

interface MarketStudyResultProps {
  marketStudy: MarketStudy;
}

export default function MarketStudyResult({ marketStudy } : MarketStudyResultProps) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-4">Resultados</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="bg-black/30 p-4 text-gray-400 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-web-primary mb-2">Tamaño del mercado y crecimiento</h3>
          <p><strong className="text-gray-50">Industria:</strong> {marketStudy?.marketSizeAndGrowth?.industry}</p>
          <p><strong className="text-gray-50">Tamaño del mercado:</strong> {marketStudy?.marketSizeAndGrowth?.marketSize}</p>
          <p><strong className="text-gray-50">Tasa de crecimiento:</strong> {marketStudy?.marketSizeAndGrowth?.growthRate}</p>
          <p><strong className="text-gray-50">Factores de crecimiento:</strong> {marketStudy?.marketSizeAndGrowth?.growthDrivers.join(', ')}</p>
        </div>
        <div className="bg-black/30 p-4 text-gray-400 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-web-primary mb-2">Segmentación de mercado</h3>
          <p><strong className="text-gray-50">Segmentos demográficos:</strong> {marketStudy?.marketSegmentation?.demographicSegments.join(', ')}</p>
          <p><strong className="text-gray-50">Segmentos geográficos:</strong> {marketStudy?.marketSegmentation?.geographicSegments.join(', ')}</p>
          <p><strong className="text-gray-50">Segmentos psicográficos:</strong> {marketStudy?.marketSegmentation?.psychographicSegments.join(', ')}</p>
        </div>
        <div className="bg-black/30 p-4 text-gray-400 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-web-primary mb-2">Análisis de competidores</h3>
          <p><strong className="text-gray-50">Principales competidores:</strong> {marketStudy?.competitorAnalysis?.mainCompetitors.join(', ')}</p>
          <p><strong className="text-gray-50">Fortalezas:</strong> {marketStudy?.competitorAnalysis?.competitorStrengthsAndWeaknesses.strengths.join(', ')}</p>
          <p><strong className="text-gray-50">Debilidades:</strong> {marketStudy?.competitorAnalysis?.competitorStrengthsAndWeaknesses.weaknesses.join(', ')}</p>
          <p><strong className="text-gray-50">Estrategias de precios y posicionamiento:</strong> {marketStudy?.competitorAnalysis?.pricingAndPositioningStrategies.join(', ')}</p>
        </div>
        <div className="bg-black/30 p-4 text-gray-400 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-web-primary mb-2">Preferencias y comportamientos del consumidor</h3>
          <p><strong className="text-gray-50">Preferencias:</strong> {marketStudy?.consumerPreferencesAndBehaviors?.preferences.join(', ')}</p>
          <p><strong className="text-gray-50">Factores de compra:</strong> {marketStudy?.consumerPreferencesAndBehaviors?.purchaseFactors.join(', ')}</p>
          <p><strong className="text-gray-50">Patrones de consumo:</strong> {marketStudy?.consumerPreferencesAndBehaviors?.consumptionPatterns.join(', ')}</p>
        </div>
        <div className="bg-black/30 p-4 text-gray-400 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-web-primary mb-2">Condiciones económicas y regulatorias</h3>
          <p><strong className="text-gray-50">Condiciones económicas:</strong> {marketStudy?.economicAndRegulatoryConditions?.economicConditions.join(', ')}</p>
          <p><strong className="text-gray-50">Condiciones regulatorias:</strong> {marketStudy?.economicAndRegulatoryConditions?.regulatoryConditions.join(', ')}</p>
        </div>
        <div className="bg-black/30 p-4 text-gray-400 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-web-primary mb-2">Oportunidades y amenazas</h3>
          <p><strong className="text-gray-50">Oportunidades:</strong> {marketStudy?.opportunitiesAndThreats?.opportunities.join(', ')}</p>
          <p><strong className="text-gray-50">Amenazas:</strong> {marketStudy?.opportunitiesAndThreats?.threats.join(', ')}</p>
        </div>
        <div className="bg-black/30 p-4 text-gray-400 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-web-primary mb-2">Conclusión</h3>
          <p>{marketStudy?.conclusion}</p>
        </div>
    </div>
  </div>
  )
}