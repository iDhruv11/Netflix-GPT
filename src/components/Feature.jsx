import { useEffect, useState } from "react";

const Feature = ({ heading, sub, urlOne, index, urlTwo }) => {
    
    return (
        <div className={`bg-black w-full text-white flex gap-26 border-b-8 border-b-[#232323] justify-center min-h-[580px] items-center ${(index % 2 == 0) ? `flex-row-reverse gap-10` : ``}`} id="feature-section">
            <div className="flex flex-col w-4/12 gap-4">
                <h1 className="text-5xl font-extrabold">{heading}</h1>
                <h3 className="text-2xl w-10/12">{sub}</h3>
            </div>
            <div className="relative">
                <video src={urlTwo} autoPlay loop muted width="500px" className={`vid-${index}`}></video>
                <img src={urlOne} className={`img-${index} img min-w-[600px]`}/>
            </div>
        </div>
    )
}
export default Feature;