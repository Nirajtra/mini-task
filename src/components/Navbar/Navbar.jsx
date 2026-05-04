import { NavLink } from "react-router-dom"
import './Navbar.css'

const menu = [
    { name: 'Home', link: '/' },
    { name: 'Counter', link: '/counter' },
    { name: 'Form', link: '/form' },
    { name: 'Calculator', link: '/calc' },
    { name: 'Weather', link: '/weather' },
    { name: 'Todo', link: '/todo' },
]

const Navbar = () => {
    return (
        <ul className="menu-list">
            {
                menu.map((item) => (
                    <li key={item.name}>
                        <NavLink to={item.link}>{item.name}</NavLink>
                    </li>
                ))
            }
        </ul>
    )
}

export default Navbar