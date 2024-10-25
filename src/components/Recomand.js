import React from 'react'
import img11 from '../images/pro1-1.jpg'
import img21 from '../images/pro2-1.jpg'
import img31 from '../images/pro3-1.jpg'
import img41 from '../images/pro4-1.jpg'

const Recomand = () => {
  return (
    <div className='pt-10 px-40 h-[90vh]'>
      <h1 className='text-4xl font-bold text-center'>We Recommend</h1>
      <div className='grid grid-cols-4 gap-9 mt-10'>
        {/* Product 1 */}
        <div className='w-full relative group hover:shadow-lg transition-all duration-300'>
          <button className='bg-red-500 text-white absolute top-0 px-2 text-sm'>-20%</button>
          <button className='bg-red-500 text-white absolute top-8 px-3 text-sm '>Sale</button>
          <button className='bg-black text-white absolute top-16 px-3 text-sm '>New</button>
          <img src={img11} className='w-full' alt="Product 1" />
          <h1 className='font-semibold uppercase text-center text-xl'>EKTORP Loveseat</h1>
          <p className='text-center mt-2'>Sed ut perspiciatis unde omnis...</p>
          <p className='text-center'>
            <span className='font-bold text-xl'>$184.80</span>
            <span className='text-slate-500 line-through'>$231.00</span>
          </p>
          <div className='hidden group-hover:flex flex-col transition-all duration-300 py-3 px-3'>
            <select className='w-full border-[1px] border-slate-300 p-2'>
                <option>101x61cm - 150x100cm</option>
                <option>101x61cm - 150x100cm</option>
            </select>
            <div className='flex justify-center items-center mt-3 space-x-2'>
                <button className='bg-slate-600 p-3 rounded-full border-2 border-black'></button>
                <button className='bg-yellow-100 p-3 rounded-full border-2 hover:border-black'></button>
                <button className='bg-white p-3 rounded-full border-2 hover:border-black'></button>
                <button className='bg-orange-600 p-3 rounded-full border-2 hover:border-black'></button>
                <button className='bg-yellow-500 p-3 rounded-full border-2 hover:border-black'></button>
            </div>
            <div className='flex items-center space-x-5 mt-3'>
                <div className='flex  items-center text-xl space-x-5 bg-slate-200 py-2 px-3'>
                    <div>-</div>
                    <div>2</div>
                    <div>+</div>
                </div>
          <button className='bg-btn text-white w-1/2 mt-2 py-2 rounded-md '>
            Add to Cart
          </button>
          </div>
          </div>
          
        </div>

        {/* Product 2 */}
        <div className='w-full relative group hover:shadow-lg transition-all duration-300'>
          <button className='bg-red-500 text-white absolute top-0 px-2 text-sm'>-20%</button>
          <button className='bg-black text-white absolute top-8 px-3 text-sm '>New</button>
          <img src={img21} className='w-full' alt="Product 2" />
          <h1 className='font-semibold uppercase text-center text-xl'>NOCKEBY Loveseat</h1>
          <p className='text-center mt-2'>Sed ut perspiciatis unde omnis...</p>
          <p className='text-center'>
            <span className='font-bold text-xl'>$280.00</span>
            <span className='text-slate-500 line-through'>$350.00</span>
          </p>
          <div className='hidden group-hover:flex flex-col transition-all duration-300 py-3 px-3'>
            <select className='w-full border-[1px] border-slate-300 p-2'>
                <option>101x61cm - 150x100cm</option>
                <option>101x61cm - 150x100cm</option>
            </select>
            <div className='flex justify-center items-center mt-3 space-x-2'>
                <button className='bg-slate-600 p-3 rounded-full border-2 border-black'></button>
                <button className='bg-yellow-100 p-3 rounded-full border-2 hover:border-black'></button>
                <button className='bg-white p-3 rounded-full border-2 hover:border-black'></button>
                <button className='bg-orange-600 p-3 rounded-full border-2 hover:border-black'></button>
                <button className='bg-yellow-500 p-3 rounded-full border-2 hover:border-black'></button>
            </div>
            <div className='flex items-center space-x-5 mt-3'>
                <div className='flex  items-center text-xl space-x-5 bg-slate-200 py-2 px-3'>
                    <div>-</div>
                    <div>2</div>
                    <div>+</div>
                </div>
          <button className='bg-btn text-white w-1/2 mt-2 py-2 rounded-md '>
            Add to Cart
          </button>
          </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className='w-full relative group hover:shadow-lg transition-all duration-300'>
          <button className='bg-black text-white absolute top-0 px-2 text-sm'>New</button>
          <button className='bg-black text-white absolute top-8 px-3 text-sm '>Sold Out</button>
          <img src={img31} className='w-full' alt="Product 3" />
          <h1 className='font-semibold uppercase text-center text-xl'>KIVIK Loveseat</h1>
          <p className='text-center mt-2'>Sed ut perspiciatis unde omnis...</p>
          <p className='text-center'>
            <span className='font-bold text-xl'>$209.00</span>
          </p>
          <div className='hidden group-hover:flex flex-col transition-all duration-300 py-3 px-3'>
            <select className='w-full border-[1px] border-slate-300 p-2'>
                <option>101x61cm - 150x100cm</option>
                <option>101x61cm - 150x100cm</option>
            </select>
            <div className='flex justify-center items-center mt-3 space-x-2'>
                <button className='bg-slate-600 p-3 rounded-full border-2 border-black'></button>
                <button className='bg-yellow-100 p-3 rounded-full border-2 hover:border-black'></button>
                <button className='bg-white p-3 rounded-full border-2 hover:border-black'></button>
                <button className='bg-orange-600 p-3 rounded-full border-2 hover:border-black'></button>
                <button className='bg-yellow-500 p-3 rounded-full border-2 hover:border-black'></button>
            </div>
            <div className='flex items-center space-x-5 mt-3'>
                <div className='flex  items-center text-xl space-x-5 bg-slate-200 py-2 px-3'>
                    <div>-</div>
                    <div>2</div>
                    <div>+</div>
                </div>
          <button className='bg-btn text-white w-1/2 mt-2 py-2 rounded-md '>
            Add to Cart
          </button>
          </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className='w-full relative group hover:shadow-lg transition-all duration-300'>
          <button className='bg-black text-white absolute top-0 px-3 text-sm '>New</button>
          <img src={img41} className='w-full' alt="Product 4" />
          <h1 className='font-semibold uppercase text-center text-xl'>BEKANT Desk</h1>
          <p className='text-center mt-2'>Sed ut perspiciatis unde omnis...</p>
          <p className='text-center'>
            <span className='font-bold text-xl'>$29.00</span>
          </p>
          <div className='hidden group-hover:flex flex-col transition-all duration-300 py-3 px-3'>
            <select className='w-full border-[1px] border-slate-300 p-2'>
                <option>101x61cm - 150x100cm</option>
                <option>101x61cm - 150x100cm</option>
            </select>
            <div className='flex justify-center items-center mt-3 space-x-2'>
                <button className='bg-slate-600 p-3 rounded-full border-2 border-black'></button>
                <button className='bg-yellow-100 p-3 rounded-full border-2 hover:border-black'></button>
                <button className='bg-white p-3 rounded-full border-2 hover:border-black'></button>
                <button className='bg-orange-600 p-3 rounded-full border-2 hover:border-black'></button>
                <button className='bg-yellow-500 p-3 rounded-full border-2 hover:border-black'></button>
            </div>
            <div className='flex items-center space-x-5 mt-3'>
                <div className='flex  items-center text-xl space-x-5 bg-slate-200 py-2 px-3'>
                    <div>-</div>
                    <div>2</div>
                    <div>+</div>
                </div>
          <button className='bg-btn text-white w-1/2 mt-2 py-2 rounded-md '>
            Add to Cart
          </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recomand
