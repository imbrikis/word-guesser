import React from 'react'

interface GuessProps {
  tile: {
    letter: string
    hasBeenGuessed: boolean
  }
}

const Guess: React.FC<GuessProps> = (props) => {
  const { tile } = props
  return (
    <div className={`guess ${tile.hasBeenGuessed ? 'guessed-letter' : ''}`}>
      {tile.hasBeenGuessed ? tile.letter : '?'}
    </div>
  )
}

export default Guess
