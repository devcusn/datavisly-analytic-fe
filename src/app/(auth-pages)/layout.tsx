import Footer from "./_components/Footer";
import Header from "./_components/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<Readonly<LayoutProps>> = ({
  children,
}) => {
  return (
    <div className="bg-gray-900 min-h-screen ">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
