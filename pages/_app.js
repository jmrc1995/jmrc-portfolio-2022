import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className=" h-screen bg-darkGrey dark:bg-white">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
