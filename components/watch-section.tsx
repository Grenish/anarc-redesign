import Image from "next/image";

export default function WatchSection() {
  return (
    <div className="bg-secondary flex flex-col md:flex-row items-center justify-between w-full">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-4 pt-3 sm:pt-2 md:px-0">
        <div className="md:ml-16 lg:ml-32 text-center md:text-left max-w-xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl capitalize font-black">
            Designed in london
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl capitalize font-black mt-2">
            Made for india
          </h2>
          <div className="w-full mt-4">
            <p className="text-balance text-gray-600 text-base md:text-lg">
              Beauty and geometry come together to create Anarc's unique
              octagonal dial.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <Image
          src={"/anarc8.jpeg"}
          alt="Anarc Watch"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}