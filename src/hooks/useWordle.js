import { useState } from "react"

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState("")
    const [guesses, setGuesses] = useState([...Array(6)])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)

    const formatGuess = () => {
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((l) => {
            return {key: l, color: "grey"}
        })

        formattedGuess.forEach((l, i) => {
            if (solutionArray[i] === l.key) {
                formattedGuess[i].color = "green"
                solutionArray[i] = null
            }
        })

        formattedGuess.forEach((l, i) => {
            if (solutionArray.includes(l.key) && l.color !== "green") {
                formattedGuess[i].color = "yellow"
                solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })

        return formattedGuess
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

            const formattedGuess = formatGuess()
            console.log(formattedGuess)
        }
    }

    return { turn, currentGuess, guesses, isCorrect, handleKeyup }
}

export default useWordle