import React from 'react'

const Navbar = () => {
  return (
    // this is dev 3
    <section className='mt-10 mb-17.5'>
        <div className='flex items-center box justify-between'>
           <div className='w-fit h-fit'>
            <img src='/images/logo.png' alt='logo' className='w-full h-full object-cover'/>
            </div> 
            <nav>
                <ul className='flex gap-10'>
                    <li className='font-space font-normal text-xl leading-7 text-black'>About us</li>
                    <li className='font-space font-normal text-xl leading-7 text-black'>Services</li>
                    <li className='font-space font-normal text-xl leading-7 text-black'>Use Cases</li>
                    <li className='font-space font-normal text-xl leading-7 text-black'>Pricing</li>
                    <li className='font-space font-normal text-xl leading-7 text-black'>Blog</li>
                </ul>
            </nav>
            <button className='py-5 px-9 border-2 border-[#191A23] rounded-xl font-space font-normal text-xl leading-7 text-black'>
                Request a quote
            </button>
        </div>
    </section>
  )
}

export default Navbar