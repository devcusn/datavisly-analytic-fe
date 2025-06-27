import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Providers from "@/providers/providers";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<Readonly<LayoutProps>> = ({
  children,
}) => {
  return (
    <Providers>
      <div className="bg-gray-900 min-h-screen">
        <Header />
        <div className="min-h-[calc(100vh-250px)]">{children}</div>
        <Footer />
      </div>
    </Providers>
  );
};
export default Layout;
