import { useState } from "react"

const useWordle = ({ solution }) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState("")
    const [guesses, setGuesses] = useState([])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)

    const formatGuess = () => {
        console.log("Format guess called for: " + currentGuess)
    }

    const addNewGuess = () => {

    }

    const handleKeyup = ({ key }) => {
        if (key === "Backspace") {
            setCurrentGuess((prev) => {
                return prev.substring(0, prev.length - 1)
            })
            return
        }

        if (/^[A-Za-z]$/.test(key) && currentGuess.length < 5) {
            setCurrentGuess((prev) => {
                return prev + key
            });
        }

        if (key === "Enter") {
            if (turn > 5) {
                console.log("You used all your guesses")
                return
            }
            
            if(history.includes(currentGuess)) {
                console.log("You already tried this word")
                return
            }
            if(currentGuess.length !== 5) {
                console.log("Word must be 5 chars max")
                return
            }

            formatGuess()
        }
    }

    return { turn, currentGuess, guesses, isCorrect, handleKeyup }
}

export default useWordle