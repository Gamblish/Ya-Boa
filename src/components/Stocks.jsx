import React from 'react'
import '../Source/styles/Stocks.css'
import StockBox from './StockBox'
import { url } from '../Constants/MainPageConst'
import image26 from '../Source/img/image26.png'


export default function (props) {
	return (
		<div>
			<span className='StocksHeader'>Наши <span className='StocksHeaderLastChild'>акции</span></span>
			<div className='StocksContainer'>
				<div className='StocksContainer__MainStock'>
					<img src={url + 'source/' + (props.stocks.length > 0 ? props.stocks[0].image : null)} alt="" />
				</div>
				<div className='StocksContainer__OtherStocksContainer'>
					{props.stocks.map((element, index) => index >= 1 ? <StockBox img={element.image} id={element.id} /> : null)}




				</div>
			</div>
			<button className='StocksButton'>Все акции</button>

		</div>
	)
}
