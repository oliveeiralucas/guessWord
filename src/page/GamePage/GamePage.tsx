//gamePage.tsx
import React, { useEffect, useState } from 'react'

import { wordlist } from '@/Data/wordlist'

import LosePage from '../LosePage/LosePage'
import WinPage from '../WinPage/WinPage'
import GamePageDisplay from './GamePage.display'

type WordListType = Record<string, string[]>

const GamePage: React.FC = () => {
  const [words] = useState<WordListType>(wordlist) //puxa lista de palavras
  const [pickedWord, setPickedWord] = useState<string>('') //define palavra
  const [pickedCategory, setPickedCategory] = useState<string>('') //define categoria
  const [letters, setLetters] = useState<string[]>([])
  const [guessesLetters, setGuessedLetters] = useState<string[]>([]) //letras acertadas
  const [wrongLetters, setWrongLetters] = useState<string[]>([]) //letras erradas
  const [guesses, setGuesses] = useState(5) //tentativas
  const [score, setScore] = useState(0) //pontuação
  const [inputValue, setInputValue] = useState<string>('') //texto para input

  useEffect(() => {
    const PickWordAndCategory = () => {
      const categories = Object.keys(words) as string[]
      const categoryIndex = Math.floor(Math.random() * categories.length)
      const category = categories[categoryIndex]
      setPickedCategory(category)

      const wordsInCategory = words[category]
      const wordIndex = Math.floor(Math.random() * wordsInCategory.length)
      const word = wordsInCategory[wordIndex]
      setPickedWord(word)
      SplitLetters(word)
      console.log(word)
    }
    PickWordAndCategory()
  }, [words])

  const SplitLetters = (word: string) => {
    const cleanedWord = word.replace(/\s/g, '') // Remover espaços em branco
    const splitWord = cleanedWord.split('').map((l: string) => l.toLowerCase())
    setLetters(splitWord)
  }

  const handleLetterSubmit = (letter: string) => {
    const lowerCaseLetter = letter.toLowerCase() // Convertendo para minúsculas

    //verifica se tem espaço
    if (lowerCaseLetter.trim() === '') {
      return
    }

    //verifica se são letras
    if (!/^[a-zA-Z]$/.test(lowerCaseLetter)) {
      return
    }

    //para evitar que letras repetidas contem
    if (
      guessesLetters.includes(lowerCaseLetter) ||
      wrongLetters.includes(lowerCaseLetter)
    ) {
      return
    }

    if (!letters.includes(lowerCaseLetter)) {
      // Verifica se a letra está na palavra
      setWrongLetters([...wrongLetters, lowerCaseLetter])
      setGuesses(guesses - 1)
    } else {
      setGuessedLetters([...guessesLetters, lowerCaseLetter])
      setScore(score + 10)
    }

    setInputValue('')
  }

  const handleInputKeyPress = (
    letter: string,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      handleLetterSubmit(letter)
    }
  }

  // Lógica jogo ganho
  const guessedSet = new Set(guessesLetters)
  const wordSet = new Set(pickedWord.toLowerCase())
  const allLettersGuessed = [...wordSet].every((letter) =>
    guessedSet.has(letter)
  )
  if (allLettersGuessed) {
    return <WinPage guesses={guesses} wrongLetters={wrongLetters} />
  }

  // Lógica jogo perdido
  if (guesses === 0) {
    return <LosePage pickedWord={pickedWord} />
  }

  return (
    <div>
      <GamePageDisplay
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleInputKeyPress={handleInputKeyPress}
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessesLetters={guessesLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
        handleLetterSubmit={handleLetterSubmit}
      />
    </div>
  )
}

export default GamePage
