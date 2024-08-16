/// this is componet is for the message that is located at bottom-right of the page//
export default function Message() {
  return (
    <div className="w-[48px] z-80 shadow-custom-negative flex justify-center items-center h-[48px] fixed right-4 bottom-6 rounded-[15px] bg-[#fff]">
      <img
        alt="Kis"
        className="w-[32px] h-[27px]"
        src={"https://ichat.mtnirancell.ir/static/images/logo.svg"}
      ></img>
      <h1 className="h-2 w-2 rounded-full bg-red-600 text-red-600 absolute top-2 right-2"></h1>
    </div>
  );
}
