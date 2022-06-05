import React from 'react'

export default function Row({ guess, currentGuess, putGuess }) {
    
    if (putGuess) {
        const currentGuessArray = [...currentGuess];
            return (
                <div className='row'>
                    <div>{ currentGuessArray[0] }</div>
                    <div>{ currentGuessArray[1] }</div>
                    <div>{ currentGuessArray[2] }</div>
                    <div>{ currentGuessArray[3] }</div>
                    <div>{ currentGuessArray[4] }</div>
                </div>
            )
    }

    if (guess) {
        return (
            <div className='row'>
                {guess.map((l, i) => {
                    return <div key={i} className={l.color}>{l.key}</div>
                })}
            </div>
        )
    }
    
    return (
        <div className='row'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
