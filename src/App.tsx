import { useEffect, useState } from 'react'
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
  const [answer, setAnswer] = useState(answerArr.map((item) => ({ ...item })))
  const [letters, setLetters] = useState(
    lettersArr.map((item) => ({ ...item }))
  )
  const [guessAmount, setGuessAmount] = useState(0)

  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    if (!answer.filter((item) => item.hasBeenGuessed === false).length) {
      setGameOver(true)
    }
  })

  const handleResetGame = () => {
    setGameOver(false)
    setAnswer(answerArr.map((item) => ({ ...item })))
    setLetters(lettersArr.map((item) => ({ ...item })))
    setGuessAmount(0)
  }

  const GameOver = (
    <div className='win-text'>
      <div>You won!</div>
      <div>It took you {guessAmount} guesses</div>
      <button onClick={handleResetGame}>Play Again?</button>
    </div>
  )

  return gameOver ? (
    GameOver
  ) : (
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
