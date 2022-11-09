import React, { useDebugValue, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Slider from '../components/Slider'
import '../Source/styles/Home.css'
import axios from 'axios'
import { url } from '../Constants/MainPageConst'
import image10 from '../Source/img/image10.png'
import Novelties from '../components/Novelties'
import image14 from '../Source/img/image14.png'
import Stocks from '../components/Stocks'
import Location from '../components/Location'





export default function Home() {
	const [allProduct, setProducts] = useState([
		/*
		{ name: 'Питса', description: 'бубубубубу', price: '500', productTypeId: 1, isNew: 1 },
		{ name: 'Питса', description: 'бубубубубубу', price: '500', productTypeId: 1, isNew: 1 },
		{ name: 'Питса', description: 'бубубубубубу', price: '500', productTypeId: 1, isNew: 1 },
		{ name: 'Питса', description: 'бубубубубубу', price: '500', productTypeId: 1, isNew: 1 },
		{ name: 'Питса', description: 'бубубубубубу', price: '500', productTypeId: 1, isNew: 0 },
		{ name: 'Питса', description: 'бубубубубубу', price: '500', productTypeId: 1, isNew: 0 },
		{ name: 'Питса', description: 'бубубубубубу', price: '500', productTypeId: 2, isNew: 0 },
		{ name: 'Питса', description: 'бубубубубубу', price: '500', productTypeId: 2, isNew: 0 },
		{ name: 'Питса', description: 'бубубубубубу', price: '500', productTypeId: 2, isNew: 0 },
		{ name: 'Питса', description: 'бубубубубубу', price: '500', productTypeId: 2, isNew: 0 },
		{ name: 'Питса', description: 'бубубубубубу', price: '500', productTypeId: 2, isNew: 0 },
		{ name: 'Питса', description: 'бубубубубубу', price: '500', productTypeId: 2, isNew: 0 }
		*/


	]);
	const [types, setType] = useState([
		/*
		{ id: 1, name: 'Пицца' },
		{ id: 2, name: 'Роллы' }
		*/

	])

	const [novelties, setNovelties] = useState([
		/*
		{ name: 'Питса', description: 'бубубубубу', price: '500', productTypeId: 1, isNew: 1 },
		{ name: 'Питса', description: 'бубубубубу', price: '500', productTypeId: 1, isNew: 1 },
		{ name: 'Питса', description: 'бубубубубу', price: '500', productTypeId: 1, isNew: 1 },
		{ name: 'Питса', description: 'бубубубубу', price: '500', productTypeId: 1, isNew: 1 },
		*/
	])

	const [stocks, setStocks] = useState([])




	useEffect(() => {



		axios.get(url + "api/products/info").then(x => {


			setType(x.data["types"])
			setProducts(x.data["products"])

			setNovelties(x.data["novelties"])
			setStocks(x.data["stocks"])





		}

		)







	}, []);

	<div div className='Home__ProductContainer' >
		{


		}
	</div >

	return (
		<div className='Home'>

			<Slider />
			<span className='NoveltiesHeader'>Новое и популярное</span>
			<div className='Cactus'>
				<img src={image14} alt="" />
			</div>


			<div className='NoveltiesContainer'>



				{
					novelties.reverse().map(value => <Novelties name={value.name} price={value.price} img={value.image} />)
				}
			</div>


			{types.map(item => (

				<div>

					<span className='ProductsType'>{item.name}</span>
					<div className='Home__ProductContainer'>
						{
							allProduct.map(element => element.productTypeId == item.id ? <ProductCard name={element.name} desc={element.description} price={element.price} type={element.productTypeId} img={element.image} /> : null)
						}
					</div>
				</div>
			))}


			<Stocks stocks={stocks} />
			<Location />


		</div>

	)
}
