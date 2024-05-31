import React, { useState } from 'react'
import { mealData } from '../data'
import {NavLink} from 'react-router-dom'

const Meal = () => {
    const [food,setfoods] = useState(mealData)

    const filterCat = (category)=>{
        setfoods(
            mealData.filter((item)=>{
                return item.category == category
            })
        )
    }
  return (
    <div className='mx-w-[1300px] py-2 px-4 m-auto'>
      <h1 className='text-orange-700 font-bold text-2xl text-center py-2'>Our Meals</h1>
      <div className='flex flex-col lg:flex-row justify-center'>
        <div className='flex md:justify-center justify-center'>
           <button onClick={()=>setfoods(mealData)} className='m-1 border-orange-700 border-2 bg-orange-700 text-white hover:bg-white hover:text-orange-700'>ALL Meal</button>
           <button onClick={()=>filterCat('pizza')} className='m-1 border-orange-700 border-2 bg-orange-700 text-white hover:bg-white hover:text-orange-700'>Pizza</button>
           <button onClick={()=>filterCat("chicken")} className='m-1 border-orange-700 border-2 bg-orange-700 text-white hover:bg-white hover:text-orange-700'>Veg</button>
           <button onClick={()=>filterCat("salad")} className='m-1 border-orange-700 border-2 bg-orange-700 text-white hover:bg-white hover:text-orange-700'>Salad</button>
        </div>
      </div>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 py-12'>
        {
            food.map((items)=>{
                return(
                 <div className='borderd-none hover:scale-105 duration-300' key={items.id}>
                    <NavLink to = {`/Pagedata/${items.id}`} >
                    <img src={items.image} alt={items.image}
                    className='w-full h-[200px] rounded-lg object-cover px-2 py-2'/>
                     </NavLink>

                    <div className='flex justify-between py-2 px-4'>
                        <p className='font-bold'>{items.name}</p>
                        <p className='bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white
                        py-4 px-2 border-8 font-bold'>{items.price}</p>
                    </div>
                 </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Meal
