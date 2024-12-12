import Image from "next/image";

export default function BoxSection() {
  return (
    <div className="w-full bg-[#F0F4F7] p-5 flex items-center justify-around">
      <div className="">
        <h1 className="text-3xl font-semibold">In The Box</h1>
        <h2 className="text-xl mt-3">ANARC Smartwatch</h2>
        <h2 className="text-xl mt-1">Charging Cable</h2>
        <h2 className="text-xl mt-1">USB A to type C converter</h2>
        <h2 className="text-xl mt-1">Welcome Card</h2>
      </div>
      <Image src={"/anarc51.png"} alt="Anarc Watch" width={500} height={500} />
    </div>
  );
}
