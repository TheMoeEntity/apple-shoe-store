import "../styles/globals.css";
import { Layout } from "../components/Layout";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </Layout>
  );
}

export default MyApp;
