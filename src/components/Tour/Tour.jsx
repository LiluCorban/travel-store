import "./Tour.css"
import {useEffect, useState} from "react";
import axios from "axios";
import tour from "../../assets/img/banner1.png"


const Tour =()=>{
    let [hotels, setHotels]= useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setHotels(response.data)
            })

    },[])

    return(

        <div className="tours">
            <h2>CHOOSE YOUR TOUR</h2>
          <div className="card-hotel">{
              hotels.map( (hotel) => {
                  return (
                      <div className="card">
                          <img src={tour} alt="tour"/>
                         <h3>{hotel.title}</h3>
                          <p>{hotel.description}</p>

                          <button><a href="#">Choose</a></button>

                      </div>
                  )
              })
          }


          </div>


        </div>
    )
}
export default Tour;