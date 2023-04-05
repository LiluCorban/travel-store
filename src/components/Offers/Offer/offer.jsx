
import "./Offer.css"
import {useNavigate} from "react-router-dom";

const Offer = (props) => {

    const navigate = useNavigate();
    const showSelectHandler = () =>{
        navigate("/select")
    }
    return (
        <div className="offer-card">
            <img src={props.slide.photo} alt="place"/>
            <div className="offer-description">
                <div className="price-block">
                    <h3>{props.slide.name}</h3>
                    <p>{props.slide.price}</p>
                </div>
                <button><a onClick={showSelectHandler}>+</a></button>
            </div>

        </div>
    )

}
export default Offer