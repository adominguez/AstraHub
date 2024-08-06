interface Idea {
  idea: string;
  description: string;
  priceRange: string;
  time: string;
  jobs: string[];
}

interface IdeasResultProps {
  ideas: Idea[];
}

export default function IdeasResult({ ideas } : IdeasResultProps) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-4">Resultados</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {ideas.map((idea, index) => (
          <div key={index} className="bg-black/30 p-4 text-gray-400 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-web-primary mb-2">{idea.idea}</h3>
            <p>{idea.description}</p>
            <p className="mt-2"><strong className="text-gray-50">Rango de precio:</strong> {idea.priceRange}</p>
            <p><strong className="text-gray-50">Tiempo:</strong> {idea.time}</p>
            <p><strong className="text-gray-50">Puestos:</strong> {`(${idea.jobs?.length}) ${idea.jobs.join(', ')}`}</p>
          </div>
        ))}
      </div>
    </div>
  )
}