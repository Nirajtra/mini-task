import React, { useState } from 'react'
import './SignInForm.css'

const SignInForm = () => {

    const [login, setLogin] = useState(true)
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!form.name || !form.email || !form.password) {
            alert("All fields are important")
            return
        }

        console.log("form data are:", form);

        setForm({
            name: "",
            email: "",
            password: ""
        })
    }

    return (
        <section className="comm-section">
            <div className="container">
                <div className="comm-wrap">
                    <div>
                        <h1>{login ? "Sign In" : "Sign Up"}</h1>

                        <form onSubmit={handleSubmit}>
                            {
                                login &&
                                <input type="text"
                                    placeholder='Name'
                                    value={form.name}
                                    name="name"
                                    onChange={handleChange} />
                            }
                            <input type="email"
                                placeholder='Email'
                                value={form.email}
                                name="email"
                                onChange={handleChange} />
                            <input type="password"
                                placeholder='Password'
                                value={form.password}
                                name="password"
                                onChange={handleChange} />
                            <button>{login ? "Sign In" : "Sign Up"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignInForm
