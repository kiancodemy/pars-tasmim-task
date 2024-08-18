import { Type_off_simcard } from "../utils/data/data";
import { useEffect, useRef, useState } from "react";
import { price_charge } from "../utils/data/data";

import { useStore } from "../store/useStore";
import SubmitButton from "./SubmitButton";
export default function Right() {
  ///zustand//
  const setTypeOfSimcard = useStore((state) => state.setTypeOfSimcard);
  const phoneError = useStore((state) => state.phoneError);
  const TypeOfSimcard = useStore((state) => state.TypeOfSimcard);
  const PriceError = useStore((state) => state.PriceError);
  const setPriceOfCharge = useStore((state) => state.setPriceOfCharge);
  const setTypeOfCharge = useStore((state) => state.setTypeOfCharge);
  const PriceOfCharge = useStore((state) => state.PriceOfCharge);
  const PhoneNumber = useStore((state) => state.PhoneNumber);

  const setPhoneNumber = useStore((state) => state.setPhoneNumber);
  const email = useStore((state) => state.email);
  const setemail = useStore((state) => state.setemail);

  //focus on phone
  const [isPhonefocused, setisfocused] = useState<Boolean>(false);
  const [isFirst, setisFirst] = useState<number>(0);
  // if toggle buttonv is checked//
  const [checked, setchcked] = useState(false);

  /// select your own charge price
  const [_, setSelectCharge] = useState<any>("");
  ///focus on email//
  const [isemailfocused, setisEmailfocused] = useState<Boolean>(false);

  ///choose the price if the charge//
  const [chargePrice, setchargePrice] = useState<Number | String>(20000);

  /// toggle function to see what kind charge type you want //
  const handleToggle = () => {
    if (!checked) {
      setTypeOfCharge("شگفت انگیز");
      setPriceOfCharge(50000);
      setchcked((prev) => !prev);

      setchargePrice(50000);
    } else {
      setTypeOfCharge("معمولی");
      setchcked((prev) => !prev);
    }
  };

  //delelete focus for phone and email section out input for color change of border//
  const inputRef = useRef<HTMLInputElement>(null);
  const inEmailputRef = useRef<HTMLInputElement>(null);
  const handleClickEmailOutside = (e: MouseEvent) => {
    if (
      inEmailputRef.current &&
      !inEmailputRef.current.contains(e.target as Node)
    ) {
      setisEmailfocused(false);
    }
  };
  const handleClickOutside = (e: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      setisfocused(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickEmailOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickEmailOutside);
    };
  }, []);

  return (
    <div className="flex justify-center grow">
      <div className="flex flex-col items-center  max-w-[315px] grow text-[18px] ">
        <h1 className="text-center mb-[35px] font-bold">
          خرید آنلاین شارژ ایرانسل
        </h1>
        <div className="flex flex-col">
          <h1 className="mb-[14px] font-normal text-center text-[#8b8b8d] text-[14px]">
            نوع سیم‌کارت
          </h1>

          <div className="flex mb-[5px] w-[220px] mx-auto rounded-full border-solid border border-[#e6e6e8] text-[14px] text-black font-bold  bg-whit">
            {Type_off_simcard.map((item: string) => (
              <button
                onClick={() => {
                  setTypeOfSimcard(item);
                  if (item === "دائمی") {
                    if (isFirst === 0) {
                      setPriceOfCharge(50000);
                      setchargePrice(50000);
                    }

                    setisFirst((prev) => prev + 1);
                    setchcked(false);
                    setTypeOfCharge("معمولی");
                  }
                }}
                className={`grow py-[7px] px-[6px]  rounded-full border-solid ${
                  TypeOfSimcard === item && "bg-[#ffcc00]"
                }`}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="flex mt-[25px] mb-[45px] gap-x-[10px] ml-16 justify-center">
          <h1 className="text-[14px] text-[#212529]">شارژ شگفت انگیز</h1>
          <label className="inline-flex items-center cursor-pointer">
            <input
              disabled={TypeOfSimcard === "دائمی"}
              type="checkbox"
              checked={checked}
              onChange={handleToggle}
              value=""
              className="sr-only peer"
            ></input>
            <div className="relative peer-disabled:cursor-default  peer-disabled:bg-gray-400 w-11 h-6 bg-[#888888] peer-focus:outline-none   rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-100 after:border after:rounded-full after:h-5 after:w-5 after:transition-all   peer-checked:bg-green-700"></div>
          </label>
        </div>

        <div className="mb-[30px] relative flex flex-col self-stretch">
          <input
            ref={inputRef}
            onChange={(e: any) => setPhoneNumber(Number(e.target.value))}
            onFocus={() => setisfocused((prev) => !prev)}
            className={`text-right bg-[#efeff4] font-[14px]  rounded-[30px] outline-none px-[15px]  text-[18px] h-[55px]  pt-[15px] border-solid border ${
              isPhonefocused && !phoneError
                ? "border-blue-500"
                : phoneError
                ? "border-red-500"
                : ""
            }
            `}
            type="number"
          />
          <span
            className={`text-[16px] ${
              isPhonefocused || PhoneNumber
                ? "text-[9px] z-10 top-3 right-4"
                : ""
            } absolute right-2 text-[#999]  duration-200 top-1/2 -translate-y-[50%]`}
          >
            شماره تلفن همراه
          </span>
        </div>
        <div className="self-stretch mb-[5px] ">
          <h1 className="text-[14px] text-[#8b8b8d] text-right mb-[20px]">
            مبلغ شارژ
          </h1>
          <div className=" grid grid-cols-3">
            {price_charge.map((item) => {
              return (
                <button
                  key={item.price}
                  disabled={
                    checked &&
                    (item.price === 10000 ||
                      item.price === 20000 ||
                      item.price === "سایر مبالغ")
                  }
                  onClick={() => {
                    if (typeof item.price !== "string") {
                      setPriceOfCharge(item.price);
                      setchargePrice(item.price);
                    } else {
                      setPriceOfCharge(PriceOfCharge);
                      setchargePrice(item.price);
                      /*setSelectCharge(chargePrice);*/
                    }
                  }}
                  className={`bg-[#f0eff5] gap-x-1 disabled:text-gray-400  justify-center font-pnum text-center  flex border-none text-[15px] outline-none w-[95%] mx-auto rounded-[25px] mb-[10px] py-[5px] ${
                    item.price === chargePrice && "bg-[#ffcc00]"
                  }`}
                >
                  <span
                    className={`font-normal font-vazir text-[13px] ${
                      item.price === "سایر مبالغ" && "hidden"
                    }`}
                  >
                    ریال
                  </span>
                  <span
                    className={` ${
                      typeof item.price !== "string"
                        ? "font-bold "
                        : "font-normal font-vazir"
                    }`}
                  >
                    {item.price.toLocaleString()}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        {typeof chargePrice === "string" && (
          <div className="relative flex flex-col self-stretch">
            <input
              onChange={(e) => {
                setSelectCharge(Number(e.target.value));
                setPriceOfCharge(Number(e.target.value));
              }}
              className='text-right font-bold bg-[#efeff4] rounded-[30px] outline-none px-[15px]  text-[18px] h-[55px] pt-[15px] border-solid border border-[#ddd] 
                isemailfocused && "border-blue-500'
              type="number"
            />
            <span
              className="
                 text-[10px] top-3 z-10 right-4
              } absolute right-2 text-[#999] duration-100 top-1/2 -translate-y-[50%]
               "
            >
              مبلغ شارژ به ریال
            </span>
            <div
              className={`text-[12px] font-normal self-center mt-[5px] rounded-[25px] py-[3px] px-[11px] ${
                PriceError ? "text-[#721c24] bg-[#f8d7da]" : "text-[#8b8b8d]"
              }`}
            >
              {TypeOfSimcard === "دائمی" ? (
                <span>حداقل ۱۰,۰۰۰ و حداکثر ۲,۰۰۰,۰۰۰ ریال</span>
              ) : (
                <span>حداقل ۱۰,۰۰۰ و حداکثر ۹۰۰,۰۰۰ ریال</span>
              )}
            </div>
          </div>
        )}
        <div className="relative mt-[35px] flex flex-col self-stretch">
          <input
            value={email}
            ref={inEmailputRef}
            onChange={(e: any) => setemail(e.target.value)}
            onFocus={() => setisEmailfocused((prev) => !prev)}
            className={`text-right bg-[#efeff4] rounded-[30px]  outline-none px-[15px]  text-[18px] h-[55px]   pt-[15px] border-solid border border-[#ddd] ${
              isemailfocused && "border-blue-500"
            }`}
            type="text"
          />
          <span
            className={`text-[16px] ${
              isemailfocused && "text-[9px] z-10 top-3 right-4"
            } absolute right-2 text-[#999] duration-200 top-1/2 -translate-y-[50%]`}
          >
            ایمیل (اختیاری)
          </span>
        </div>

        <div className="hidden self-stretch md:flex flex-col ">
          <SubmitButton></SubmitButton>
        </div>
      </div>
    </div>
  );
}
