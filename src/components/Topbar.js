import React from 'react'
import { MdOutlineArrowDropDown } from "react-icons/md";
const Topbar = () => {
  return (
    <div className='px-40 py-1 bg-gray-300 flex justify-between items-center'>
      <div><p className='text-sm font-semibold'>Buy here and save up to 30%. Every second product for free!</p></div>
      <div className='flex space-x-5 text-xs font-semibold'>
        <div className='border-r-[1px] border-gray-400 px-2'>Phone:
        8 800 100 200</div>
        <div className='border-r-[1px] border-gray-400 px-2'>Email:
        demo@demo.com</div>
        <div className='border-r-[1px] border-gray-400 px-2'>Client service</div>
        <div className='border-r-[1px] border-gray-400 px-2'>Sign in</div>
        <div className='border-r-[1px] border-gray-400 px-2 flex space-x-1 items-center'>English <MdOutlineArrowDropDown /></div>
        <div className='border-r-[1px] border-gray-400 px-2 flex space-x-1 items-center'>USD <MdOutlineArrowDropDown /></div>
      </div>
    </div>
  )
}

export default Topbar