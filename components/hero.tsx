import React from 'react'

export default function Hero() {
  return (
    <div className='my-40  flex flex-col items-center'>
        <h1 className=' font-bold text-7xl tracking-tight max-w-2xl text-center leading-tight text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500 '>Unleash the power of intuitive finance</h1> 
        <p className='text-neutral-300 mx-auto mt-10 max-w-3xl text-center selection:bg-neutral-600 '>Say goodbye to the outdated financial tools. Every small business owner, regardless of the background, can now manage their business like a pro. Simple. Intuitive. And never boring.</p>
        <div className="flex w-full max-w-lg justify-center mt-12 ">
            <input
            type="text"
            className='flex-1 mr-4 rounded-xl border border-neutral-600 px-4 text-white placeholder:text-neutral-500 focus:outline-none focus:border-neutral-500 bg-neutral-800 py-2 transition duration-200'
            placeholder='Enter your email'>
            </input>
            <button className='text-white relative border border-neutral-700 px-4 py-2 rounded-md hover:bg-neutral-400 cursor-pointer'>Join the waitlist
                <div className='absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent'>

                </div>
            </button>
        </div>
        </div>
  )
}

