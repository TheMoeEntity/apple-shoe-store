import  Footer from "./Footer/Footer";
import { useRouter } from "next/router";
import Header from './Header/Header'
export const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="container">
      <Header />
      {children}
      {router.pathname == "/login" || router.pathname == "/signup" ? (<></>): (
        <>
          <Footer />
        
        </>
      )}
    </div>
  );
};
