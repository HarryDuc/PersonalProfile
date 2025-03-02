import React from 'react'
import Image from 'next/image';
import avatar from '../resources/image/avatar_call_me.jpg';
import Script from 'next/script';

function Contact() {
    return (
        <div id='contact' className=''>
            <div className='text-center'>
                <div className='text-xs font-medium text-gray-500 mb-1'>What&apos;s poppin?</div>
                <div className='text-[#4db5ff] text-2xl'>Let&apos;s discuss</div>
            </div>

            <div className='flex mt-16 lg:mt-10 items-center lg:justify-center flex-col lg:flex-row space-y-5 lg:space-x-5'>
                <div className='h-48 w-48 lg:h-60 lg:w-60 mb-5 sm:mr-10 lg:mb-0 rounded-3xl bg-gradient-to-tr from-orange-400 to-slate-600'>
                    <div>
                        <div className='-rotate-12 hover:rotate-0 transition-all duration-300 z-0'>
                            <Image src={avatar} alt='cale is waving' className='rounded-3xl' />
                        </div>
                    </div>
                </div>

                <div className='bg-white bg-opacity-5 backdrop-blur-sm max-w-lg w-full rounded-lg'>
                    <div className='flex py-5 gap-2 px-5'>
                        <div className='bg-red-600 h-2 w-2 rounded-full'></div>
                        <div className='bg-yellow-500 h-2 w-2 rounded-full'></div>
                        <div className='bg-green-700 h-2 w-2 rounded-full'></div>
                    </div>
                    <div className='h-[1px] w-full bg-white relative bg-opacity-10'></div>

                    <form
                        className='px-5 py-5'
                        name='contact'
                        method='post'
                        data-netlify='true'
                        data-netlify-honeypot='bot-field'
                        action='/#contact'>

                        <input type='hidden' name='form-name' value='contact' />

                        <div hidden>
                            <input name='bot-field' />
                        </div>

                        <div className='flex flex-col gap-y-4'>
                            <div className='flex flex-col items-start gap-1'>
                                <label htmlFor='name' className='text-xs'>Name</label>
                                <input className='w-full text-black rounded-sm py-1.5 px-2 focus:outline-none focus:ring-4 focus:ring-offset-0 focus:ring-[#f7b02d39] focus:bg-gray-200 text-sm' type='text' id='name' name='name' required />
                            </div>

                            <div className='flex flex-col items-start gap-1'>
                                <label htmlFor='email' className='text-xs'>Email</label>
                                <input className='w-full text-black rounded-sm py-1.5 px-2 focus:outline-none focus:ring-4 focus:ring-offset-0 focus:ring-[#f7b02d39] focus:bg-gray-200 text-sm' type='email' id='email' name='email' required />
                            </div>

                            <div className='flex flex-col items-start gap-1'>
                                <label htmlFor='message' className='text-xs'>Message</label>
                                <textarea rows={4} className='text-sm py-1 px-2 w-full rounded-sm text-black focus:outline-none focus:ring-4 focus:ring-offset-0 focus:ring-[#f7b02d39] focus:bg-gray-200' id='message' name='message' required></textarea>
                            </div>

                            <div className='flex justify-end mt-4'>
                                <button className='bg-gradient-to-t from-orange-400 to-yellow-400 text-[#f3f3f3] p-2 sm:p-1.5 rounded-lg w-44 sm:text-sm font-semibold focus:outline-none focus:ring-4 focus:ring-offset-0 focus:ring-[#f7b02d39]' type='submit'>Submit</button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>


        </div>
    )
}

export default Contact