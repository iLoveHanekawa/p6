import logo from "../images/ananyaLogo.png";
import flower from "../images/flower.png";

export default function Navbar() {
    return <div className="navbar">
        <img src = {flower} className = "flower"></img>
        <img src = {logo} className = "logo"></img>
    </div>
}