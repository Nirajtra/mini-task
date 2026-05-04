import Navbar from "./components/Navbar/Navbar"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import Counter from "./pages/Counter/Counter"
import SignInForm from "./pages/SignInForm/SignInForm"
import Calc from "./pages/Calc/Calc"
import Weather from "./pages/Weather/Weather"
import Todo from "./pages/Todo/Todo"
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<SignInForm />} />
        <Route path="/calc" element={<Calc />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  )
}

export default App
