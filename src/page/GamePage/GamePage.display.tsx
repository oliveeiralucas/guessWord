//gamedisplay.tsx

import 'primereact/resources/themes/lara-light-cyan/theme.css'

import { InputText } from 'primereact/inputtext'
import React from 'react'

interface GamePageDisplayProps {
  pickedWord: string
  pickedCategory: string
  letters: string[]
  guessesLetters: string[]
  wrongLetters: string[]
  guesses: number
  score: number
  handleLetterSubmit: (letter: string) => void
  handleInputKeyPress: (
    letter: string,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => void
  inputValue: string
  setInputValue: (value: string) => void
}

const GamePageDisplay: React.FC<GamePageDisplayProps> = ({
  pickedCategory,
  letters,
  guessesLetters,
  wrongLetters,
  guesses,
  handleLetterSubmit,
  handleInputKeyPress,
  inputValue,
  setInputValue
}) => {
  return (
    <>
      <div className="mt-8">
        {/* Título e pontuação */}
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-teal-500">Guess Word</h1>
          <p className="border p-2 text-xl font-semibold text-gray-500">
            Tentativas restantes: {guesses}
          </p>
        </div>

        {/* Frase de efeito */}
        <div className="mt-4 text-center">
          <p className="text-lg italic">Você consegue adivinhar a palavra?</p>
        </div>

        {/* Dica sobre a palavra */}
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Dica:</p>
          <p className="text-center text-gray-600">
            Essa palavra se relaciona com {pickedCategory}.
          </p>
        </div>

        {/* Layout dos espaços da palavra */}
        <div className="mt-8 text-center">
          <p className="flex items-center justify-center text-4xl font-bold">
            {letters.map((letter, index) =>
              guessesLetters.includes(letter) ? (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={letter.toLocaleUpperCase()}
                  data-focus-input-init
                  data-focus-input-prev="code-5"
                  id="code-6"
                  className="mx-2 flex h-9 w-9 rounded-lg border border-gray-300 bg-white py-3 text-center text-sm font-extrabold text-gray-900"
                  disabled
                />
              ) : (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  data-focus-input-init
                  data-focus-input-prev="code-5"
                  id="code-6"
                  className="mx-2 flex h-9 w-9 rounded-lg border border-gray-300 bg-white py-3 text-center text-sm font-extrabold text-gray-900"
                  required
                  disabled
                />
              )
            )}
          </p>
        </div>

        {/* Instrução para tentar adivinhar */}
        <div className="mt-6 text-center">
          <p className="text-lg">Tente adivinhar uma letra da palavra:</p>
        </div>

        {/* Input para inserir letra */}
        <div className="mt-4 flex items-center justify-center">
          <InputText
            keyfilter="alpha"
            placeholder="Informe uma letra"
            type="text"
            maxLength={1}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => handleInputKeyPress(inputValue, e)}
            className="mr-0 h-10 rounded-l-lg border-y border-l border-gray-200 bg-white p-2 px-4 text-gray-800"
            unstyled
          />
          <button
            onClick={() => handleLetterSubmit(inputValue)}
            className="rounded-r-lg border-y border-r border-teal-500 bg-teal-500 p-2 px-8 font-bold uppercase text-white hover:bg-teal-600"
          >
            Enviar
          </button>
        </div>

        {/* Letras já utilizadas */}
        <div className="mt-6 flex flex-col items-center justify-center text-center">
          <p className="text-lg font-semibold">Letras utilizadas:</p>
          <p className="mt-2 h-full w-4/12 border p-2 text-gray-600">
            {wrongLetters.join(', ')}
          </p>
        </div>
      </div>
    </>
  )
}

export default GamePageDisplay
