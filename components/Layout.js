import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"
import { Nav } from "./Nav/Nav"

export const Layout = ({children}) => {
  return (
        <div className='container'>
            <Header />
                {children}
            <Footer />
            <Nav />
        </div>
  )
}
