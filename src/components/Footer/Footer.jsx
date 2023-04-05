import "./Footer.css"
import logo from "../../assets/img/logo.svg";
import nameLogo from "../../assets/img/name.svg";
const Footer = () => {
    return  (
        <footer>
            <div className="contact">
                <div className="logo-block">
                    <img src={logo} alt="logo"/>
                    <img src={nameLogo} alt="name"/>
                </div>
                <p>You can dream, create, design, and build the most wonderful place.</p>
                <p>+0123 456 987, +0123 456 987</p>
                <p>yourmailaddress@gmail.com</p>
                <p>www.yourwebsitename.com</p>
            </div>
            {/*<div className="subscribe">*/}
            {/*    <h2>Offers</h2>*/}
            {/*    <input type="email"/>*/}
            {/*    <button>Subscribe Now</button>*/}


            {/*</div>*/}

        </footer>
    )
}
export default Footer