import React from 'react'

function Newsletter() {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Wants tips & tricks to optimize your flow?</h1>
            <p>Sign up to our newsletter to stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type='text' placeholder='Enter email' className='bg-transparent w-full border-b-2 border-white text-white focus:outline-none focus:border-[#00df9a]' />
                    <button className='bg-[#00df9a] text-[#000300] w-[200px] font-medium ml-4 my-6 rounded-md px-6 py-3'>Notify Me</button>
                </div>
                <p>
                    We care about the protection of your data. Read our <span className='text-[#00df9a] cursor-pointer'>Privacy Policy.</span>
                </p>
            </div>

        </div>
      
    </div>
  )
}

export default Newsletter
