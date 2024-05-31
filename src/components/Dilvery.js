import React from 'react'

const Dilvery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h3 className='text-orange-700 font-bold text-2xl text-center'>Quick Dilvery App</h3>
      <div className='w-[1200px] mx-auto grid md:grid-cols-2'>
        <img className= 'w-[550px] mx-auto my-4' src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" alt="" />
        <div className='flex flex-col justify-center'>
            <p className='text-green-600 font-bold text-xl'>Get the App</p>
            <h3 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitles convenience on Delivery</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laboriosam ducimus
                obcaecati. Rerum, voluptatum est? Mollitia aut repellendus itaque quo distinctio maxime
                odio consequuntur officiis enim ad rerum in voluptatibus unde blanditiis nobis asperiores
                nostrum, qui ea veritatis. Temporibus provident odio voluptates commodi quod!
            </p>
            <button className='bg-black text-white rounded-sm text-medium w-[200px] my-6 mx-auto'> Get Started</button>
        </div>
      </div>
      
    </div>
  )
}

export default Dilvery
