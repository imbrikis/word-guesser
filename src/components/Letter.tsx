import React from 'react'

interface LetterProps {
  letter: {
    letter: string
    hasBeenSelected: boolean
  }
  handleLetterClick: (letter: string) => void
}

const Letter: React.FC<LetterProps> = (props) => {
  const {
    letter: { letter, hasBeenSelected },
    handleLetterClick,
  } = props

  return (
    <div className='letter' onClick={() => handleLetterClick(letter)}>
      {letter}
    </div>
  )
}

export default Letter
