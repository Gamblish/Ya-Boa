import React from 'react'
import '../Source/styles/Location.css'
import products from '../Source/img/products.png'

export default function Location() {
	return (
		<div className='LocationContainer'>
			<div className='LocationContainer__Header'>Оплата и Доставка</div>
			<div className="LocationContainer__InfoContainer">
				<div className='LocationContainer__InfoContainer__Products'>
					<div className="LocationContainer__InfoContainer__Products__Picture">
						<img src={products}></img>


					</div>
					<div className="LocationContainer__InfoContainer__Products__Info">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					</div>


				</div>
				<div>

				</div>
				<div>

				</div>
				<div>

				</div>
			</div>






		</div>
	)
}
