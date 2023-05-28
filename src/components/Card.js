import React from "react";
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import tobias from '../IMG/tobias.jpeg'
import ian from '../IMG/ian.jpeg'
import '../CSS/card.css'




function Card(){
    return(
   
        <div className="card tortu" >
        <img src={tobias} class="card-img-top " alt="EL TOBI"/>
        <div class="card-body">
          <p>Nieva Tobias</p>
        </div>
        <img src={ian} class="card-img-top" alt="EL IAN"/>
        <div className="card-body">
          <p>Cano Ian</p>
        </div>
      </div>
      


        
    )
}
export default Card;