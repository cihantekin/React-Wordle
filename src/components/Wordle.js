import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'

export default function Wordle({solution}) {
    
    const {currentGuess, handleKeyup, turn, isCorrect, guesses} = useWordle(solution)

    //useEffect'e array olarak dependecyleri veriyoruz. Bu dependencylerde bir değişiklik olursa bu useEffect metodu tekrar çalışıyor
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)
        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    useEffect(() => {
        // console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect])

  return (
      <div>
          <div>Solution: {solution}</div>
          <div>Current guess:{currentGuess}</div>
          <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      </div>
  )
}
