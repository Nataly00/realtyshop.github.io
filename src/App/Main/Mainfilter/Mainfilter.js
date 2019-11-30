import React from 'react';
import './Mainfilter.css'

const Mainfilter = () =>{

    return (
           
        <div className="main-filter">
			<div className="container-main-filter">

				<div className="title-main-filter">Real Estate Agency</div>

				<div className="main-filter-types"> 


					<div className="filter-types">

						<div className="filter-types-name">Тип недвижимости
							<div className="icon-arrow"></div>
						</div>

						<div className="filter-types-navmenu">
							<ul className="filter-navmenu">
								<li className="dropdown-menu-filter">
									<div className="filter-navmenu-input">
								        <input type="checkbox"/>
								        <span className="filter-navmenu-span">Вторичная</span>
							         </div>
							         
								</li>
								<li>
									<div className="filter-navmenu-input">
								        <input type="checkbox"/>
								        <span className="filter-navmenu-span">Новостройки</span>
							         </div>
							         
								</li>
								<li>
									<div className="filter-navmenu-input">
								        <input type="checkbox"/>
								         <span className="filter-navmenu-span">Кoммерческая</span>
							         </div>
							        
								</li>
								<li>
									<div className="filter-navmenu-input">
								        <input type="checkbox"/>
								         <span className="filter-navmenu-span">Загородная</span>
							         </div>
							        
								</li>
							</ul>
						</div>

					</div>




					<div className="filter-types-offers">
						<div className="filter-types-name">Тип сделки
							<div className="icon-arrow"></div>
						</div>

						<div className="filter-types-navmenu-offers">
							<ul>
								<li>
									<div className="filter-navmenu-input">
								        <input type="checkbox"/>
								         <span className="filter-navmenu-span">Купить</span>
							         </div>
								</li>
								<li>
									<div className="filter-navmenu-input">
								        <input type="checkbox"/>
								         <span className="filter-navmenu-span">Продать</span>
							         </div>
								</li>
								<li>
									<div className="filter-navmenu-input">
								        <input type="checkbox"/>
								         <span className="filter-navmenu-span">Аренда</span>
							         </div>
								</li>
							</ul>
						</div>



					</div>

					<div className="filter-types">
						<div className="filter-types-name">Количество комнат 
							<div className="icon-arrow"></div>
						</div>
						<div className="filter-types-navmenu-rooms">
							<ul>
								<li>
									<div className="filter-navmenu-input">
								        <input type="checkbox"/>
								         <span className="filter-navmenu-span">1</span>
							         </div>
								</li>
								<li>
									<div className="filter-navmenu-input">
								        <input type="checkbox"/>
								         <span className="filter-navmenu-span">2</span>
							         </div>
								</li>
								<li>
									<div className="filter-navmenu-input">
								        <input type="checkbox"/>
								         <span className="filter-navmenu-span">3</span>
							         </div>
								</li>
								<li>
									<div className="filter-navmenu-input">
								        <input type="checkbox"/>
								         <span className="filter-navmenu-span">4+</span>
							         </div>
								</li>

							</ul>
							
						</div>

					</div>


					<div className="filter-types">
						<div className="filter-types-name">Цена 
							<div className="icon-arrow"></div>
						</div>
					</div>

					<div className="filter-types"> 
						<div className="filter-types-name">Киев
							<div className="icon-arrow" ></div>
						</div>
					</div>
					
					<div className="filter-button-search">
						<button className="filter-types-button">Найти</button>
					</div>
					
					<div className="map-main-filter">
						 <div className="whatch-on-map">
						 	<a className="link-whatch-on-map" href="/">
							Посмотреть на картe</a>
						</div>
						<div className="map-marker"></div>
					</div>	
    
				</div>	

			</div>
		</div>



    )
}

export default Mainfilter;