import { React, useState, useRef } from 'react'
import './Todo.css'

const Todo = () => {
    const [input, setInput] = useState("")
    const [index, setIndex] = useState(null)
    const [items, setItems] = useState([])
    const inputRef = useRef(null)

    const handleAdd = () => {

        if (index == null) {
            setItems([...items, input])
        } else {
            const temp = items
            items[index] = input
            setItems(temp)
            setIndex(null)
        }
        setInput("")
        inputRef.current.focus()
    }

    const handleEdit = (i) => {
        setInput(items[i])
        setIndex(i)
        inputRef.current.focus()
    }

    return (
        <section className="comm-section">
            <div className="container">
                <div className='comm-wrap'>
                    <div className="todo-box">
                        <div className="todo-head">
                            <input
                                type="text"
                                value={input}
                                ref={inputRef}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key == "Enter") {
                                        handleAdd()
                                    }
                                }}
                            />
                            <button onClick={handleAdd}>{index == null ? "Add" : "Update"}</button>
                        </div>
                        <div className="todo-list">
                            <ul>
                                {
                                    items.map((item, i) => (
                                        <li key={i}>
                                            {item}
                                            <button onClick={() => handleEdit(i)}>Edit</button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Todo
