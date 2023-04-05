
import "./Select.css"
import {useState} from "react";

const Select= (props) =>{

    const [isProductBasket,setIsProductBasket] =useState(false);
    const addProductToBasket = ()=> {
        alert("Add to cart?");
        setIsProductBasket(true)
    }

    return (
        <div className="select-card">
            <img src={props.select[0].photo} alt="place"/>
            <div className="offer-description">
                <div className="price-block">
                    <h3>{props.select[0].name}</h3>
                    <p>{props.select[0].price}/per 1 person</p>
                    <p>{props.select[0].description}</p>
                    <p>How many tourists?</p>
                    <select name="person" className="box" >

                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">1+1 child</option>
                        <option value="1">1+2 child</option>
                        <option value="1">2+1 child</option>
                    </select>
                </div>
                { isProductBasket ?
                    <button><a onClick={addProductToBasket}>Already in the cart</a></button>
                    : <button><a onClick={addProductToBasket}>Add to the cart</a></button>


                }

            </div>

        </div>

    )
}
export default Select