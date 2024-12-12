import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-5 bg-primary text-white px-10 flex items-center justify-between">
      <div className="">
        <Image
          src={"/anarc1-5.svg"}
          alt="Anarc Loco"
          width={200}
          height={200}
          className="text-white"
        />
        <h2 className="text-2xl tracking-[5px] mt-2">ANARC</h2>
        <p className="text-xs">
          Copyright &copy; 2024 Layers. All rights reserved.
        </p>
      </div>
      <div className="flex items-center justify-between w-1/3">
        <ul className="text-xl mt-2">
          <li className="py-1">ANARC Watch</li>
          <li className="py-1">Skins</li>
          <li className="py-1">Customer Help Center</li>
          <li className="py-1">Privacy Policy</li>
        </ul>
        <ul className="text-xl mt-2">
          <li className="py-1">Our Story</li>
          <li className="py-1">ANARC Strap</li>
          <li className="py-1">Get in touch</li>
          <li className="py-1">Sales Policy</li>
        </ul>
      </div>
    </footer>
  );
}
