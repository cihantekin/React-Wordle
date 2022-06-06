import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'

export default function Wordle({ solution }) {

    const { currentGuess, handleKeyup, turn, isCorrect, guesses, usedKeys } = useWordle(solution)
    const [showModal, setShowModal ] = useState(false)

    //useEffect'e array olarak dependecyleri veriyoruz. Bu dependencylerde bir değişiklik olursa bu useEffect metodu tekrar çalışıyor
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        if (isCorrect || turn > 5) {
            setTimeout(( ) => {
                setShowModal(true)
            }, 2600)
            window.removeEventListener('keyup', handleKeyup)
        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect, turn, showModal])



    return (
        <div>
            <div>Solution: {solution}</div>
            {/* <div>Current guess:{currentGuess}</div> */}
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
            <Keypad usedKeys={usedKeys} />
            {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
        </div>
    )
}
