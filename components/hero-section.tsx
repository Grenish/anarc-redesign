import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Text and Logo Section */}
      <div className="flex flex-col items-center justify-center mt-10 sm:mt-16 md:mt-20 text-center">
        <Image src={"/anarc1.svg"} alt="Anarc Watch" width={70} height={70} />
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold my-1 pointer-events-none select-none">
          Anarc Watch
        </h2>
        <p className="text-xs sm:text-sm pointer-events-none select-none">
          By Tech Burner
        </p>
        <p className="text-base sm:text-lg md:text-2xl mt-2 pointer-events-none select-none">
          “Chaos is Creativity”
        </p>
      </div>

      {/* Image Section */}
      <Image
        src="/anarc56.png"
        alt="Anarc Watch"
        width={1000}
        height={1000}
        className="w-2/3 sm:w-1/2 md:w-1/3 object-cover select-none mt-6"
      />

      {/* Tagline Section */}
      <h2 className="bg-accent p-2 text-white -mt-8 sm:-mt-10 md:-mt-12 mb-6 sm:mb-8 md:mb-10 text-lg sm:text-xl md:text-2xl font-semibold pointer-events-none select-none text-center">
        Powerful. Accurate. Unique.
      </h2>
    </div>
  );
}
