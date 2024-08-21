import React, { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/Scroll-to-top";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-4E9XJ16RTJ', {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>RantAI</title>
        <link rel="icon" href="/img/favicon-rantai.ico" />
      </Head>

      {/* Google Tag Manager - Global site tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-4E9XJ16RTJ"
      />
      <Script
        strategy="afterInteractive"
        id="google-analytics"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4E9XJ16RTJ');
        `}
      </Script>

      <Cursor />
      <LoadingScreen />
      <ScrollToTop />
      <Component {...pageProps} />

      <Script
        strategy="beforeInteractive"
        id="wow"
        src="/js/wow.min.js"
      />
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      />
      <Script
        id="simpleParallax"
        src="/js/simpleParallax.min.js"
      />
      <Script
        strategy="beforeInteractive"
        id="isotope"
        src="/js/isotope.pkgd.min.js"
      />
      <Script
        strategy="lazyOnload"
        id="initWow"
        src="/js/initWow.js"
      />
    </>
  );
}

export default MyApp;
