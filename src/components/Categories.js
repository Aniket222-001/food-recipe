import React from 'react'
import { categories } from '../data'

const Categories = () => {
    return (
        <div className='mx-w-[1540px] py-2 px-4 m-auto'>
          <h1 className='text-orange-700 font-bold text-2xl text-center py-2'>Our Meals</h1>
          
          <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 py-5 px-2 gap-5'>
            {
                categories.map((items)=>{
                    return(
                     <div className='flex items-center justify-center  hover:scale-105 duration-300 p-4' key={items.id}>
                        <img src={items.image} alt={items.image} 
                        className='object-cover w-40 h-12 rounded-xl  px-2 py-2 shadow-xl'/>
                     </div>
                    )
                })
            }
          </div>
        </div>
      )
       
        }
   


export default Categories
