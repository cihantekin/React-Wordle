import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'

export default function Wordle({solution}) {
    
    const {currentGuess, handleKeyup} = useWordle(solution)

    //useEffect'e array olarak dependecyleri veriyoruz. Bu dependencylerde bir değişiklik olursa bu useEffect metodu tekrar çalışıyor
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)
        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

  return (
      <div>
          <div>Solution: {solution}</div>
          <div>Current guess:{currentGuess}</div>
      </div>
  )
}
