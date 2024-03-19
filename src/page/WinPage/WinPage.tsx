import React from 'react'
import { Link } from 'react-router-dom'

interface WinPageProps {
  guesses: number
  wrongLetters: string[]
}

const WinPage: React.FC<WinPageProps> = ({ guesses, wrongLetters }) => {
  return (
    <div className="mt-4 overflow-hidden bg-white">
      <div className="mx-auto w-full justify-center px-4 sm:px-6 lg:px-8">
        <div className="lg:mx-0">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Parabéns! Você Venceu!
          </h2>
          <div className="mt-6 flex items-center justify-center">
            <img
              src="/undraw_awards_fieb.svg"
              alt="Avatar do Jogador"
              className="mr-4 h-48 w-48 animate-bounce rounded-full"
            />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-md">
            <div className="mb-3 flex justify-between">
              <div>
                <span className="mb-3 block font-medium text-gray-600">
                  Tentativas
                </span>
                <div className="text-xl font-medium text-gray-900">
                  {guesses}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-md">
            <div className="mb-3 flex justify-between">
              <div>
                <span className="mb-3 block font-medium text-gray-600">
                  Letras Erradas
                </span>
                <div className="text-xl font-medium text-gray-900">
                  {wrongLetters}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="rounded-full bg-gray-500 px-6 py-3 font-bold text-white hover:bg-gray-600"
          >
            Voltar à Tela Inicial
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WinPage
