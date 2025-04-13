import React from 'react';
import {CircleCheckBig} from 'lucide-react';

const Pricingfeatures = ({feature}) => {
    return (
       <p className='flex mt-4'> <CircleCheckBig className='mr-2'></CircleCheckBig>{feature}</p>
    );
};

export default Pricingfeatures;