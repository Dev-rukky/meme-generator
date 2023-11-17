import logo from "../images/Troll Face.svg"
import "../styles/Navbar.css"

const Navbar = () => {
    return (
        <nav className="">
            <div className="logo-con">
                <img src={logo} alt="brand logo" />
                <p>Meme Generator</p>
            </div>

            <div className="nav-statement">
                <p>React Course - Project 3</p>
            </div>

        </nav>
    )
}


export default Navbar