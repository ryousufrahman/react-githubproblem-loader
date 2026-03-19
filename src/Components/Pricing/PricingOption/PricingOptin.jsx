import React, { use } from 'react';
import PriceCart from './PriceCart'


const PricingOptin = ({pricingPromise}) => {
    const pricingData =use(pricingPromise);
    console.log(pricingData);
    
    
    

    
    return (
       <>

       
        <div className=' grid  md:grid-cols-3 gap-4 p-2 text-black'>
            {
               pricingData.map(data=> <PriceCart key={data.id} data={data}></PriceCart> )
            }
           
        </div>
       

       </>
       
    );
};

export default PricingOptin;