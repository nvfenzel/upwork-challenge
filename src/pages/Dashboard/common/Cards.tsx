import React from 'react';

interface CardsProps {
    Icon: string; 
    ArrowRight: string; 
    Description: string; 
    Content: string; 
  }

const Cards: React.FC<CardsProps> = ({Icon, ArrowRight, Description, Content}) => {

  return (
    <div className=" flex flex-col justify-between border border-inherit rounded-xl w-64 h-24 p-3">
    <div className="flex justify-between">
      <div className="flex">
        <img src={Icon} alt="Log Out" className="w-6 h-6" />
        <span className=" ml-3 font-semibold text-base text-grey-dark">{Description}</span>
      </div>
      <img src={ArrowRight} alt="Log Out" className="w-6 h-6" />
    </div>
      <span className="text-2xl font-medium text-grey-dark">{Content}</span>
  </div>
  )
}

export default Cards;