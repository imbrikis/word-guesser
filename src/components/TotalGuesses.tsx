import React from 'react'

interface TotalGuessesProps {
  guessAmount: number
}

const TotalGuesses: React.FC<TotalGuessesProps> = (props) => {
  const { guessAmount } = props

  return <div className='total-guesses'>Current Guesses: {guessAmount}</div>
}

export default TotalGuesses
