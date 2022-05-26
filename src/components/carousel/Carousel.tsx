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

	// useEffect(() => {
 //       setInterval(() => {
 //       	if (puased === false){
 //       		let newSlide = currentSlide === CarouselData.length - 1 ? 0 : currentSlide + 1
 //       		setCurrentSlide(newSlide)
 //       	}
 //       },10000)
	// },)

	return (

		<div className="w-full absolute">
			<div className="w-full justify-center duration-500">

				{CarouselData.map((slide, index) => {
					return (
						<>
						<img 

						src={slide.image}
						alt=""
						key={index}
						className ={
							index === currentSlide
							? "block min-w-full md:h-[950px] h-[850px] object-cover items-start"
							:"hidden"
						}
						onMouseEnter={() => setPaused(true)}
						onMouseLeave={() => setPaused(false)}
						/>
						<div className="flex justify-center flex flex-wrap ">
							<div 
							className={index === currentSlide ? "absolute bottom-[200px] font-semibold flex justify-center md:text-[60px] text-[30px] uppercase truncate text-white font-roboto break-all truncate" : "hidden"}>
							{slide.title}
							</div>
							<p 
							className={index === currentSlide ? "absolute bottom-[170px] text-[#f9f9f9] text-[14px]  md:text-[17px] text-[12px] uppercase font-roboto" : "hidden"} >
							{slide.sub}
							</p>
							<button
							 className="absolute bottom-[110px] bg-black text-white p-[10px] w-[110px] text-[15px] font-roboto uppercase">
							 shop now
							 </button>
						</div>
						
						</>
						)
				})}
				<div className="">
					<AiOutlineLeft onClick ={()=> prevSlide()} 
				className='absolute left-0 text-[20px] inset-y-1/2 text-black cursor-pointer rounded-lg font-light bg-white bg-opacity-50 ml-[15px] w-[35px] h-[35px] p-[5px]' />
				<AiOutlineRight onClick ={()=> nextSlide()} 
				className='absolute right-0 text-[20px] inset-y-1/2 text-black cursor-pointer rounded-lg font-light bg-white bg-opacity-50 mr-[15px] w-[35px] h-[35px] p-[5px]' />
				</div>

			</div>
		</div>
	)
}

export default Carousel