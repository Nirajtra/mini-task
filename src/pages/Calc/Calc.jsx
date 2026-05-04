import { React, useState, useEffect } from 'react'
import './Calc.css'

const Calc = () => {

    const [input, setInput] = useState("")
    const [result, setResult] = useState("")

    const handleDigit = (num) => {
        setInput(input + num)
    }

    const handleOp = (op) => {
        setInput(input + op)
    }

    const handleResult = () => {
        try {
            setResult(eval(input))
        } catch (error) {
            setResult(error)
        }
    }

    const handleClear = () => {
        setInput("")
        setResult("")
    }

    const handleBackspace = () => {
        setInput(input.slice(0, -1))
    }

    useEffect(() => {

        const handleKey = (e) => {
            if (!isNaN(e.key)) {
                setInput(prev => prev + e.key)
            } else if (['+', '-', '*', '/'].includes(e.key)) {
                setInput(prev => prev + e.key)
            } else if (e.key == "Enter") {
                handleResult()
            } else if (e.key == "Backspace") {
                handleBackspace()
            } else if (e.key == "Escape") {
                handleClear()
            }
        }

        window.addEventListener('keydown', handleKey)

        return () => {
            window.removeEventListener('keydown', handleKey)
        }

    }, [input])

    return (
        <section>
            <div className="comm-section">
                <div className="container">
                    <div className="comm-wrap">
                        <div className="calc-box">
                            <div className="calc-head">
                                <input type="text" value={input || 0} readOnly />
                                <input type="text" value={result || 0} readOnly />
                            </div>
                            <div className="calc-digit">
                                {
                                    [7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((num) => (
                                        <button onClick={() => handleDigit(num)} key={num}>{num}</button>
                                    ))
                                }
                            </div>
                            <div className="calc-op">
                                {
                                    ['+', '-', '*', '/'].map((op) => (
                                        <button key={op} onClick={() => handleOp(op)}>{op}</button>
                                    ))
                                }
                                <button onClick={handleResult}>=</button>
                                <button onClick={handleClear} title="Esc">Reset</button>
                                <button onClick={handleBackspace} >C</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Calc
