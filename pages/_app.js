import "../styles/globals.css";
import { Layout } from "../components/Layout";
import { SnackbarProvider } from "notistack";
import { StoreProvider } from "../helpers/Context/Store";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <SnackbarProvider>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </SnackbarProvider>
    </Layout>
  );
}

export default MyApp;
