import React,{useEffect,useState} from "react";
import img from "../images/bgimage.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Slider = () => {
  const sliderimg = [
    { id: 1, image: img },
    { id: 2, image: img },
    { id: 3, image: img },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
 

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === sliderimg.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? sliderimg.length - 1 : prevSlide - 1
    );
  };
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, []);
  return <div className="h-screen w-full">
     <div className='transition ease-out duration-40 relative'>
   
      <img src={sliderimg[currentSlide].image} alt='' className='w-full  h-full object-contain' />
    
    </div>
    <div className='top-0 absolute hidden md:flex items-center justify-between h-full w-full text-black px-3 md:px-5 text-4xl'>
      <button onClick={prevSlide} >
        <IoIosArrowBack  className='text-gray-500 text-4xl'/>
      </button>
      <button onClick={prevSlide}>
        <IoIosArrowForward className='text-gray-500 text-4xl'/>
      </button>
    </div>

    <div className='bottom-0 absolute  hidden md:flex justify-center left-[50%]  gap-3'>
        {sliderimg.map((s,i) =>(
            <div key={i} className={`rounded-full h-4 w-4  ${i == currentSlide ? "bg-btn": "bg-white"}`}></div>
        ))}
        
    </div>
    <div className='top-60 left-40 h-auto w-1/2 absolute'>
<div className="  mt-10 "> 
    <p className="text-9xl font-semibold">Furniture</p>
    <p className="text-9xl ">of the future</p>
    <p className="text-xl mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
    <button className="mt-8 rounded-md bg-btn px-8 py-3 text-white">SHOP NOW</button>
    </div>

</div>
 
  </div>;
};

export default Slider;
