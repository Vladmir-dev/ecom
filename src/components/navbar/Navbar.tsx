import React, { useState } from 'react'
import logo from '../../images/belle.webp';
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import { AiOutlineUser, AiOutlineSearch,AiOutlineClose ,AiOutlineMenu } from 'react-icons/ai'
import {BsBag} from 'react-icons/bs'


const Navbar = () => {
	const [open, setOpen ] = useState<boolean>(false)

	return (
		<nav className="fixed z-20">
			<div className="flex w-screen items-center font-medium justify-around ">
			 {/*Mobile Nav*/}
				<ul className={`
					md:hidden bg-white w-[1000px] h-full bottom-0 left-0 py-24 pl-4 align-top duration-500
					${!open ? "hidden" : "left-[-100%]"}`}>
					<NavLinks />
				</ul>

				<div className="md:hidden flex items-center gap-3 pt-[15px]">
				<div className="text-[20px]" onClick={() => setOpen(!open)}>
				{ open ?
					 <AiOutlineClose />
					: <AiOutlineMenu />
				}
				</div>
						
						<AiOutlineSearch className="text-[20px]"/>
				</div>

				<div className="md:w-auto items-center pt-[15px]">
					<img src={logo} alt="logo" className="md:cursor-pointer "/>
				</div>
				<ul className="md:flex hidden items-center gap-8 font-[Poppins,Arial,Tahoma,Verdana,sans-serif]">
					<NavLinks />
				</ul>
				<div className="md:flex flex items-center pt-[15px] gap-3 md:gap-3 md:text-[20px] text-[17px] font-medium">
					<AiOutlineSearch className="invisible md:visible"/>
					< AiOutlineUser className="md:hidden"/>
					<BsBag />
				</div>

               
			</div>
		</nav>
	)
}

export default Navbar