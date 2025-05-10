import Footer from "@/app/(auth-pages)/_components/Footer";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/img/logo.svg";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<Readonly<LayoutProps>> = ({
  children,
}) => {
  return (
    <div className=" bg-gray-900 min-h-screen ">
      <div className="max-w-6xl flex items-center mx-auto justify-between py-6 text-white">
        <Link href="/">
          <div className="flex items-center text-2xl font-bold cursor-pointer">
            <Image height={35} src={Logo} alt="logo" />
            <span className="text-lg text-gray-400 ml-2">CSV Viewer</span>
          </div>
        </Link>
      </div>
      <div className="max-w-6xl mx-auto  min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
