import {useEffect, useState} from "react";
import axios from "axios";
import "./News.css";
import eclipse1 from "../../assets/img/Ellipse1.png"
import eclipse2 from "../../assets/img/Ellipse2.png"


const News = () => {
    let [news, setNews] = useState([]);
    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines/sources?category=entertainment&apiKey=82dc59a11c8d4de9abf8b5c93f93cedd')
            .then(response => {
                setNews(response.data.sources)
            })

    },[])

    return(

        <div className="news-block">
            <h2>TRAVEL NEWS</h2>
            <img className="right" src={eclipse1} alt="img"/>
            <img className="left" src={eclipse2} alt="img"/>
            <div className="card-news">
                {
                news.map( (card) => {
                    return (
                        <div className="card">
                            <h3>{card.name}</h3>
                            <p>{card.description}</p>
                            <a href={card.url}>{card.url}</a>

                        </div>
                    )
                })
            }
           </div>

        </div>
    )

}
export default News



