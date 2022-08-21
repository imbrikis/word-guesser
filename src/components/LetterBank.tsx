import React from 'react'
import Letter from './Letter'

type Answer = {
  letter: string
  hasBeenGuessed: boolean
}[]

type Letters = {
  letter: string
  hasBeenSelected: boolean
}[]

interface LetterBankProps {
  setGuessAmount: (amount: number) => void
  letters: Letters
  setLetters: (input: Letters) => void
  answer: Answer
  setAnswer: (input: Answer) => void
}

const LetterBank: React.FC<LetterBankProps> = (props) => {
  const { setGuessAmount, letters, answer, setAnswer, setLetters } = props

  const handleLetterClick = (selectedLetter: string) => {
    const foundCorrectLetter = answer.find((item) => {
      return item.letter === selectedLetter
    })

    if (foundCorrectLetter && !foundCorrectLetter.hasBeenGuessed) {
      const newAnswer = answer.map((item) => {
        if (item.letter === foundCorrectLetter.letter) {
          item.hasBeenGuessed = true
          return item
        }

        return item
      })

      setAnswer(newAnswer)
    }

    const newLetters = letters.map((item) => {
      if (item.letter === selectedLetter) {
        item.hasBeenSelected = true
        return item
      }

      return item
    })

    setLetters(newLetters)
    // TYPE THIS
    setGuessAmount((prev: number) => prev + 1)
  }

  return (
    <div className='letter-bank'>
      {letters.map((letter) => {
        return <Letter letter={letter} handleLetterClick={handleLetterClick} />
      })}
    </div>
  )
}

export default LetterBank
