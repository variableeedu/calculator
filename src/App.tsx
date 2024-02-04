import { useState } from "react";
import { FaSignal } from "react-icons/fa6";
import { IoBatteryHalf } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { FaDeleteLeft } from "react-icons/fa6";
import { LiaSquareRootAltSolid } from "react-icons/lia";
import { RiDivideLine } from "react-icons/ri";
function App() {
  const [count, setCount] = useState(0);

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
        <div className=" h-[460px] p-2 ">
          <div className="h-12 pl-4 flex space-x-3 ">
            <LiaSquareRootAltSolid
              size={30}
              className="h-12 p-2 w-12 rounded-full  bg-blue-50"
            />
            <div className="h-12z w-12 rounded-full  bg-blue-50"></div>
            <div className="h-12z w-12 rounded-full text-[28px] text-center bg-blue-50">
              ^
            </div>
            <div className="h-12z w-12 rounded-full text-[28px] text-center bg-blue-50">
              !
            </div>
            <div className="h-8 w-8 rounded-full text-[20px] text-center rotate-180 bg-blue-50">
              ^
            </div>
          </div>
          <div className="pt-1 space-y-1 ">
            <div className="   flex space-x-2">
              <div className="h-[74px] rounded-full  text-[30px] pt-3  text-center    w-[74px] bg-blue-200">
                AC
              </div>
              <div className="h-[74px] rounded-full  text-[30px] pt-3  text-center    w-[74px] bg-blue-200">
                ( )
              </div>
              <div className="h-[74px] rounded-full   text-[30px] pt-3  text-center   w-[74px] bg-blue-200">
                %
              </div>
              <div className="h-[74px] p-5 rounded-full  w-[74px] bg-blue-200">
                <RiDivideLine size={35} />
              </div>
            </div>
            <div className="   flex space-x-2">
              <div className="h-[74px] rounded-full  text-[30px] pt-3  text-center    w-[74px] bg-white">
                7
              </div>
              <div className="h-[74px] rounded-full  text-[30px] pt-3  text-center    w-[74px] bg-white">
                8
              </div>
              <div className="h-[74px] rounded-full  text-[30px] pt-3  text-center    w-[74px] bg-white">
                9
              </div>
              <div className="h-[74px]  p-5  rounded-full  w-[74px] bg-blue-200">
                <RxCross2 size={33} />
              </div>
            </div>
            <div className="   flex space-x-2">
              <div className="h-[74px] rounded-full text-[30px] pt-3  text-center     w-[74px] bg-white">
                4
              </div>
              <div className="h-[74px] rounded-full   text-[30px] pt-3  text-center   w-[74px] bg-white">
                5
              </div>
              <div className="h-[74px] rounded-full  text-[30px] pt-3  text-center    w-[74px] bg-white">
                6
              </div>
              <div className="h-[74px] rounded-full text-center text-[50px]  w-[74px] bg-blue-200">
                -
              </div>
            </div>
            <div className="   flex space-x-2">
              <div className="h-[74px] rounded-full text-[30px] pt-3  text-center     w-[74px] bg-white">
                1
              </div>
              <div className="h-[74px] rounded-full  text-[30px] pt-3  text-center    w-[74px] bg-white">
                2
              </div>
              <div className="h-[74px] rounded-full  text-[30px] pt-3  text-center    w-[74px] bg-white">
                3
              </div>
              <div className="h-[74px] rounded-full  text-[40px] pt-1  text-center    w-[74px] bg-blue-200">
                +
              </div>
            </div>
            <div className="   flex space-x-2">
              <div className="h-[74px] rounded-full  text-[30px] pt-3  text-center    w-[74px] bg-white">
                0
              </div>
              <div className="h-[74px] rounded-full  text-[40px]   text-center    w-[74px] bg-white">
                .
              </div>
              <div className="h-[74px] rounded-full p-5 text-center   w-[74px] bg-white">
                <FaDeleteLeft size={30} />
              </div>
              <div className="h-[74px] rounded-full  text-[40px] pt-1  text-center    w-[74px] bg-blue-200">
                =
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
