import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineSearch,AiOutlineClose,AiFillTag} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {TbTruckReturn} from 'react-icons/tb'
import {FaUserFriends,FaGoogleWallet} from 'react-icons/fa'
import {MdHelp,MdOutlineFavorite} from 'react-icons/md'
import { NavLink } from 'react-router-dom'


const TopNav = () => {
  const [sideNav,setsideNav] = useState(false)
  return (
    <div className='mx-w-[1520] mx-auto flex justify-between items-center p-4'>
      <div className='flex items-center'>
        <div className='cursor-pointer'>
            <AiOutlineMenu size={25} onClick={()=>setsideNav(!sideNav)}/>
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Eats
            <span className='font-bold'>Yum</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
            <p className='bg-orange-700 text-white rounded-full p-2 text-bold'> Free</p>
            <p className='p-2 text-bold'>Delivery</p>
        </div>     
      </div>
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25}/>
        <input className='bg-transparent p-2 w-full focus:outline-none' type="text" 
        placeholder='Search meals'/>
      </div>
      {
        sideNav?(
          <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'
          onClick={()=>setsideNav(!sideNav)}> </div>
        ):(' ')
      }
      <div className={sideNav?'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':
                      'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>

      <AiOutlineClose size={25} onClick={()=>setsideNav(!sideNav)} 
      className='absolute top-4 right-4 cursor-pointer'/>
      <h2 className='text-2xl p-4'>Eats
            <span className='text-orange-700 font-bold'>Yum</span>
      </h2>
      <nav>
        <ul className='flex flex-col p-4 text-gray-400'>
          <li className='text-xl py-4 flex'>
              <BsPerson className='mr-4 text-white bg-black rounded-full'/>
              MY Account
          </li>
          <li className='text-xl py-4 flex'>
              <NavLink  to='/dilv' className='text-xl py-4 flex'><TbTruckReturn className='mr-4 text-white bg-black rounded-full'/>
              Delivery
              </NavLink>
          </li>
          <li className='text-xl py-4 flex'>
              <NavLink to='/myfav' className='text-xl py-4 flex'><FaUserFriends className='mr-4 text-white bg-black rounded-full'/>
              My Favourite
              </NavLink>
          </li>
          <li className='text-xl py-4 flex'>
              <NavLink to='/wallet' className='text-xl py-4 flex'><FaGoogleWallet className='mr-4 text-white bg-black rounded-full'/>
              Wallet
              </NavLink>
          </li>
          <li className='text-xl  flex'>
              <NavLink to='/help' className='text-xl py-4 flex'><MdHelp className='mr-4 text-white bg-black rounded-full'/>
              help
              </NavLink>
          </li>
          
        </ul>
      </nav>
      </div>
      
    </div>
  )
}

export default TopNav
