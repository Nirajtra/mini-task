import { useState } from "react"
import './Counter.css'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <section className="comm-section">
            <div className="container">
                <div className="comm-wrap">
                    <div className="counter-wrap">
                        <button onClick={() => setCounter(counter - 1)}>-</button>
                        <button>{counter}</button>
                        <button onClick={() => setCounter(counter + 1)}>+</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Counter
