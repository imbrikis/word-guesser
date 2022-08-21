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

  const handleClick = () => {
    if (hasBeenSelected) return

    handleLetterClick(letter)
  }

  return (
    <div className='letter' onClick={handleClick}>
      {letter}
    </div>
  )
}

export default Letter
