import { Link } from "react-router-dom"
import LogoImg from '../../assets/imgs/Logo/logoLampada.svg'
export default function Navbar(){
return(
   <nav className=" flex flex-col md:flex-row items-center justify-around fixed top-0 left-0 right-0 bg-black text-white bg-opacity-20 z-10 p-2">
         <Link to={"/"}>
        <div className="flex items-center ">
        <img src={LogoImg} alt="" className="w-32"/>
        <h1 className="text-4xl font-bold">Oneshot</h1>
        </div>
        </Link>
    <ul className="flex space-x-6 text-lg md:text-2xl">
      <li><Link to={"/characters"}>Characters</Link></li>
      <li><Link to={"/gameinfo"}>Game Info</Link></li>
      <li><Link to={"/gamingcontent"}>Gaming Conten</Link></li>
    </ul>
   </nav>
)
}
