import React from 'react'
import '../Source/styles/StockBox.css'
import { url } from '../Constants/MainPageConst'
import image26 from '../Source/img/image26.png'

export default function StockBox
	(props) {
	return (
		<div className='StockBox'>
			<img src={url + 'source/' + props.img} alt="" />



		</div>
	)
}
