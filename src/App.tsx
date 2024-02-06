import { useState } from "react";
import { FaSignal } from "react-icons/fa6";
import { IoBatteryHalf } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Tab } from "./tabs";

function App() {
  const [input, setInput] = useState(0);

  return (
    <div className="flex justify-center  items-center h-screen w-full  bg-blue-300">
      <div className="h-full bg-white w-[350px]  border-blue-300  border-8">
        <div className="h-8 flex justify-between  p-1 px-3 bg-gray-200">
          <div>
            <div>4:00 PM</div>
          </div>
          <div className="flex space-x-1">
            <FaSignal size={19} />
            <IoBatteryHalf size={21} />
          </div>
        </div>
        <div className="h-9 flex justify-end p-3 bg-gray-200">
          <BsThreeDotsVertical />
        </div>
        <div className="h-48 bg-gray-200   rounded-b-3xl">
          <input className="h-12  bg-gray-200  w-full text-[30px] text-end flex justify-end p-12 " />
        </div>
        <Tab />
      </div>
    </div>
  );
}

export default App;
