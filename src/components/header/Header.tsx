import React from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import {GiShoppingCart} from 'react-icons/gi'
import logo from '../../images/belle.webp'

const Header = () => {
	return (
		<div className="fixed w-screen p-[10px] flex justify-between">

		<div className="flex p-[10px] space-x-4 text-[20px]">
			<AiOutlineMenu  />
			<AiOutlineSearch />
		</div>

		<div>
			<img src={logo}/>
		</div>
			
		<div className="flex p-[10px] space-x-4 text-[20px]">
			< AiOutlineUser />
			< GiShoppingCart />
		</div>
		</div>
	)
}

export default Header