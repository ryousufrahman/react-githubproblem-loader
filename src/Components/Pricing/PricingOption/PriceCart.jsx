import { TicketCheck } from "lucide-react";
import React from "react";

const Price = ({ data }) => {
  console.log(data);
  const features = data.features;

  return (
    <>
      <div className="bg-amber-200 rounded-2xl p-5 ">
        <div>
          <h2 className="text-4xl">{data.name}</h2>
          <h4 className="text-2xl">{data.price}</h4>
          <p>{data.description}</p>
        </div>

        <div className="mt-3 bg-amber-400 p-4 rounded-2xl">
          {features.map((feature) => (
            <p className="flex gap-2">
              {" "}
              <TicketCheck className="text-green-500"></TicketCheck> {feature}
            </p>
          ))}
        </div>
        <div>
          <button className="btn w-full btn-primary ">Wide</button>
        </div>
      </div>
    </>
  );
};

export default Price;
