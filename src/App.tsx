import { useEffect, useState } from 'react'
import './App.css'
import GuessArea from './components/GuessArea'
import LetterBank from './components/LetterBank'
import TotalGuesses from './components/TotalGuesses'

const guessableLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lettersArr = guessableLetters.split('').map((letter) => ({
  letter,
  hasBeenSelected: false,
}))

type Answer = {
  letter: string
  hasBeenGuessed: boolean
}[]

const App = () => {
  const [answer, setAnswer] = useState<Answer | undefined>(undefined)
  console.log('Answer:', answer)
  const [letters, setLetters] = useState(
    lettersArr.map((item) => ({ ...item }))
  )
  const [guessAmount, setGuessAmount] = useState(0)

  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    if (
      answer &&
      !answer.filter((item) => item.hasBeenGuessed === false).length
    ) {
      setGameOver(true)
    }
  })

  const processData = (data: string[]) => {
    const answerArr = data[0]
      .toUpperCase()
      .split('')
      .map((letter) => ({
        letter,
        hasBeenGuessed: false,
      }))
    setAnswer(answerArr)
  }

  const fetchNewWord = () => {
    fetch('https://random-word-api.herokuapp.com/word?length=8')
      .then((response) => response.json())
      .then((data) => processData(data))
  }

  useEffect(() => {
    fetchNewWord()
  }, [])

  const handleResetGame = () => {
    setGameOver(false)
    setAnswer(undefined)
    setLetters(lettersArr.map((item) => ({ ...item })))
    setGuessAmount(0)
    fetchNewWord()
  }

  const renderedGameOverContent = (
    <div className='win-text'>
      {answer && <GuessArea answer={answer} />}
      <div>You won!</div>
      <div>It took you {guessAmount} guesses</div>
      <button onClick={handleResetGame}>Play Again?</button>
    </div>
  )

  console.log(gameOver)

  return gameOver ? (
    renderedGameOverContent
  ) : (
    <div className='app-container'>
      {answer && (
        <>
          <GuessArea answer={answer} />
          <LetterBank
            setGuessAmount={setGuessAmount}
            letters={letters}
            setLetters={setLetters}
            answer={answer}
            setAnswer={setAnswer}
          />
          <TotalGuesses guessAmount={guessAmount} />
        </>
      )}
    </div>
  )
}

export default App
