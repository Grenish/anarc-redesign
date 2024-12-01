import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center mt-20">
        <Image src={"/anarc1.svg"} alt="Anarc Watch" width={70} height={70} />
        <h2 className="text-2xl font-bold my-1 pointer-events-none select-none">
          Anarc Watch
        </h2>
        <p className="text-sm pointer-events-none select-none">
          By Tech Burner
        </p>
        <p className="col text-2xl mt-2 pointer-events-none select-none">
          “Chaos is Creativity”
        </p>
      </div>
      <Image
        src="/anarc56.png"
        alt="Anarc Watch"
        width={1000}
        height={1000}
        className="w-1/3 object-cover select-none"
      />
      <h2 className="bg-accent p-2 text-white -mt-12 mb-10 text-xl font-semibold pointer-events-none select-none">
        Powerful. Accurate. Unique.
      </h2>
    </div>
  );
}
