import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'

export default function Wordle({ solution }) {

    const { currentGuess, handleKeyup, turn, isCorrect, guesses, usedKeys } = useWordle(solution)

    //useEffect'e array olarak dependecyleri veriyoruz. Bu dependencylerde bir değişiklik olursa bu useEffect metodu tekrar çalışıyor
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        if (isCorrect || turn > 5) {
            window.removeEventListener('keyup', handleKeyup)
        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect, turn])



    return (
        <div>
            <div>Solution: {solution}</div>
            <div>Current guess:{currentGuess}</div>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
            <Keypad usedKeys={usedKeys} />
        </div>
    )
}
