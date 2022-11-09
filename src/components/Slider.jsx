import React from 'react'
import '../Source/styles/Slider.css'
import image5 from '../Source/img/image5.png'


export default function Slider() {
	return (
		<div className='SliderContainer'>


			<div className="SliderContainer__Slider">
				<div className='SliderContainer__Slider__SlideL'>
					<img src={image5} alt="" />




				</div>
				<div className='SliderContainer__Slider__MainSlide'>
					<img src={image5} alt="" />

				</div>
				<div className='SliderContainer__Slider__Slide'>
					<img src={image5} alt="" />

				</div>
			</div>

		</div>

	)
}
