import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Nav } from "./Nav/Nav";
import { useRouter } from "next/router";

export const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="container">
      <Header />
      {children}
      {router.pathname == "/login" || router.pathname == "/signup" ? (<></>): (
        <>
          <Footer />
          <Nav />
        </>
      )}
    </div>
  );
};
