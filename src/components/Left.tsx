import { useStore } from "../store/useStore";
import SubmitButton from "./SubmitButton";
export default function Left() {
  ///zustand configuration ////
  const TypeOfCharge = useStore((state) => state.TypeOfCharge);
  const TypeOfSimcard = useStore((state) => state.TypeOfSimcard);
  const email = useStore((state) => state.email);
  const PhoneNumber = useStore((state) => state.PhoneNumber);
  const PriceOfCharge = useStore((state) => state.PriceOfCharge);
  return (
    <div
      className="md:self-start bg-white mt-[35px] md:mt-0
md:basis-[42%]"
    >
      <div className="[&>div]:md:mr-[25px] md:border-none border-solid border border-[#ffd733] md:self-start [&>div]:text-right px-[15px] rounded-md text-right md:basis-[42%] pt-3 pb-6 flex flex-col gap-y-2 bg-[#fff5cc] md:bg-[#f0eff5]">
        <h1 className="text-black text-center rounded-[4px] py-[15px] md:block  hidden text-[16px] font-bold bg-white">
          فاکتور نهایی
        </h1>
        <div className="flex flex-row-reverse justify-between md:flex-col mt-4 gap-y-2  text-right">
          <div className="text-[13px] text-[#939298]">نوع سیم‌کارت</div>
          <div className="text-black font-bold text-[16px]">
            {TypeOfSimcard}
          </div>
        </div>
        <div className="flex gap-y-3 flex-row-reverse justify-between md:flex-col">
          <div className="text-[14px] text-[#939298]">مستقیم به شماره</div>
          <div className="font-bold">{PhoneNumber || "---"}</div>
        </div>
        <div className="flex gap-y-3 flex-row-reverse justify-between md:flex-col mt-4 text-[14px] text-[#939298]">
          <h1 className="md:block hidden">
            مبلغ شارژ (با احتساب مالیات بر ارزش افزوده)
          </h1>
          <h1 className="md:hidden">مبلغ شارژ (+مالیات)</h1>
          <div className="flex justify-end gap-x-1 text-black font-bold">
            <span>ریال</span>
            <span className="font-pnum ">{PriceOfCharge.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex justify-between flex-row-reverse gap-y-2  md:flex-col mt-4 text-[14px] text-[#939298]">
          <h1 className="texgt-[14px]">نوع شارژ</h1>
          <h1 className="text-black font-bold text-[16px]">{TypeOfCharge}</h1>
        </div>
        <div className="flex justify-between flex-row-reverse md:flex-col gap-y-1 md:gap-y-2 mt-4 text-[14px] text-[#939298]">
          <h1 className="texgt-[14px]">ایمیل</h1>
          <h1 className="text-black font-bold text-[16px]">
            {email || "----"}
          </h1>
        </div>
        <div className="flex justify-between flex-row-reverse md:flex-col gap-y-1 md:gap-y-2 mt-4 text-[14px] text-[#939298]">
          <h1 className="texgt-[14px]">نام بانک</h1>
          <h1 className="text-black font-bold text-[16px]">----</h1>
        </div>
      </div>
      <div className="self-stretch md:hidden flex flex-col">
        <SubmitButton></SubmitButton>
      </div>
    </div>
  );
}
