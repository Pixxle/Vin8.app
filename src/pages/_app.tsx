import "tailwindcss/tailwind.css";
import "../styles/tailwind.css";

import type { AppProps, AppType } from "next/app";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;