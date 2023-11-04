import React from 'react';
import LogOut from '../../assets/log-out.svg'
import Message from '../../assets/message.svg'
import Bell from '../../assets/bell.svg'
import Avatar from '../../assets/Avatar.png'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg h-12 w-full flex justify-end items-center">
            <div className="relative">
            <button className="bg-white">
              <img src={Message} alt="Log Out" className="w-5 h-5 rounded" />
            </button>
              <div className="absolute top-1 right-3 bg-primary text-white font-semibold h-4 w-4 flex items-center justify-center text-xs rounded-full">1</div>
            </div>
            <div className="relative">
              <button className="bg-white">
                <img src={Bell} alt="Log Out" className="w-5 h-5 rounded" />
              </button>
              <div className="absolute top-1 right-3 bg-primary text-white font-semibold h-4 w-4 flex items-center justify-center text-xs rounded-full">1</div>
            </div>
            <button className="bg-white flex items-center h-full sm:w-40 p-2">
              <img src={Avatar} alt="Log Out" className=" h-4/5 rounded" />
              <div className="bg-white sm:flex hidden ml-4 flex-col items-start w-2/3">
                <span className="font-semibold text-sm text-black">Olivia CGiver</span>
                <span className=" text-secondary text-sm">olivia@cae.com</span>
              </div>
            </button>
            <button className="bg-primary w-12 h-12 p-0 flex items-center justify-center ml-3">
              <img src={LogOut} alt="Log Out" className="w-5 h-5 rounded" />
            </button>
    </nav>
  );
}

export default Navbar;
