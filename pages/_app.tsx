import { useEffect } from "react";
import NextApp, { AppContext, AppProps } from "next/app";
import "../styles/globals.css";
import { BlindThemeContextWrapper } from "../context/BlindThemeContext";
import { Layout } from "@components";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Toast from "@components/Toast";
import { headerData, footerData } from "@utils/stub";
import { Themes, Fonts, initializeTheme } from "@utils/themeSwitcher";
import { ToastContextWrapper } from "../context/ToastContext";
// @ts-ignore
function App({
  Component,
  pageProps,
  // @ts-ignore
  headerData,
  // @ts-ignore
  footerData,
}: AppProps) {
  useEffect(() => {
    const isMgn = localStorage.getItem("isMgn") === "true";
    const theme = isMgn ? Themes["black-white"] : Themes["default"];
    const font = isMgn ? Fonts["font-A"] : null;
    initializeTheme(theme, font);
  }, []);

  return (
    <BlindThemeContextWrapper>
      <ToastContextWrapper>
        <Toast />
        <Header {...headerData} />
        <div id="fullPageTop" />
        <Layout
          cols="12"
          mdCols="1"
          spacingX="m"
          spacingY="xl"
          className="md:px-32 px-5"
        >
          <Component {...pageProps} />
        </Layout>
        <div id="fullPageBottom" />
        <Footer data={footerData} />
      </ToastContextWrapper>
    </BlindThemeContextWrapper>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  const { router } = appContext;
  const { locale } = router;

  return {
    ...appProps,
    headerData: headerData,
    footerData: footerData,
    locale,
  };
};

export default App;
