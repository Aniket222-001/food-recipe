import React from 'react'

const Newslatter = () => {
  return (
    <div className='mx-w-[1520px] m-auto text-white bg-black px-4 rounded-md'>
      <div className='mx-auto grid lg:grid-cols-3'>
         <div className='lg:col-span-2 my-4'>
            <h1>Need advice how to improve flow</h1>
            <p>Sign up to join our newslatter and be up to date</p>
         </div>
         <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input 
                type="email"
                placeholder='email'
                className='p-3 flex rounded-md text-black w-full'  />
                <button className='bg-green-500 rounded-md text-white font-medium w-[200px] ml-4 my-6
                py-4'>
                    Notify me
                </button>          
            </div>
            <p> we are conserned about our customers data securtiy
                 <span className='bg-green-500'>Privact Policy</span>
                </p>
         </div>
      </div>   
    </div>
  )
}

export default Newslatter
