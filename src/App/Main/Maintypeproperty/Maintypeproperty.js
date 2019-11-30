import React from 'react';

import foto14 from './foto14.jpg'
import foto15 from './foto15.jpg'
import foto16 from './foto16.jpg'
import foto17 from './foto17.jpg'

const Maintypeproperty = () =>{

    return (
        <div className="container-main-typeproperty">

				<div className="properpty-colum">


					<div className="new-property">

						    <div className="new-property-colum">

						    	<div className="property-title-description">
						    		<a className="property-title-link" href="/">Новостройки</a>
						    	</div>


						    	<div className="property-link">
						    		<a className="property-link-description" href="/">Сданые ЖК</a>
						    	</div>

						    	<div className="property-link">
						    		<a className="property-link-description" href="/">Строящиеся ЖК</a>
						    	</div>

						    	<div className="property-link">
						    		<a className="property-link-description" href="/">Новостройки Киева</a>
						    	</div>

						    	<div className="button-container-main-typeproperty">
						    		<button className="button-typeproperty">Акции и скидки</button>
						   		</div>

							</div>

						    	<div >
								<img className="property-img-new" src={foto14} alt="foto14"/>
						        </div>
					</div>



					<div className="second-property">

						<div className="second-property-colum">

								<div className="property-title-description" >
									<a className="property-title-link" href="/">Вторичное жилье</a>
								</div>

								<div className="property-link">
									<a className="property-link-description" href="/">Однокомнатные</a>
								</div>

								<div className="property-link">
									<a className="property-link-description" href="/">Двухкомнатные</a>
								</div>

								<div className="property-link">
									<a className="property-link-description" href="/">Трехкомнатные</a>
								</div>

								<div className="property-link">
									<a className="property-link-description" href="/">Квартиры в Киеве</a>
								</div>

								
								<div className="button-container-main-typeproperty">
									<button className="button-typeproperty">Купить</button>
									<button className="button-typeproperty">Продать</button>
								</div>

						</div>
						
						 <div >
					    	<img className="property-img-second" src={foto16} alt="foto16"/>
					    </div>

					</div>



					<div className="commercial-property">

						<div className="property-commercial-colum">

								<div >
							    	<img className="property-img-commercial" src={foto17} alt="foto17"/>
							    </div>

								<div className="commercial-colum-property-link">

										<div className="property-title-description">
											<a className="property-title-link" href="/">Коммерческая</a>
										</div>

										<div className="property-link">
											<a className="property-link-description" href="/">Купить офис</a>
										</div>

										<div className="property-link">
											<a className="property-link-description" href="/">Продать офис</a>
										</div>

										<div className="property-link">
											<a className="property-link-description" href="/">Аренда офисов</a>
										</div>

										<div className="property-link">
											<a className="property-link-description" href="/">Помещение в ЖК</a>
										</div>

										<div className="button-container-main-typeproperty">
											<button className="button-typeproperty">Аренда</button>
											<button className="button-typeproperty">Продать</button>
										</div>
							    </div>
						
						</div>
					</div>


					<div className="suburban-property">

						<div>
							<img className="property-img-suburban" src={foto15} alt="foto15"/>
						</div>


						<div className="suburban-property-colum">

								<div className="property-title-description">
									<a className="property-title-link" href="/">Загородная недвижимость</a>
								</div>

								<div className="property-link">
									<a className="property-link-description" href="/">Дома</a>
								</div>

								<div className="property-link">
									<a className="property-link-description" href="/">Участки</a>
								</div>

								<div className="property-link">
									<a className="property-link-description" href="/">Таунхаусы</a>
								</div>

								<div className="property-link">
									<a className="property-link-description" href="/">Сопровождение</a>
								</div>

								<div className="button-container-main-typeproperty">
										<button className="button-typeproperty">Купить</button>
										<button className="button-typeproperty">Продать</button>
								</div>
						</div>
						
						
					</div>
			</div> 

			<div className="colum-right">
				<div>Колонка справа</div>
			</div>
		</div>
    )
}






export default Maintypeproperty;