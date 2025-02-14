import React from 'react'
import { topPicks } from '../data';

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Toppicks = () => {
  return (
    <div>
      <h1 className='text-orange-700 font-bold text-2xl text-center py-2'>Top Picks</h1>
      <div className='hidden lg:flex max-w[1400px] m-auto px-2 py-2'> 
        <Splide options={{perPage: 4, gap:"0.5rem", drag:'free'}}>
        {
            topPicks.map(item=>{
                return(
                    <SplideSlide key={item.id}>
                    <div className='rounded-3xl relative'>
                        <div className='absolute w-full h-full bg-black/50 text-white rounded-3xl'>
                          <p className='px-2 font-bold text-2xl'>{item.title}</p>
                          <p className='px-2'>{item.price}</p>
                          <button className='border-dotted text-white mx-2 border-white absolute bottom-4'>
                            Add to Cart
                          </button>
                        </div>
                        <img className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300'
                        src={item.img} alt={item.title} />
                    </div>
                    </SplideSlide>
                )
            })
            
        }
        </Splide>
      </div>
    </div>
  )
}

export default Toppicks
