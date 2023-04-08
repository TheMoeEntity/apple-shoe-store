import "../styles/globals.css";
import { Layout } from "../components/Layout";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import store from "../helpers/Redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <SnackbarProvider anchorOrigin={{horizontal:'left',vertical:'top'}}>
          <Component {...pageProps} />
        </SnackbarProvider>
      </Layout>
    </Provider>
  );
}

export default MyApp;
