import React from 'react'
import oldcouple from "../assets/oldcouple.jpg"
const Header = () => {
  return (
    <>
     <div className=' relative flex justify-center'>
        <img src={oldcouple} alt=""  className='h-[85vh] w-[85%]'/>
        <div className='flex flex-col absolute bg-gray-800 px-3 py-3 ml-[900px] mt-[150px]'>
            <form>
            <div className='text-white text-[40px] font-[600]'>Start Here</div>
            <div>
            <label className=' text-white' htmlFor="name">Full Name</label><br />
            <input type="text" id="name" name="name" /></div>
            <div><label className=' text-white' htmlFor="phone">Phone</label><br />
            <input type="tel" id="phone" name="phone" /></div>
            <div>
                <label className=' text-white' htmlFor="Email">Email</label><br />
                <input type="email" id="Email" name="Email" />
            </div>
            <div><button className='px-2 py-1 mt-3 ml-10 text-white bg-green-500'>Get in Touch</button></div>
             </form>
        </div>
        </div> 
    </>
  )
}

export default Header
