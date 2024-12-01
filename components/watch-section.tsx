import Image from "next/image";

export default function WatchSection() {
  return (
    <div className="bg-secondary flex items-center justify-between w-full">
      <div className="w-1/2 flex flex-col items-center">
        <div className="ml-32">
          <h2 className="text-4xl capitalize font-black">Designed in london</h2>
          <h2 className="text-4xl capitalize font-black">Made for india</h2>
          <div className="w-full mt-2">
            <p className="text-balance text-gray-600">
              Beauty and geometry come together to create Anarc's unique
              octagonal dial.
            </p>
          </div>
        </div>
      </div>
      <Image
        src={"/anarc8.jpeg"}
        alt="Anarc Watch"
        width={1000}
        height={1000}
        className="w-1/2"
      />
    </div>
  );
}
