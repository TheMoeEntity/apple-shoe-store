import "../styles/globals.css";
import { Layout } from "../components/Layout";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { store, persistor } from "../helpers/Redux/store";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <SnackbarProvider
            anchorOrigin={{ horizontal: "left", vertical: "top" }}
          >
            <Component {...pageProps} />
          </SnackbarProvider>
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
