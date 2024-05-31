import React from 'react'
import { useLocation,useParams } from 'react-router-dom'
import {mealData} from '../data'


const Pagedata = () => {
  const { id } = useParams();
  const selectedMeal = mealData.find(meal => meal.id === parseInt(id));
  return (
    <div className='w-[1200px] flex flex-col items-center justify-center'>
      <div className='flex flex-row h-[500px]'>
        <img src={selectedMeal.image} alt="" className='w-[500px]  py-3 rounded-3xl'/>
        
        <div className='flex flex-col'>
         <p className='w-[400px] h-[400px] p-3'>
         <h1 className='text-orange-700 font-bold text-2xl text-center py-2'>{selectedMeal.title} Recipe</h1>
          {selectedMeal.desc}
         <p>
        {
        selectedMeal.ingredients.map((ingredient) => {
         return(
           <li>{ingredient}</li>
         )
        })   
      }
      </p>
      </p>
       
        </div>
      </div>   
      <h1 className='text-orange-700 font-bold text-2xl text-center py-4'>Top Picks</h1>
      <div>
        <iframe src={selectedMeal.video} frameborder="0" width="560" height="315"
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen
        ></iframe>
      </div>
    </div>
  )
}

export default Pagedata


