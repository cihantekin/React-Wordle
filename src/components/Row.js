import React from 'react'

export default function Row({ guess, currentGuess, putGuess }) {

    if (putGuess) {
        const currentGuessArray = [...currentGuess];
        const items = []
        for (let index = 0; index < 5; index++) {
            const className = currentGuessArray[index] ? "filled" : "";
            items.push(<div key={index} className={className}>{currentGuessArray[index]}</div>)
        }

        return (
            <div className='row current'>
                {items}
            </div>
        )
    }

    if (guess) {
        return (
            <div className='row past'>
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
