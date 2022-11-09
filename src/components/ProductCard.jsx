import React from 'react'
import '../Source/styles/ProductCard.css'
import image10 from '../Source/img/image10.png'
import { url } from '../Constants/MainPageConst'
import { element } from 'prop-types'
export default function ProductCard(props) {

	return (
		<div className='ProductCard'>
			<div className="ProductCard__Product">
				<img className='ProductCard__Product__Picture' src={url + 'source/' + props.img} />


				<div className="ProductCard__Product__Properties">
					<div className="ProductCard__Product__Properties__Name">
						{props.name}



					</div>
					<div className="ProductCard__Product__Properties__Desk">
						{props.desc}


					</div>

				</div>




			</div>
			<footer className="ProductCard__Footer">
				<div className="ProductCard__Footer__Price">
					{props.price}₽

				</div>
				<button className="ProductCard__Footer__Button">
					В корзину

				</button>
			</footer>
		</div>
	)
}
