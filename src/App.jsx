import { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Pricing/Navbar";
import PricingOptin from "./Components/Pricing/PricingOption/PricingOptin";

const pricingPromise = fetch('pricingData.json').then(res=>res.json())

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main className="max-w-300 mx-auto">
         <Suspense
        fallback= {[<span className="loading loading-bars loading-xs "></span> ,<span className="loading loading-bars loading-xs "></span>,<span className="loading loading-bars loading-xs "></span>]} >
        <PricingOptin pricingPromise={pricingPromise}></PricingOptin>
      </Suspense>
      </main>
      
    </>
  );
}

export default App;
