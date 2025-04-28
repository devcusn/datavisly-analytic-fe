import Image from "next/image";
import Logo from "@/assets/img/logo.png";

const Header = () => {
  return (
    <div className="w-9/12 flex items-center mx-auto justify-between p-6 text-white">
      <div className="flex items-center text-2xl font-bold cursor-pointer">
        <Image width={60} src={Logo} alt="logo" />
        Datavisly
      </div>
      <div className="flex gap-4 ">
        <button className="px-4 py-2 text-sm cursor-pointer font-semibold rounded-lg hover:text-orange-600">
          Login
        </button>
        <button className="px-8 py-2 text-sm text-white font-semibold  bg-[#ff6100] rounded hover:bg-orange-600 cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
