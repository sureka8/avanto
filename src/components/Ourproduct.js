import React from "react";
import img1 from "../images/pro1.jpg";
import img2 from "../images/pro2.jpg";
import img3 from "../images/pro3.jpg";
const Ourproduct = () => {
 
  return (
    <div className="px-40 py-10 ">
      <div className="flex justify-around items-center">
        <div className="flex  flex-col items-center justify-center space-y-2">
          <div className="h-20 w-20">
            <img src="https://super01.anvanto.com/super/themes/fox_home/modules/an_advantages/img/0812ca4d8529a6dd0f439d926c647867.svg" />
          </div>
          <p className="font-bold">Money Back Guarantee</p>
          <p className="text-slate-400 text-sm">Lorem ipsum dolor sit</p>
        </div>
        <div className="flex  flex-col items-center justify-center space-y-2">
        <div className="h-20 w-20">
          <img src="https://super01.anvanto.com/super/themes/fox_home/modules/an_advantages/img/b819fe48b6c6faba2619fc6d587f2e86.svg" />
        </div>
          <p className="font-bold">Delivery to the Door</p>
          <p className="text-slate-400 text-sm">Lorem ipsum dolor sit</p>
        </div>

        <div className="flex  flex-col items-center justify-center space-y-2">
        <div className="h-20 w-20">
          <img src="https://super01.anvanto.com/super/themes/fox_home/modules/an_advantages/img/f770628ef7b0b837b47fd3406ace9c23.svg" />
        </div>
          <p className="font-bold">Quality Guarantee</p>
          <p className="text-slate-400 text-sm">Lorem ipsum dolor sit</p>
        </div>

        <div className="flex  flex-col items-center justify-center space-y-2">
        <div className="h-20 w-20">
          <img src="https://super01.anvanto.com/super/themes/fox_home/modules/an_advantages/img/a85fd05f960b63b8c6e7631a0f9fa2ca.svg" />
        </div>
          <p className="font-bold">Loyality Program</p>
          <p className="text-slate-400 text-sm">Lorem ipsum dolor sit</p>
        </div>

      
        
      </div>
      <div className="flex  py-10 space-x-5">
        <div className="w-[10%] flex items-center justify-center ">
          <p className="text-5xl font-bold " style={{
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)', // Optional: to make the text top-to-bottom
         
        }}>Our Products</p>
        </div>
        <div className="w-[90%] grid grid-cols-3 gap-8">
          <div>
            {" "}
            <img src={img1} />{" "}
          </div>
          <div>
            {" "}
            <img src={img2} />{" "}
          </div>
          <div>
            {" "}
            <img src={img3} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourproduct;
