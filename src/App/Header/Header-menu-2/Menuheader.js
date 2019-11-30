import React from 'react';


const Menuheader = () =>{
    return (

		<div className="menu-header">
			<ul className="menu">
							<li className="menu-link">
								<a className="link-menu-header" href="/">О компании 
									<div className="arrow" ></div>
								</a>
								<ul className="nav-menu-header">
									<li className="nav-menu-header-options">
										<a className="nav-menu-header-options-link" href="/">Выбрать квартиру </a>
									</li>
									<li className="nav-menu-header-options">
										<a className="nav-menu-header-options-link"  href="/">Купить квартиру</a>
									</li>
									<li className="nav-menu-header-options">
										<a className="nav-menu-header-options-link"  href="/">Продать квартиру</a>
									</li>
									<li className="nav-menu-header-options">
										<a className="nav-menu-header-options-link"  href="/">Сопровождение сделки</a>
									</li>

								</ul>
							</li>
							<li className="menu-link">
								<a className="link-menu-header" href="/">Вторичная
									<div className="arrow" ></div>
								</a>
							</li>
							<li className="menu-link">
								<a className="link-menu-header" href="/">Новостойки
									<div className="arrow" ></div>
								</a>
							</li>
							<li className="menu-link">
								<a className="link-menu-header" href="/">Коммерческая
									<div className="arrow" ></div>
								</a>
							</li>
							<li className="menu-link">
								<a className="link-menu-header" href="/">Загородная
									<div className="arrow" ></div>
								</a>
							</li>
							<li className="menu-link">
								<a className="link-menu-header" href="/">Контакты
									<div className="arrow" ></div>
								</a>
							</li>
						</ul>
 				 </div>
    )
}


export default Menuheader;