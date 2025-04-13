import React from 'react';
import Pricingfeatures from './Pricingfeatures';

const PricingCard = ({pricing}) => {
    const {name, price, description, features} = pricing;
    return (
        <div className='flex flex-col  border bg-fuchsia-800 rounded-2xl p-4 mt-5'>
           <div>
            <h1 className='text-5xl'>{name}</h1>
            <h4 className='text-2xl mt-5'>{price}</h4>
           </div>
           <div className='bg-amber-600 p-4 rounded-2xl mt-10 flex-1'>
            <p>{description}</p>
            {
                features.map((feature, index)=> <Pricingfeatures 
                key={index}
                feature={feature}></Pricingfeatures>)
            }
           </div>
           <button className='btn w-full mt-4'>Subscribe</button>
        </div>
    );
};

export default PricingCard;