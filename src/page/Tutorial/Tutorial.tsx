import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const tutorialSteps = [
  {
    id: 1,
    title: 'O que é o Jogo de Adivinhação de Palavras?',
    description:
      'O Jogo de Adivinhação de Palavras é um jogo divertido e envolvente onde os jogadores tentam adivinhar a palavra secreta com base nas pistas fornecidas.',
    imageUrl: '/image1.jpg'
  },
  {
    id: 2,
    title: 'Como Jogar',
    description:
      '1. Uma palavra aleatória é escolhida como a palavra secreta.\n2. Os jogadores se revezam tentando adivinhar letras para revelar a palavra secreta.\n3. Cada palpite correto revela a letra na palavra.\n4. Os jogadores vencem se adivinharem a palavra inteira antes de ficarem sem tentativas.',
    imageUrl: '/image2.jpg'
  },
  {
    id: 3,
    title: 'Dicas para o Sucesso',
    description:
      '1. Comece com vogais, pois elas são frequentemente encontradas em palavras.\n2. Procure por padrões de letras comuns no idioma que você está jogando.\n3. Elimine letras improváveis com base no contexto da palavra.\n4. Adivinhe as letras mais comuns no idioma primeiro (por exemplo, E, A, T, O, etc.).',
    imageUrl: '/image3.jpg'
  }
]

export default function Tutorial() {
  return (
    <div className="mt-6 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <div className="flex items-center">
            <Link to={'/'}>
              <div className="mr-2 rounded-lg bg-teal-500 p-2">
                <BiArrowBack className="text-2xl text-white " />
              </div>
            </Link>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Como Jogar o Jogo de Adivinhação de Palavras
            </h2>
          </div>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Aprenda como jogar o jogo e melhore suas chances de ganhar.
          </p>
        </div>
        <div className="mx-auto mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tutorialSteps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <img
                className="h-48 object-cover sm:h-48 lg:h-48"
                src={step.imageUrl}
                alt={step.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
