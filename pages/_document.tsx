/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="../favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Welcome to NES Solar. Explore our innovative solar energy solutions and see how we can help you harness the power of the sun. Let's connect and discuss your sustainable energy needs!"
        />
        {/* meta Image add */}
        <meta
          property="og:image"
          content="/assets/nes-solar-header-logo-35420220703.webp"
        />
        <meta
          name="image"
          content="/assets/nes-solar-header-logo-35420220703.webp"
        />
        <meta
          name="keywords"
          content="solar energy, solar solutions, renewable energy, solar panels, clean energy, sustainable energy, solar power systems, green energy, solar technology, energy efficiency"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
          rel="preload"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="preload"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/tsparticles@1.9.2/dist/tsparticles.min.js"
          integrity="sha256-5kED68Spy7K2CEbfu4CjV92DmZR5ZQFUoIR5qmPzZWg="
          crossOrigin="anonymous"
          rel="preload"
          defer
        ></script>
        <script
          defer
          rel="preload"
          src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
        ></script>
        <script
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/react/16.6.3/umd/react.production.min.js"
        ></script>
        <script
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.6.3/umd/react-dom.production.min.js"
        ></script>
        <script defer>
          <script
            rel="preload"
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-S67YVP050G"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-S67YVP050G');`,
            }}
          ></script>
          <script>
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:5077183,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
              }}
            ></script>
          </script>
          <link
            rel="preload"
            href="https://unpkg.com/swiper/swiper-bundle.min.css"
          />
          <script
            src="https://unpkg.com/swiper/swiper-bundle.min.js"
            rel="preload"
          ></script>
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <GoogleTagManager gtmId="G-S67YVP050G" />
        <GoogleAnalytics gaId="G-S67YVP050G" />
        <script src="../sample.js"></script>
        <script
          src="https://cdn.jsdelivr.net/npm/tsparticles@1.18.3/dist/tsparticles.min.js"
          rel="preload"
        ></script>
      </body>
    </Html>
  );
}
