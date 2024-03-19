import React from 'react'
import { Link } from 'react-router-dom'

interface LosePageProps {
  pickedWord: string
}

const LosePage: React.FC<LosePageProps> = ({ pickedWord }) => {
  return (
    <div className="mt-4 flex h-screen items-center justify-center overflow-hidden bg-white">
      <div className="mx-auto w-full justify-center px-4 sm:px-6 lg:px-8">
        <div className="lg:mx-0">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Game Over!
          </h2>
          <div className="flex items-center justify-center">
            <img
              src="/undraw_not_found_re_bh2e.svg"
              alt="Página não encontrada"
              className="mr-4 h-48 w-48 rounded-full"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="rounded-lg border border-gray-200 bg-white p-4 px-20 shadow-md">
            <div className="mb-3 flex justify-between text-center">
              <div>
                <div className="text-xl font-bold text-gray-900">
                  <p className="text-base font-medium">A palavra era:</p>
                  {pickedWord}
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

export default LosePage
