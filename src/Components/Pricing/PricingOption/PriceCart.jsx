import { CircleCheckBig } from "lucide-react";
import React from "react";

const Price = ({ data }) => {
  console.log(data);
  const features = data.features;

  return (
    <>
      <div className="bg-amber-500 rounded-2xl p-5 flex flex-col gap-4 ">
        <div>
          <h2 className="text-4xl">{data.name} <span className="text-2xl text-gray-500 font-bold">{data.isPopular? 'Recomended' : ''}</span></h2>
          <h4 className="text-2xl">{data.price}</h4>
          
        </div>

        <div className="mt-3 bg-amber-200 p-4 rounded-2xl flex-1">
            <p>{data.description}</p>
          {features.map((feature) => (
            <p className="flex gap-2">
              {" "}
              <CircleCheckBig className="text-green-500"></CircleCheckBig> {feature}
            </p>
          ))}
        </div>
        <div>
          <button className="btn w-full btn-primary ">{data.buttonText}</button>
        </div>
      </div>
    </>
  );
};

export default Price;
