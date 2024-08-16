import Left from "./Left";
import Right from "./Right";
import Message from "./Message";

export default function Charge() {
  return (
    <div className="flex md:justify-center mt-16 rounded-[15px] px-8 pt-8 pb-12 shadow-lg lg:my-20 bg-white container mx-auto md:max-w-[930px] max-w-full md:flex-row flex-col-reverse gap-x-8">
      <Message></Message>
      <Left></Left>

      <Right></Right>
    </div>
  );
}
