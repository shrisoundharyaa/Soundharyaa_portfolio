import { useEffect, useState } from "react"


// eslint-disable-next-line react/prop-types
export const LoadingScreen = ({onComplete}) =>{
   const [text,setText] =  useState();
   const fullTest = "HI I'M SOUNDHARYAA SHRI S";

   useEffect(()=>{
    let index =0;
    const interval = setInterval(()=>{
        setText(fullTest.substring(0,index));
        index++;
        if(index > fullTest.length) {
            clearInterval(interval);
            setTimeout(() =>{
                onComplete();
            } , 1000);
        }
    },100);

       return () => clearInterval(interval);
   },[onComplete]);




    return <div className = "fixed inset-0 z-50  bg-black text-grey-100 flex flex-col items-center justify-center ">
   <div className="mb-4 text-4xl font-mono font-bold">
        {text}<span className="animate-blink ml-1"></span>
   </div>
   
   <div className="w-[200px] h-[2px] bg-grey-800 rounded relative overflow-hidden">
         <div className="w-[40%] h-full  bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
            {" "}
         </div>
   </div>
    </div>
}