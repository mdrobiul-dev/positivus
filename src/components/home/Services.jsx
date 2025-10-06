import React from 'react'

const Services = () => {
  return (
    <section className='mt-35 mb-20'>
        <div className='box'>
            <div className='flex gap-9'>
                <h2 className='font-space font-medium text-[40px] bg-[#B9FF66] rounded-lg px-1.5'>Services</h2>
                <p className='font-space font-normal text-lg'>At our digital marketing agency, we offer a range of services to <br /> help businesses grow and succeed online. These services include:</p>
            </div>
            <div>
                <div className="w-1/2 h-full bg-[url('/images/Card_1.png')] bg-cover bg-center bg-no-repeat">
                   <div className='w-1/2 p-12.5'>
                    <h3 className='bg-[#B9FF66] font-space font-medium text-3xl'>Search engine</h3>
                    <h3 className='bg-[#B9FF66] font-space font-medium text-3xl'>optimization</h3>
                   </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services