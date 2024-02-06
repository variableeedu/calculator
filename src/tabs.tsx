import { RxCross2 } from "react-icons/rx";
import { FaDeleteLeft } from "react-icons/fa6";
import { LiaSquareRootAltSolid } from "react-icons/lia";
import { RiDivideLine } from "react-icons/ri";

export function Tab() {
  return (
    <>
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
    </>
  );
}
