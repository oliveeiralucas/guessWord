import 'App.css'

import { Button } from 'primereact/button'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
    <section className="flex h-screen items-center bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-teal-600 lg:text-9xl">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Página Não Encontrada
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">
            Estamos trabalhando para resolver esse problema
          </p>
          <Link to={'/'}>
            <Button
              label="Voltar a tela inicial"
              className="rounded-full bg-teal-500 p-3 text-white"
              icon={<BiArrowBack className="mr-2" />}
              style={{ transition: 'background-color 0.3s ease-in-out' }}
              aria-label="Voltar à tela inicial"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound
