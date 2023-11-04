import React from 'react';
import Earn from '../../assets/earn.svg'
import Calendar from '../../assets/calendar-check-2.svg'
import Star from '../../assets/star.svg'
import Stats from '../../assets/stats.svg'
import Logo from '../../assets/Logo.svg'
import Life from '../../assets/life.svg'
import Settings from '../../assets/settings.svg'

const Sidebar: React.FC = () => {
  const firstButtonStyles = "bg-onfocus text-sm rounded-md flex w-full h-12 px-2 md:justify-start justify-center items-center";
  const firstTextStyles = "font-semibold ml-2 hidden md:block text-white";
  
  const commonButtonStyles = "bg-primary text-sm flex w-full h-12 md:justify-start px-2 justify-center items-center";
  const commonTextStyles = "font-semibold ml-2 hidden md:block text-onblur";

  return (
    <aside className="bg-primary h-full md:h-screen lg:p-4 flex flex-col justify-between">
        <div>
        <div className="h-32 flex flex-col justify-center items-center">
          <img src={Logo} className="h-10" alt={'logo'} />
          <span className="text-sm font-semibold text-white">Logo</span>
        </div>
        <div>
        <button className={firstButtonStyles}>
          <img src={Stats} alt={'Overview'} />
          <span className={firstTextStyles}>Overview</span>
        </button>
        <button className="bg-primary text-sm flex w-full h-12 md:justify-between px-2 justify-center items-center">
        <div className="flex items-center">
          <img src={Calendar} alt={'Visits'} />
          <span className={commonTextStyles}>Visits</span>
        </div>
        <span className="mr-2 rounded-full bg-white h-4 text-primary w-4 text-xs flex items-center justify-center">2</span>
        </button>
        <button className={commonButtonStyles}>
          <img src={Earn} alt={'Earnings'} />
          <span className={commonTextStyles}>Earnings</span>
        </button>
        <button className={commonButtonStyles}>
          <img src={Star} alt={'Reviews'} />
          <span className={commonTextStyles}>Reviews</span>
        </button>
      </div>
        </div>
        <div>
        <button className={commonButtonStyles}>
          <img src={Life} alt='randomm' />
          <span className={commonTextStyles}>Support</span>
        </button>
        <button className={commonButtonStyles}>
          <img src={Settings} alt='randomm' />
          <span className={commonTextStyles}>Settings</span>
        </button>
        </div>
    </aside>
  );
}

export default Sidebar;
