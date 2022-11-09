import React from 'react'
import image10 from '../Source/img/image10.png'
import '../Source/styles/Novelties.css'
import { url } from '../Constants/MainPageConst'




export default function Novelties(props) {
	return (

		<div className='NoveltiesBox'>
			<div className='NoveltiesBox__Shadow' >

			</div>
			<div className='NoveltiesBox__ImgBox'>
				<img className='NoveltiesBox__Imgbox__Img' src={url + 'Source/' + props.img} alt="" />



			</div>
			<div className='NoveltiesBox__Properties'>
				<div className='NoveltiesBox__Properties__ProductTitle'>{props.name}</div>
				<div className='NoveltiesBox__Properties__Price'>от {props.price} ₽</div>
			</div>
		</div>


	)
}
