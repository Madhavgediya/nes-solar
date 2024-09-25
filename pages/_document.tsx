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
        <meta name="title" content="NES Solar" />
        <meta
          name="keywords"
          content="solar energy, solar solutions, renewable energy, solar panels, clean energy, sustainable energy, solar power systems, green energy, solar technology, energy efficiency"
        />
        <meta
          name="description"
          content="Welcome to NES Solar. Explore our innovative solar energy solutions and see how we can help you harness the power of the sun. Let's connect and discuss your sustainable energy needs!"
        />
        {/* Meta image */}
        <meta name="image" content="/assets/nessolar_thum.png" />
        <meta name="thumbnail" content="/assets/nessolar_thum.png" />
        <meta property="og:image" content="/assets/nessolar_thum.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />

        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
          rel="preload"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="preload"
        />

        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-S67YVP050G`}
        ></script>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S67YVP050G');
            `,
          }}
        /> */}

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K9FTBJKT');
            `,
          }}
        />

        {/* External Scripts */}
        <script
          src="https://cdn.jsdelivr.net/npm/tsparticles@1.9.2/dist/tsparticles.min.js"
          integrity="sha256-5kED68Spy7K2CEbfu4CjV92DmZR5ZQFUoIR5qmPzZWg="
          crossOrigin="anonymous"
          defer
        ></script>
        <script
          rel="preload"
          defer
          src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
        ></script>
        <script
          rel="preload"
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/react/16.6.3/umd/react.production.min.js"
        ></script>
        <script
          rel="preload"
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.6.3/umd/react-dom.production.min.js"
        ></script>
      </Head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K9FTBJKT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Main />
        <NextScript />

        <GoogleTagManager gtmId="GTM-K9FTBJKT" />
        <GoogleAnalytics gaId="G-S67YVP050G" />

        {/* Additional scripts */}
        <script src="../sample.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/tsparticles@1.18.3/dist/tsparticles.min.js"></script>
      </body>
    </Html>
  );
}

// Old Code Google Analysis
// /* eslint-disable @next/next/no-sync-scripts */
// import { Html, Head, Main, NextScript } from "next/document";
// import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
// import Script from "next/script";

// export default function Document() {
//   return (
//     <Html>
//       <Head>
//         <link rel="icon" href="../favicon.ico" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta
//           name="keywords"
//           content="solar energy, solar solutions, renewable energy, solar panels, clean energy, sustainable energy, solar power systems, green energy, solar technology, energy efficiency"
//         />
//         <meta
//           name="description"
//           content="Welcome to NES Solar. Explore our innovative solar energy solutions and see how we can help you harness the power of the sun. Let's connect and discuss your sustainable energy needs!"
//         />
//         {/* meta Image add */}
//         <meta name="image" content="/assets/nessolar_thum.png" />
//         <meta name="thumbnail" content="/assets/nessolar_thum.png" />
//         <meta property="og:image" content="/assets/nessolar_thum.png" />
//         <meta property="og:image:width" content="1200" />
//         <meta property="og:image:height" content="627" />

//         <link
//           href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
//           rel="preload"
//         />
//         <link
//           href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
//           rel="preload"
//         />
//         <script
//           src="https://cdn.jsdelivr.net/npm/tsparticles@1.9.2/dist/tsparticles.min.js"
//           integrity="sha256-5kED68Spy7K2CEbfu4CjV92DmZR5ZQFUoIR5qmPzZWg="
//           crossOrigin="anonymous"
//           defer
//         ></script>
//         <script
//           rel="preload"
//           defer
//           src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
//         ></script>
//         <script
//           rel="preload"
//           defer
//           src="https://cdnjs.cloudflare.com/ajax/libs/react/16.6.3/umd/react.production.min.js"
//         ></script>
//         <script
//           rel="preload"
//           defer
//           src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.6.3/umd/react-dom.production.min.js"
//         ></script>
//         {/* <script defer>
//           <script
//             async
//             src="https://www.googletagmanager.com/gtag/js?id=G-S67YVP050G"
//           ></script>
//           <script
//             dangerouslySetInnerHTML={{
//               __html: `window.dataLayer = window.dataLayer || [];
//                       function gtag(){dataLayer.push(arguments);}
//                       gtag('js', new Date());
//                       gtag('config', 'G-S67YVP050G');`,
//             }}
//           ></script>
//           <script>
//             <script
//               dangerouslySetInnerHTML={{
//                 __html: `(function(h,o,t,j,a,r){
//                   h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
//                   h._hjSettings={hjid:5077183,hjsv:6};
//                   a=o.getElementsByTagName('head')[0];
//                   r=o.createElement('script');r.async=1;
//                   r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
//                   a.appendChild(r);
//               })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
//               }}
//             ></script>
//           </script>
//           <link
//             href="https://unpkg.com/swiper/swiper-bundle.min.css"
//             rel="preload"
//           />
//           <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
//         </script> */}
//         <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-K9FTBJKT');</script>
// <!-- End Google Tag Manager -->
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//         <GoogleTagManager gtmId="G-S67YVP050G" />
//         <GoogleAnalytics gaId="G-S67YVP050G" />
//         <script src="../sample.js"></script>
//         <script src="https://cdn.jsdelivr.net/npm/tsparticles@1.18.3/dist/tsparticles.min.js"></script>
//       </body>
//     </Html>
//   );
// }
