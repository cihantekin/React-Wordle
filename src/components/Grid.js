import React from 'react'
import Row from './Row'

export default function Grid({ currentGuess, guesses, turn}) {
  return (
    <div>
        {guesses.map((g, i) => {
            const putGuess = i == turn;
            return <Row key={i} guess={g} currentGuess={currentGuess} putGuess={putGuess} />
        })}
    </div>
  )
}
