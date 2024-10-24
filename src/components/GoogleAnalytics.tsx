import Script from "next/script";

export const isProduction = process.env.NODE_ENV === "production";

// INFO: https://stackoverflow.com/questions/60411351/how-to-use-google-analytics-with-next-js-app
const GoogleAnalytics = () => {
  return (
    <>
      {isProduction && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          {/* Initialize GA4 */}
          <Script id="ga4-init" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          gtag('js', new Date());
          
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true,
          });
        `}
          </Script>
        </>
      )}
    </>
  );
};

export default GoogleAnalytics;
