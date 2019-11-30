import React from 'react';

import Bestoffersitem from "./Bestoffersitem"
import bestoffersData from "./bestoffersData"
import "./BestOfferItem.css"


const Bestoffers = () =>{
     
    return(
        
			<div class="best-offers-main">
                {
                    bestoffersData.map(({
                        id,
                        name,
                        price,
                        adress,
                        metro,
                        time,
                        image,
                        
                    }) =>(
                        <div className="best-offers" key={id}>
                                <Bestoffersitem
                                        name={name}
                                        price={price}
                                        adress={adress}
                                        metro={metro}
                                        time={time}
                                        image={image} 
                                    />
                        </div>
                    ))
                    }
            
            </div> 
            
                   
    )
}





export default Bestoffers;