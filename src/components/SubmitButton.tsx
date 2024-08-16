import { useStore } from "../store/useStore";
import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
export default function SubmitButton() {
  ///this is button the is responsible for submitting the data//
  const [loading, setloading] = useState(false);
  const [success, setsuccess] = useState(false);
  const [MessageError, setMessageError] = useState(false);
  ///zustand configuration //

  const TypeOfSimcard = useStore((state) => state.TypeOfSimcard);

  const PhoneNumber = useStore((state) => state.PhoneNumber);

  const PriceOfCharge = useStore((state) => state.PriceOfCharge);
  const setPriceError = useStore((state) => state.setPriceError);

  const setphoneError = useStore((state) => state.setphoneError);

  ///function for submititng ///
  const submit_function = () => {
    setloading(true);

    if (!PhoneNumber) {
      setphoneError(true);
    } else if (
      PhoneNumber.toString().length < 10 ||
      PhoneNumber.toString().length > 10
    ) {
      setphoneError(true);
      setMessageError(true);
    } else if (
      TypeOfSimcard === "دائمی" &&
      (PriceOfCharge < 10000 || PriceOfCharge > 2000000)
    ) {
      setPriceError(true);
    } else if (
      TypeOfSimcard !== "دائمی" &&
      (PriceOfCharge < 10000 || PriceOfCharge > 900000 * 1.1)
    ) {
      setPriceError(true);
    } else {
      setsuccess(true);
      setMessageError(false);
      setPriceError(false);
      setphoneError(false);
    }
    setloading(false);
  };

  return (
    <>
      <button
        onClick={submit_function}
        className="mt-[20px] gap-x-3 flex justify-center items-center hover:bg-[#FFD633] duration-300 font-bold bg-[#ffcc00] text-center py-[10px] px-[15px] rounded-[25px]"
      >
        <h1> انتخاب بانک و پرداخت</h1>
        {loading && (
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white animate-spin dark:text-gray-600 fill-black"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        )}
      </button>
      {MessageError && (
        <span className="text-[14px] py-[3px] px-[11px] rounded-[25px] mt-[5px] bg-[#f8d7da] text-[#721c24] border border-[#f5c6cb] flex justify-end items-center gap-x-1">
          <span>شماره معتبر نمی باشد</span>
          <IoWarningOutline></IoWarningOutline>
        </span>
      )}
      {success && (
        <span className="text-[14px] py-[3px] px-[11px] rounded-[25px] mt-[5px] bg-green-200 text-green-700 border border-green-200 flex justify-end items-center gap-x-1">
          <span>عملیات موفقیت آمیز بود</span>
          <FaRegCheckCircle></FaRegCheckCircle>
        </span>
      )}
    </>
  );
}
