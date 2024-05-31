import React, { useState } from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Featured = () => {
    const sliders = [
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
          },
    ]
    const [currentIndex,setcurrentIndex] = useState(0);

    const prevmove = ()=>{
        const curr = currentIndex===0;
        const newIndex = curr?sliders.length-1:currentIndex-1;
        setcurrentIndex(newIndex)
    }
    const nextmove = ()=>{
        const curr = currentIndex===sliders.length-1;
        const newIndex = curr?0:currentIndex+1;
        setcurrentIndex(newIndex)
    }

    const dotmove = (index)=>{
        setcurrentIndex(index)
    }
  return (
    <div className='mx-w-[1520px] h-[500px] w-full py-4 px-4 realtive group'>
      <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 '
      style={{backgroundImage:`url(${sliders[currentIndex].url})`}}>
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full
      text-white bg-orange-700 p-2 cursor-pointer'>
       <BsChevronCompactLeft size={25} onClick={prevmove}/>
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full
      text-white bg-orange-700 p-2 cursor-pointer'>
       <BsChevronCompactRight size={25} onClick={nextmove}/>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {
            sliders.map((sliderItem,slideIndex)=>{
                return(<div key={slideIndex} onClick={()=>dotmove(slideIndex)} className='text-2xl cursor-pointer'>
                    <RxDotFilled/>
                </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Featured
