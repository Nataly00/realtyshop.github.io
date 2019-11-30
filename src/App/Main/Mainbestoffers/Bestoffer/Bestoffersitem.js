import React from 'react';
import PropTypes from 'prop-types';
import "./BestOfferItem.css";

const Bestoffersitem = ({	   
			name,
            price,
            adress,
            metro,
            time,
			image,
		}) => {
		   return(
			<div className="best-offers">
			<a className="link-best-offers" href="/" >
				<div>
					<div className="img-best-offers">
						<img className="img-best-offers-main" src={image} alt={image}/>
						<div className="like-best-offers"></div>
					</div>

					<div className="best-offers-description">
						<div className="best-offers-title">{name}</div>
						<div className="best-offers-price">Цена от {price} $</div>
						<div className="best-offers-adress">{adress}</div>

						<div className="best-offers-metro">
							<div className="line-metro-red"></div>
							<div>м.{metro}</div>
							<div className="icon-man-and-car"><div className="icon-man"></div>{time} м.</div>
					   </div>
					</div>
				</div>
			</a>
		</div>
		   )
	}

	Bestoffersitem.propTypes = {
		    name:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            adress:PropTypes.string.isRequired,
            metro:PropTypes.string.isRequired,
            time:PropTypes.number.isRequired,
            image:PropTypes.string,
	}




export default Bestoffersitem;