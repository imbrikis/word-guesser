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
    <div className='guess'>
      <span>{tile.hasBeenGuessed ? tile.letter : ' '}</span>
    </div>
  )
}

export default Guess
