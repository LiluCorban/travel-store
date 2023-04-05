import "./BestSellers.css"
import BestSell from "./BestSell/BestSell";
import {useNavigate} from "react-router-dom";

const BestSellers = (props)=>{
    const navigate = useNavigate();
    const showSelectHandler = () =>{
        navigate("/offer")
    }
    return(
        <div className="bestsellers">
            <div className="description-block">
                <h2>Top Destinations <br/>
                    In The World</h2>
                <p>It is a long established fact that a reader will be the distracted
                    by the readable content of a page when looking at its layout from it.</p>
                <button><a onClick={showSelectHandler}>Discover More</a></button>
            </div>
            {
                props.cards.map(card => <BestSell slide={card}/>)
            }




        </div>
    )
}
export default BestSellers