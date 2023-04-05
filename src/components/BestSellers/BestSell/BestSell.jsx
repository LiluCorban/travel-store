
import  "./BestSell.css"
const BestSell =(props) => {
    return (

        <div className="best-sell">
            <h2>{props.slide.name}</h2>
            <p>{props.slide.price}</p>
            <img src={props.slide.photo} alt="photo"/>

        </div>

    )

}

export default BestSell