import { useState } from 'react'
import './App.css'
import GuessArea from './components/GuessArea'
import LetterBank from './components/LetterBank'
import TotalGuesses from './components/TotalGuesses'

const answerString = 'BOOKWORM'
const answerArr = answerString.split('').map((letter) => ({
  letter,
  hasBeenGuessed: false,
}))

const guessableLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lettersArr = guessableLetters.split('').map((letter) => ({
  letter,
  hasBeenSelected: false,
}))

const App = () => {
  const [answer, setAnswer] = useState(answerArr)
  const [letters, setLetters] = useState(lettersArr)
  const [guessAmount, setGuessAmount] = useState(0)

  return (
    <div className='app-container'>
      <GuessArea answer={answer} />
      <LetterBank
        setGuessAmount={setGuessAmount}
        letters={letters}
        setLetters={setLetters}
        answer={answer}
        setAnswer={setAnswer}
      />
      <TotalGuesses guessAmount={guessAmount} />
    </div>
  )
}

export default App
