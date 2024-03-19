import { Button } from 'primereact/button'
import React from 'react'
import { Link } from 'react-router-dom'

const InitialPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-0 overflow-hidden bg-white text-gray-800 md:grid-cols-2">
      <div className="flex h-screen items-center p-6 text-center md:col-span-1 md:text-left ">
        <section>
          <span className="mb-1 block text-6xl font-bold">
            Pressione o botão abaixo para começar sua jornada
          </span>
          <div className="mb-3 text-6xl font-bold text-teal-500">
            Guess Word
          </div>
          <p className="mb-4 mt-0 leading-9 text-gray-700">
            Venha embarcar nesta aventura desafiadora!
          </p>
          <Link to={'/game'}>
            <Button
              label="Jogar Demo"
              type="button"
              className="mr-3 rounded-full bg-teal-500 px-6 py-3 text-white"
            />
          </Link>
          <Link to={'/tutorial'}>
            <Button
              label="Como Jogar"
              type="button"
              className="rounded-full border border-teal-500 bg-transparent px-6 py-3 text-teal-500 hover:bg-teal-500 hover:text-white"
            />
          </Link>
        </section>
      </div>
      <div className="overflow-hidden transition-transform duration-500 ease-in-out hover:translate-x-4 md:col-span-1">
        <img
          src="/bg-image.jpg"
          alt="hero-1"
          className="block h-auto w-full object-cover md:ml-auto md:h-full"
          style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }}
        />
      </div>
    </div>
  )
}

export default InitialPage
