import { RxCross2 } from "react-icons/rx";
import { FaDeleteLeft } from "react-icons/fa6";
import { LiaSquareRootAltSolid } from "react-icons/lia";
import { RiDivideLine } from "react-icons/ri";
export function Tab({
  value,
  setValue,
}: {
  value: string;
  setValue: (val: string) => void;
}) {
  return (
    <>
      <div className=" h-[460px] p-2 ">
        <div className="h-12 pl-4 flex space-x-3 ">
          <LiaSquareRootAltSolid
            size={30}
            className="h-12 p-2 w-12 rounded-full  bg-blue-50"
          />
          <button className="h-12z w-12 rounded-full  bg-blue-50"></button>
          <button
            onClick={() => {
              setValue(value + "^");
            }}
            className="h-12z w-12 rounded-full text-[28px] text-center bg-blue-50"
          >
            ^
          </button>
          <button
            onClick={() => {
              setValue(value + "!");
            }}
            className="h-12z w-12 rounded-full text-[28px] text-center bg-blue-50"
          >
            !
          </button>
          <button
            onClick={() => {
              setValue(value + "^");
            }}
            className="h-8 w-8 rounded-full text-[20px] text-center rotate-180 bg-blue-50"
          >
            ^
          </button>
        </div>
        <div className="pt-1 space-y-1 ">
          <div className="   flex space-x-2">
            <button
              onClick={() => {
                setValue(value + "AC");
              }}
              className="h-[74px] rounded-full  text-[30px]   text-center    w-[74px] bg-blue-200"
            >
              AC
            </button>
            <button
              onClick={() => {
                setValue(value + "( )");
              }}
              className="h-[74px] rounded-full  text-[30px]   text-center    w-[74px] bg-blue-200"
            >
              ( )
            </button>
            <button
              onClick={() => {
                setValue(value + "%");
              }}
              className="h-[74px] rounded-full   text-[30px]  text-center   w-[74px] bg-blue-200"
            >
              %
            </button>
            <button
              onClick={() => {
                setValue(value + "");
              }}
              className="h-[74px] p-5 rounded-full  w-[74px] bg-blue-200"
            >
              <RiDivideLine size={35} />
            </button>
          </div>
          <div className="   flex space-x-2">
            <button
              onClick={() => {
                setValue(value + "7");
              }}
              className="h-[74px] rounded-full  text-[30px] pt-3  text-center    w-[74px] bg-white"
            >
              7
            </button>
            <button
              onClick={() => {
                setValue(value + "8");
              }}
              className="h-[74px] rounded-full  text-[30px] pt-3  text-center    w-[74px] bg-white"
            >
              8
            </button>
            <button
              onClick={() => {
                setValue(value + "9");
              }}
              className="h-[74px] rounded-full  text-[30px] pt-3  text-center    w-[74px] bg-white"
            >
              9
            </button>
            <button
              onClick={() => {
                setValue(value + "");
              }}
              className="h-[74px]  p-5  rounded-full  w-[74px] bg-blue-200"
            >
              <RxCross2 size={33} />
            </button>
          </div>
          <div
            onClick={() => {
              setValue(value + "4");
            }}
            className="   flex space-x-2"
          >
            <button className="h-[74px] rounded-full text-[30px] pt-3  text-center     w-[74px] bg-white">
              4
            </button>
            <button
              onClick={() => {
                setValue(value + "5");
              }}
              className="h-[74px] rounded-full   text-[30px] pt-3  text-center   w-[74px] bg-white"
            >
              5
            </button>
            <button
              onClick={() => {
                setValue(value + "6");
              }}
              className="h-[74px] rounded-full  text-[30px] pt-3  text-center    w-[74px] bg-white"
            >
              6
            </button>
            <button
              onClick={() => {
                setValue(value + "-");
              }}
              className="h-[74px] rounded-full text-center text-[50px]  w-[74px] bg-blue-200"
            >
              -
            </button>
          </div>
          <div className="   flex space-x-2">
            <button
              onClick={() => {
                setValue(value + "1");
              }}
              className="h-[74px] rounded-full text-[30px] pt-3  text-center     w-[74px] bg-white"
            >
              1
            </button>
            <button
              onClick={() => {
                setValue(value + "2");
              }}
              className="h-[74px] rounded-full  text-[30px] pt-3  text-center    w-[74px] bg-white"
            >
              2
            </button>
            <button
              onClick={() => {
                setValue(value + "3");
              }}
              className="h-[74px] rounded-full  text-[30px] pt-3  text-center    w-[74px] bg-white"
            >
              3
            </button>
            <button
              onClick={() => {
                setValue(value + "+");
              }}
              className="h-[74px] rounded-full  text-[40px] pt-1  text-center    w-[74px] bg-blue-200"
            >
              +
            </button>
          </div>
          <div className="   flex space-x-2">
            <button
              onClick={() => {
                setValue(value + "0");
              }}
              className="h-[74px] rounded-full  text-[30px] pt-3  text-center    w-[74px] bg-white"
            >
              0
            </button>
            <button
              onClick={() => {
                setValue(value + ".");
              }}
              className="h-[74px] rounded-full  text-[40px]   text-center    w-[74px] bg-white"
            >
              .
            </button>
            <button
              onClick={() => {
                setValue(value + "");
              }}
              className="h-[74px] rounded-full p-5 text-center   w-[74px] bg-white"
            >
              <FaDeleteLeft size={30} />
            </button>
            <button
              onClick={() => {
                setValue(value + "=");
              }}
              className="h-[74px] rounded-full  text-[40px] pt-1  text-center    w-[74px] bg-blue-200"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
