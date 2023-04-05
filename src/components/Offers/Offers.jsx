import "./Offers.css"
import Offer from "./Offer/offer";
import {useNavigate} from "react-router-dom";

const Offers = (props) => {
    const navigate = useNavigate();
    const showSelectHandler = () =>{
        navigate("/tour")
    }
    return (
        <div className="offer">
            <h1>Choose Your Destination</h1>
            <div className="offers-block">

                {
                    props.cards.map(card => <Offer slide={card}/>)
                }

            </div>
            <button className="view-all" onClick={showSelectHandler}><a>View All Places</a></button>
        </div>
    )
}

export default Offers