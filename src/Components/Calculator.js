import { useState } from "react";
export default function Calendar() {
    const [input, setInput] = useState("");
    const handleButtonClick = (value) => {
        if(value === '='){
            try {
                setInput(eval(input).toString());
        }catch (error) {
            setInput('Error');
        }
    }
       

    }
    return (
        
<section className="flex justify-center items-center h-full">
    <div className=" h-[450px] bg-slate-200 p-4 justify-center mt-10 w-[330px] "> 
            <div className="pr-3 ">
            <input 
            type="text" 
            placeholder="" 
            value={input }            
            className=" w-[300px] h-[60px] mt-6 border-none ">
            </input>
            </div>
        <div className=" text-lg font-bold  justify-between pl-3 mt-5">
            <div className="flex flex-row  gap-4 pr-3 ">
            <button 
            onClick={() => handleButtonClick('7')}
            className="w-[60px] h-[60px] bg-gray-400 rounded-[14px] ">7</button>
            <button 
            onClick={() => handleButtonClick('8')}
            className="w-[60px] h-[60px] bg-gray-400 rounded-[14px]">8</button>
            <button 
            onClick={() => handleButtonClick('9')}
            className="w-[60px] h-[60px] bg-gray-400 rounded-[14px]">9</button>
            <button 
            onClick={() => handleButtonClick('+')}
            className="w-[60px] h-[60px] bg-[black] rounded-[14px] text-white">+</button>
            </div>
            
            <div className=" flex flex-row gap-4 mt-4 pr-3">
            <button 
            onClick={() => handleButtonClick('4')}
            className="w-[60px] h-[60px] bg-gray-400 rounded-[14px]">4</button>
            <button 
            onClick={() => handleButtonClick('5')}
            className="w-[60px] h-[60px] bg-gray-400 rounded-[14px]">5</button>
            <button 
            onClick={() => handleButtonClick('6')}
            className="w-[60px] h-[60px] bg-gray-400 rounded-[14px]">6</button>
            <button 
            onClick={() => handleButtonClick('-')}
            className="w-[60px] h-[60px] bg-[black] rounded-[14px] text-white">-</button>
            </div>
            <div className=" flex flex-row gap-4 mt-4 pr-3">
            <button 
            onClick={() => handleButtonClick('1')}
            className="w-[60px] h-[60px] bg-gray-400 rounded-[14px]">1</button>
            <button 
            onClick={() => handleButtonClick('2')}
            className="w-[60px] h-[60px] bg-gray-400 rounded-[14px]">2</button>
            <button 
            onClick={() => handleButtonClick('3')}
            className="w-[60px] h-[60px] bg-gray-400 rounded-[14px]">3</button>
            <button 
            onClick={() => handleButtonClick('x')}
            className="w-[60px] h-[60px] bg-[black] rounded-[14px] text-white">x</button>
            </div>
            <div className=" flex flex-row  gap-4 mt-4 pr-3 ">
            <button 
            onClick={() => handleButtonClick('c')}
            className="w-[60px] h-[60px] bg-[red] text-white rounded-[14px]">c</button>
            <button 
            onClick={() => handleButtonClick('0')}
            className="w-[60px] h-[60px] bg-gray-400 rounded-[14px]">0</button>
            <button 
            onClick={() => handleButtonClick('=')}
            className="w-[60px] h-[60px] bg-[black] text-white rounded-[14px]">=</button>
            <button
            onClick={() => handleButtonClick('/')}
            className="w-[60px] h-[60px] bg-[black] text-white rounded-[14px]">/</button>
            </div>
        </div>
            
     </div>
</section>
    );
}