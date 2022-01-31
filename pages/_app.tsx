import "../styles/globals.scss";
import { useEffect } from "react";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined
      ? require("../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css")
      : null;
    typeof document !== undefined
      ? require("../node_modules/bootstrap/dist/css/bootstrap-grid.min.css")
      : null;
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
