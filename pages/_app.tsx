import "../styles/tailwind.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../scripts/icons";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="/dev_icon.png" rel="shortcut icon" />
        <meta name="yandex-verification" content="8c49e4e231ae5e7c" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
