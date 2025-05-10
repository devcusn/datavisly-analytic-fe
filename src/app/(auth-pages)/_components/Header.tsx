import Image from "next/image";
import Logo from "@/assets/img/icon.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className="max-w-6xl flex items-center mx-auto justify-between p-6 text-white">
      <Link href="/">
        <div className="flex items-center text-2xl font-bold cursor-pointer gap-2">
          <Image height={35} src={Logo} alt="logo" />
          Datavisly
        </div>
      </Link>

      <div className="flex gap-4 ">
        <Link
          className="px-4 py-2 text-sm cursor-pointer font-semibold rounded-lg hover:text-orange-600"
          href="/login"
        >
          Login
        </Link>

        <Link
          className="px-8 py-2 text-sm text-white font-semibold  bg-[#ff6100] rounded hover:bg-orange-600 cursor-pointer"
          href="/sign-up"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Header;
