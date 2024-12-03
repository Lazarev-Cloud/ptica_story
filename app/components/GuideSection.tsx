interface GuideSectionProps {
    title: string
    content: string
    steps: string[]
  }
  
  export default function GuideSection({ title, content, steps }: GuideSectionProps) {
    return (
      <section className="mb-12 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-black pb-2">{title}</h2>
        <p className="mb-4">{content}</p>
        <ol className="list-decimal list-inside space-y-2">
          {steps.map((step, index) => (
            <li key={index} className="text-gray-800">{step}</li>
          ))}
        </ol>
      </section>
    )
  }
  
  