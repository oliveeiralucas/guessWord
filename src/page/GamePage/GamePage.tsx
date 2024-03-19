//gamePage.tsx
import React, { useEffect, useState } from 'react'

import { wordlist } from '@/Data/wordlist'

import GamePageDisplay from './GamePage.display'

type WordListType = Record<string, string[]>

const GamePage: React.FC = () => {
  const [words] = useState<WordListType>(wordlist)
  const [pickedWord, setPickedWord] = useState<string>('')
  const [pickedCategory, setPickedCategory] = useState<string>('')
  const [letters, setLetters] = useState<string[]>([])
  const [guessesLetters, setGuessedLetters] = useState<string[]>([])
  const [wrongLetters, setWrongLetters] = useState<string[]>([])
  const [guesses, setGuesses] = useState(5)
  const [score, setScore] = useState(0)

  useEffect(() => {
    PickWordAndCategory()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
  }

  const SplitLetters = (word: string) => {
    const cleanedWord = word.replace(/\s/g, '') // Remover espaços em branco
    const splitWord = cleanedWord.split('').map((l: string) => l.toLowerCase())
    setLetters(splitWord)
  }

  const handleLetterSubmit = (letter: string) => {
    if (letter.trim() === '') {
      return
    }

    if (!/^[a-zA-Z]$/.test(letter)) {
      return
    }

    if (guessesLetters.includes(letter) || wrongLetters.includes(letter)) {
      return
    }

    setGuessedLetters([...guessesLetters, letter])
    if (!letters.includes(letter)) {
      setWrongLetters([...wrongLetters, letter])
      setGuesses(guesses - 1)
    } else {
      setScore(score + 10)
    }
  }
  const handleInputKeyPress = (
    letter: string,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      handleLetterSubmit(letter)
    }
  }

  return (
    <div>
      <GamePageDisplay
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
