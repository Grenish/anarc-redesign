import Image from "next/image";

export default function BuyNow() {
  return (
    <div className="w-full p-5 flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-4xl font-semibold text-center">
        Ready to Bring CHAOS?
      </h2>
      <p className="text-sm mt-2 w-11/12 md:w-1/2 text-center">
        Choose your style with the ANARC Watch, available in three stunning
        color variants. Which one suits you best for the CHAOS?
      </p>
      <Image
        src={"/anarc83.png"}
        alt="Anarc Watch"
        width={600}
        height={600}
        className="mt-5 md:mt-10 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px]"
      />
      <div className="w-full sm:w-2/3 md:w-1/3 flex justify-around items-center mt-5">
        {[
          { color: "#3C3835", label: "Dark Brilliance" },
          { color: "#E6E3DD", label: "Frost Blaze" },
          { color: "#536059", label: "Earthy Urban" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <span
              className="w-[10px] h-[10px] p-3 rounded-full border-2"
              style={{ backgroundColor: item.color }}
            ></span>
            <h2 className="text-xs mt-2">{item.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
