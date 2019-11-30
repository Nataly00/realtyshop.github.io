import React from 'react';

import Bestoffers from "./Bestoffer/Bestoffers"

const Mainbestoffers = () =>{

    return(

        <div className="container-main-bestoffers">
            <div className="title-main-bestoffers">Лучшие предложения</div>
                <div className="best-offers-main">
                    <Bestoffers/>                   
                 </div>

                 <div className="best-offers-link-all-offers">
                     <a className="link-all-offers" href="/">Смотреть все предложения</a>
                </div>	

        </div>
      

    )
}



export default Mainbestoffers;