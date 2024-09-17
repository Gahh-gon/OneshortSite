import { Link } from "react-router-dom"
export default function Navbar(){
return(
   <nav>
    <h1 className="text-4xl font-bold text-blue-600">Navbar</h1>
    <ul>
      <li><Link to={"/"}>About</Link></li>
      <li><Link to={"/characters"}>Characters</Link></li>
      <li><Link to={"/gameinfo"}>Game Info</Link></li>
      <li><Link to={"/gamingcontent"}>Gaming Conten</Link></li>
    </ul>
   </nav>
)
}
