import "./Header.css"
import logo from "../../assets/img/logo.svg"
import user from "../../assets/img/user.svg"
import basket from "../../assets/img/basket.svg"
import search from "../../assets/img/search.svg"
import nameLogo from "../../assets/img/name.svg"
import {NavLink} from "react-router-dom";

const HeaderLink = () =>{
    return(
        <nav>
            <NavLink to={"/offer"}> <a>Offer</a></NavLink>
            <NavLink to={"/bestsellers"}> <a>Bestsellers</a></NavLink>
            <NavLink to={"/tour"}> <a>Tour</a></NavLink>
            <NavLink to={"/news"}> <a>Travel News</a></NavLink>

        </nav>
    )
}
const LogoLink = () =>{
    return(
        <NavLink to={"/"}> <a>
            <div className="logo-block">
                <img src={logo} alt="logo"/>
                <img src={nameLogo} alt="name"/>
            </div>
        </a></NavLink>

    )

}
const Header = ()=>{
    return(
        <header>


           <LogoLink/>


                <HeaderLink/>


            <div className="account-block">
            <a href="#"><img src={basket} alt="basket"/></a>
            <a href="#"><img src={user} alt="user"/> </a>
            <a href="#"><img src={search} alt="search"/></a>

            </div>
        </header>
    )
}
export default Header;