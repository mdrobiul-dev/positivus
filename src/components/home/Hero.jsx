import React from 'react'

const Hero = () => {
  return (
    <section>
        <div className='box flex gap-10'>
            <div className='w-1/2'>
            <h1 className='font-space font-medium text-6xl leading-18'>Navigating the <br /> digital landscape <br /> for success</h1>
            <p className='py-9 font-space font-normal text-2xl'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
           <div className='mt-5'>
             <a href='#' className='py-5 px-8 bg-black rounded-xl text-white/80 font-space font-normal text-xl'>
                Book a consultation
            </a>
           </div>
            </div>
            <div className='w-1/2 h-fit'>
               <img src='/images/ilustration.png' className='h-full w-full object-cover' />
            </div>
        </div>
    </section>
  )
}

export default Hero