import Image from "next/image";
import Logo from "@/assets/img/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="max-w-6xl flex items-center mx-auto justify-between py-6 text-white">
      <Link href="/login">
        <div className="flex items-center text-2xl font-bold cursor-pointer">
          <Image width={60} src={Logo} alt="logo" />
          Datavisly
        </div>
      </Link>

      <div className="flex gap-4 ">
        <Link
          className="px-8 py-2 text-sm text-white font-semibold   rounded hover:bg-orange-600 cursor-pointer"
          href="/sign-up"
        >
          Halil
        </Link>
      </div>
    </div>
  );
};

export default Header;
