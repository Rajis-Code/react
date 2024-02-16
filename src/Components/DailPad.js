import { useState } from "react";
import backspace from "../assets/images/backspace .png";

export default function DailPad() {
    const handleBackspaceClick = () => {
        setNumber(prevNumber => prevNumber.slice(0, -1));
    };
  const [number, setNumber] = useState("");
  const maxDigits = 30;
  const dialNumbers = number.slice(maxDigits);
  const inputField = document.getElementById("numberInput");

  return (
    <section className=" flex justify-center items-center h-full">
      <div className="  h-[400px] bg-slate-200 p-4 justify-center mt-10 ">
        <div className="font-semibold text-4xl text-center mt-6 ">Dail Pad</div>
        <div className="flex flex-row h-[56px] w-[310px] bg-[white] my-4 justify-between items-center gap-2 truncate">
          <div className="max-w-fit w-full overflow-hidden ">{number}</div>

          <button 
           onClick={handleBackspaceClick}
          className="w-[40px] ">
            <img
              src={backspace}
              alt="backspace"
              width='30px'
              height="30px"
              ></img>
          </button>
        </div>

        <div>
          <div className=" flex justify-center mt-3 gap-5">
            <button
              onClick={() => {
                setNumber((prevoiusNumber) => prevoiusNumber + 1);
              }}
              className=" bg-slate-100 text-black w-[90px] h-[40px] rounded-[10px]  font-semibold"
            >
              1
            </button>
            <button
              onClick={() => {
                setNumber((prevoiusNumber) => prevoiusNumber + 2);
              }}
              className=" bg-slate-100 text-black w-[90px] h-[40px] rounded-[10px]  font-semibold"
            >
              2
            </button>
            <button
              onClick={() => {
                setNumber((prevoiusNumber) => prevoiusNumber + 3);
              }}
              className=" bg-slate-100 text-black w-[90px] h-[40px] rounded-[10px]  font-semibold"
            >
              3
            </button>
          </div>
          <div className=" flex justify-center mt-3 gap-5">
            <button
              onClick={() => {
                setNumber((prevoiusNumber) => prevoiusNumber + 4);
              }}
              className=" bg-slate-100 text-black w-[90px] h-[40px] rounded-[10px]  font-semibold"
            >
              4
            </button>
            <button
              onClick={() => {
                setNumber((prevoiusNumber) => prevoiusNumber + 5);
              }}
              className=" bg-slate-100 text-black w-[90px] h-[40px] rounded-[10px]  font-semibold"
            >
              5
            </button>
            <button
              onClick={() => {
                setNumber((prevoiusNumber) => prevoiusNumber + 6);
              }}
              className=" bg-slate-100 text-black w-[90px] h-[40px] rounded-[10px]  font-semibold"
            >
              6
            </button>
          </div>
          <div className="flex justify-center mt-3 gap-5">
            <button
              onClick={() => {
                setNumber((prevoiusNumber) => prevoiusNumber + 7);
              }}
              className=" bg-slate-100 text-black w-[90px] h-[40px] rounded-[10px]  font-semibold"
            >
              7
            </button>
            <button
              onClick={() => {
                setNumber((prevoiusNumber) => prevoiusNumber + 8);
              }}
              className=" bg-slate-100 text-black w-[90px] h-[40px] rounded-[10px]  font-semibold"
            >
              8
            </button>
            <button
              onClick={() => {
                setNumber((prevoiusNumber) => prevoiusNumber + 9);
              }}
              className=" bg-slate-100 text-black w-[90px] h-[40px] rounded-[10px]  font-semibold"
            >
              9
            </button>
          </div>
          <div className="flex justify-center mt-3 gap-5 ">
            <button
              onClick={() => {
                setNumber((prevoiusNumber) => prevoiusNumber + 10);
              }}
              className=" bg-slate-100 text-black w-[90px] h-[40px] rounded-[10px]  font-semibold"
            >
              *
            </button>
            <button
              onClick={() => {
                setNumber((prevoiusNumber) => prevoiusNumber + 11);
              }}
              className=" bg-slate-100 text-black w-[90px] h-[40px] rounded-[10px]  font-semibold"
            >
              0
            </button>
            <button
              onClick={() => {
                setNumber((prevoiusNumber) => prevoiusNumber + 12);
              }}
              className=" bg-slate-100 text-black w-[90px] h-[40px] rounded-[10px]  font-semibold"
            >
              #
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
