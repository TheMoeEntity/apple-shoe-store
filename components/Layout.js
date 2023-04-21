import  Footer from "./Footer/Footer";
import { useRouter } from "next/router";
import Header from './Header/Header'
import Script from 'next/script'
export const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="container">
      <Header />
      {children}
      {router.pathname == "/login" || router.pathname == "/signup" ? (<></>): (
        <>
        <Footer />
        <Script src="https://kit.fontawesome.com/4ef8c63dd7.js" crossorigin="anonymous"></Script>
        </>
      )}
    </div>
  );
};
