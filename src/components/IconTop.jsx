import React from 'react';
import { IoIosPeople } from "react-icons/io";
import { FaRegPaperPlane } from "react-icons/fa";
import { CiDiscount1, CiWallet } from "react-icons/ci";

const IconTop = () => {
  return (
    <div className="py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Top Values for You</h1>
      <p className="text-gray-500 mb-8">Experience a variety of benefits when using our services</p>
      
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <IconCard iconReact={<FaRegPaperPlane />} title="Travel" text="We provide escort from the airport to the hotel"/>
          <IconCard iconReact={<CiWallet />} title="Finance" text="Quick and easy booking of upcoming tours"/>
          <IconCard iconReact={<IoIosPeople />} title="Community" text="Our best tour guides are ready to assist you"/>
          <IconCard iconReact={<CiDiscount1 />} title="Discount"  text="Various promotions and tour giveaways" />
        </div>
      </div>
    </div>
  );
};

const IconCard = ({ iconReact, title, text }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-4 bg-gray-200 rounded-full">
        {iconReact && <ReactIcon iconReact={iconReact} />} 
      </div>
      <h1 className="mt-4 mb-2 text-xl font-semibold">{title}</h1>
      <p className="text-md text-gray-600 w-2/4">{text}</p>
    </div>
  );
};

const ReactIcon = ({ iconReact, size }) => {
  return (
    <div>
      {React.cloneElement(iconReact, { size: size || 30 })}
    </div>
  );
};

export default IconTop;
