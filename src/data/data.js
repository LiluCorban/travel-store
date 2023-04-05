import photo1 from "../assets/img/bestsellers/place1.png";
import photo2 from "../assets/img/bestsellers/place2.png";
import photo3 from "../assets/img/bestsellers/place3.png";
import place1 from "../assets/img/offers/place1.png";
import place2 from "../assets/img/offers/place2.png";
import place3 from "../assets/img/offers/place3.png"

let state ={
   bestsellers:{
       cards:[
           {name:"Cuba City",
            price:"from 2000$",
            photo:photo1
           },
           {name:"Paris",
            price:"from 1000$",
           photo:photo2
           },
           {name:"Japan",
           price:"from 3000$",
           photo:photo3
           }
       ]
   },
   offers:{
       cards:[
           {   id:1,
               name: "Moon,Sea of Silence",
               photo: place1,
               price: "20000$",
               description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, ipsum veritatis. " +
                   "Accusantium beatae dignissimos dolore doloremque dolores eos fugiat laborum necessitatibus," +
                   " porro praesentium provident quaerat rem sit unde, ut voluptas!"
           },
           {   id:2,
               name: "Santorini, Oia Greece",
               photo: place2,
               price: "2000$",
               description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, ipsum veritatis. " +
                   "Accusantium beatae dignissimos dolore doloremque dolores eos fugiat laborum necessitatibus," +
                   " porro praesentium provident quaerat rem sit unde, ut voluptas!"
           },
           {   id:3,
               name: "Japan, Tokio",
               photo: place3,
               price: "3000$",
               description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, ipsum veritatis. " +
                   "Accusantium beatae dignissimos dolore doloremque dolores eos fugiat laborum necessitatibus," +
                   " porro praesentium provident quaerat rem sit unde, ut voluptas!"
           }



       ]
   }
}



export default state;