import React, { useState } from 'react'
import bgimg from '../images/newletter.jpg'
const Newsletter = () => {
  const [email,setEmail] = useState('')
  const handleClick = ( e) =>{
    e.preventDefault();
    console.log(email);
    
  }
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox changes
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div className='h-96 py-14 flex  '
    style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover', // Ensures the image covers the entire div
        backgroundPosition: 'center'
    }}>
      <div className='w-1/2'></div>
      <div className='w-1/2'>
      <div className='bg-white h-full w-4/5 py-3 px-14'>
      <p className='text-4xl font-bold text-center'>Join our newsletter</p>
      <p className='text-center mt-3' >You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</p>
      <div className='flex space-x-2 mt-3'>
      <div className="flex items-center border-b border-gray-300 py-1 w-3/4">
    <input className="appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search" aria-label="Full name" 
    onChange={(e) => setEmail(e.target.value)}/>
 
  </div>
  <button className={`px-8 py-2 text-white rounded-md ${
                isChecked ? 'bg-btn' : 'bg-[#fdba74] cursor-not-allowed'
              }`}
              disabled={!isChecked}
               onClick={(e) => handleClick(e)}>SEND</button>
  </div>
  <div class="flex items-center mt-3">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    onChange={handleCheckboxChange} />
    <label for="default-checkbox" class="ms-2 text-sm">Enim quis fugiat consequat elit minim nisi eu occaecat occaecat deserunt aliquip nisi ex deserunt.</label>
</div>
      </div>
      </div>
    </div>
  )
}

export default Newsletter