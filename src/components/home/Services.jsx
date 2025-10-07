import React from 'react'

const Services = () => {
  return (
    <section className='mt-35 mb-20'>
        <div className='box'>
            <div className='flex gap-9'>
                <h2 className='font-space font-medium text-[40px] bg-[#B9FF66] rounded-lg px-1.5'>Services</h2>
                <p className='font-space font-normal text-lg'>At our digital marketing agency, we offer a range of services to <br /> help businesses grow and succeed online. These services include:</p>
            </div>
            <div className="flex bg-[url('/images/Card_1.png')] bg-cover bg-center bg-no-repeat w-1/2">
                <div className="w-2/3 h-full ">
                   <div className='w-fit max-w-1/2 p-12.5'>
                    <h3 className='bg-[#B9FF66] font-space font-medium text-3xl rounded-lg text-center px-1.5'>Search engine</h3>
                    <h3 className='bg-[#B9FF66] font-space font-medium text-3xl rounded-lg text-center w-fit px-1.5 mb-23'>optimization</h3>
                    <div className='flex gap-4 items-center'>
                      <div className='h-full w-full max-h-[41px] max-w-[41px]
                    '>
                      <a href='#'>
                      <img src='/images/arrow.png' alt='arrow' className='h-full w-full object-cover'/>
                    </a>
                    </div>
                    <div className='font-space font-normal text-xl leading-7'>Learn more</div>
                    </div>
                   </div>
                </div> 
                 <div className='w-1/3'>
                <img src='/images/cardinside_1.png' alt='img' className='w-full h-full object-cover'/>
                </div> 
            </div>
        </div>
    </section>
  )
}

export default Services