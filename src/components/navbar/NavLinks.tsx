import React, { useState } from 'react'
import { links } from './MyLinks'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const NavLinks = () => {
	const [heading, setHeading] = useState<string>("")
	const [subHeading, setSubHeading] = useState<string>("")
	return (
		<>
		 {links.map(link => (
           <div>
           <div className="px-3 text-left md:cursor-pointer group">
           	<h1 className="py-7 flex justify-between items-center" onClick={() => heading !== link.name ? setHeading(link.name) : setHeading("")}>
           	 	{link.name}
           	 	<span className="text-xl md:hidden">
           	 	{ heading !== link.name ?
           	 		< AiOutlinePlus />
           	 		: < AiOutlineMinus />
           	 	}
           	 	</span>
           	 </h1>
           	 {link.submenu && 
           	 	<div className="absolute top-20 hidden group-hover:md:block hover:md:block duration-500">
           	 	<div className="bg-white p-3.5 flex gap-16 w-auto px-14 items-center justify-center">
           	 		{link.sublinks.map(mysublinks => (
           	 		           	 			<div>
           	 		           	 				<h1 className="text-[17px] font-semibold">
           	 		           	 				{mysublinks.head}
           	 		           	 				</h1>
           	 		           	 				{mysublinks.sublink.map((slink) => (
           	 		           	 					<li 
           	 		           	 					className="text-sm  my-2.5">
           	 		           	 						<a href={slink.link} className="hover:text-blue-500">
           	 		           	 						{slink.name}
           	 		           	 						</a>
           	 		           	 					</li>
           	 		           	 					))}
           	 		           	 			</div>
           	 		           	 			))}
           	 	</div>
           	 </div>}
           </div>

           	 {/*Mobile Menu*/}
           	 <div className={`
           	 	${heading === link.name ? 'md:hidden' : 'hidden'}
           	 	`}>
           	 {/*sub links*/}
           	 	{link.sublinks?.map((mysublinks) => (
           	 		<div>
           	 			<div>
           	 				<h1 
           	 				onClick={() => {subHeading !== mysublinks.head ? setSubHeading(mysublinks.head) : setSubHeading("")}} 
           	 				className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex items-center justify-between">
           	 				{mysublinks.head}
           	 				<span className="text-xl">
           	 					{subHeading !== mysublinks.head ? < AiOutlinePlus/> : <AiOutlineMinus />}
           	 				</span>
           	 				</h1>
           	 				<div className={`${subHeading === mysublinks.head ? "md:hidden" : "hidden"}`}>
           	 					{mysublinks.sublink.map(slink => (
           	 						<li className="py-3 pl-14">
           	 							<a href={slink.link} className="hover:text-blue-500">{slink.name}</a>
           	 						</li>
           	 						))}
           	 				</div>
           	 			</div>
           	 		</div>
           	 		))}
           	 </div>
           </div>
		 	))}	
		</>
	)
}

export default NavLinks