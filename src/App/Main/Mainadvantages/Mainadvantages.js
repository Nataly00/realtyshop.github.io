import React from 'react';
import adv from './adv.png'

const Mainadvantages =() =>{

    return (

        <div className="container-main-advantages">

			<div className="advantages-main">

				<div>
					<img className="foto-adventages" src={adv} alt="adv"/>
				</div>

				<div className="advantages-description">
					<div className="advantages">Преимущество 1</div>
					<div className="advantages">Преимущество 2</div>
					<div className="advantages">Преимущество 3</div>
				</div>
			</div>

		</div>
    )


}



export default Mainadvantages;