import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black px-40 h-96 grid grid-cols-4 text-white py-10 ">
      <div>
        <h1 className="text-2xl font-bold uppercase">Products</h1>
        <ul className="flex flex-col space-y-3 mt-8 text-xl">
          <li>About us</li>
          <li>Contact us</li>
          <li>Stores</li>
          <li>Our blog</li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold uppercase">Our company</h1>
        <ul className="flex flex-col space-y-3 mt-8 text-xl">
          <li>Delivery</li>
          <li>Legal Notice</li>
          <li>Login</li>
          <li>My account</li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold uppercase">Your account</h1>
        <ul className="flex flex-col space-y-3 mt-8 text-xl">
          <li>Personal info</li>
          <li>Orders</li>
          <li>Credit slips</li>
          <li>Addresses</li>
          <li>Vouchers</li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold uppercase">Contacts</h1>
        <ul className="flex flex-col space-y-3 mt-8 text-xl">
          <li>Demo Shop</li>
          <li>United States</li>
          <li>8 800 100 200</li>
          <li> demo@demo.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
