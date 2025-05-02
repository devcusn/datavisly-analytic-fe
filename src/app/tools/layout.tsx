import Footer from "@/app/(auth-pages)/_components/Footer";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/img/logo.png";

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
            <Image width={60} src={Logo} alt="logo" />
            Datavisly | CSV Viewer
          </div>
        </Link>
      </div>
      <div className="max-w-6xl mx-auto  h-screen">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
