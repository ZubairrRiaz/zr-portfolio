import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <div className="font-[family-name:var(--font-geist-sans)]">
        <ul className="flex justify-end content-center gap-2 bg-black p-4 text-white text-xs md:gap-8 md:text-lg pt-7">
          <Image
            src="/mylogo.jpg"
            alt="logo"
            height={0}
            width={80}
            className="md:absolute md:left-3 md:top-2 absolute -left-2 top-3 md:h-[120px] md:w-32"
          />
          <li className="border-2 border-white p-2 px-3 rounded-xl md:px-4 hover:bg-[#fdc500] hover:border-[#fdc500] hover:scale-110 transition-all">
            <Link href="/">Home</Link>
          </li>
          <li className="border-2 border-white p-2 px-3.5 rounded-xl md:px-5 hover:bg-[#fdc500] hover:border-[#fdc500] hover:scale-110 transition-all">
            <Link href="#Skills">Skills</Link>
          </li>
          <li className="border-2 border-white p-2 rounded-xl hover:bg-[#fdc500] hover:border-[#fdc500] hover:scale-110 transition-all">
            <Link href="#Projects">Projects</Link>
          </li>
          <li className="border-2 border-white p-2 rounded-xl hover:bg-[#fdc500] hover:border-[#fdc500] hover:scale-110 transition-all">
            <Link href="">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
