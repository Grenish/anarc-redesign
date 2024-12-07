export default function DifferentSection() {
  return (
    <div className="w-full h-screen background-1 relative">
      <div className="p-6 sm:p-10 md:p-20 pt-20 sm:pt-28 md:pt-32">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold capitalize w-full sm:w-3/4 md:w-1/2 text-gray-300">
          Designed to be different
        </h1>
        <p className="w-full sm:w-2/3 md:w-1/3 mt-4 sm:mt-3 md:mt-2 text-gray-300/70 font-semibold text-sm sm:text-base md:text-lg">
          Anarc's unique octagonal dial is crafted in stainless steel, paired
          with a liquid silicone strap to bring together style and comfort like
          never before.
        </p>

        <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 text-sm sm:text-base md:text-lg text-yellow-300/80 space-y-2">
          <p>Designed in London</p>
          <p>Functional Crown with haptics</p>
          <p>Forged in Stainless Steel</p>
        </div>
      </div>
    </div>
  );
}
