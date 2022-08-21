import React, { useState } from 'react'
import Guess from './Guess'

interface GuessAreaProps {
  answer: {
    letter: string
    hasBeenGuessed: boolean
  }[]
}

const GuessArea: React.FC<GuessAreaProps> = (props) => {
  const { answer } = props

  return (
    <div className='guess-area'>
      {answer.map((tile, i) => (
        <Guess key={i} tile={tile} />
      ))}
    </div>
  )
}

export default GuessArea
