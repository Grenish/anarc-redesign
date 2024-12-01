import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Image src={"/anarc1.svg"} alt="Anarc Watch" width={100} height={100} />
      </nav>
    </header>
  );
}
