import React, { useState, useEffect } from 'react'
import { CarouselData } from "./CarouselData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

const Carousel = () => {
	const [ currentSlide, setCurrentSlide ] = useState<number>(0)
	const [ puased, setPaused] = useState<boolean>(false)

	const nextSlide = () => {
		let newSlide = 

		currentSlide === CarouselData.length - 1
		? 0

		: currentSlide + 1;

		setCurrentSlide(newSlide)
	}

	const prevSlide = () => {
		let newSlide = 
		 currentSlide === 0
		 ? CarouselData.length - 1
		 : currentSlide - 1;

		 setCurrentSlide(newSlide)
	}

	useEffect(() => {
       setInterval(() => {
       	if (puased === false){
       		let newSlide = currentSlide === CarouselData.length - 1 ? 0 : currentSlide + 1
       		setCurrentSlide(newSlide)
       	}
       },10000)
	},)

	return (

		<div className="w-100vw h-[900px]">
			<div className="min-w-full max-h-full ">
				{CarouselData.map((slide, index) => {
					return (
						<>
						<img 

						src={slide.image}
						alt=""
						key={index}
						className ={
							index === currentSlide
							? "block w-full h-[950px] object-cover"
							:"hidden"
						}
						/>
						<div className="flex justify-center">
							<h1 className={index === currentSlide ? "absolute bottom-[200px] font-semibold flex justify-center md:text-[60px] truncate text-white font-roboto" : "hidden"}>{slide.title}</h1>
							<p className={index === currentSlide ? "absolute bottom-[170px] text-[#f9f9f9] md:text-[16px]  uppercase font-roboto" : "hidden"} >{slide.sub}</p>
							<button className="absolute bottom-[110px] bg-black text-white p-[10px] w-[145px] font-roboto uppercase">shop now</button>
						</div>
						
						</>
						)
				})}
				
				<AiOutlineLeft onClick ={()=> prevSlide()} className='absolute left-0 text-[25px] inset-y-1/2 text-black cursor-pointer rounded-lg bg-white bg-opacity-75 ml-[15px] w-[40px] h-[40px] p-[5px]' />
				<AiOutlineRight onClick ={()=> nextSlide()} className='absolute right-0 text-[30px] inset-y-1/2 text-black cursor-pointer rounded-lg bg-white bg-opacity-75 mr-[15px] w-[40px] h-[40px] p-[5px]' />
			</div>
		</div>
	)
}

export default Carousel