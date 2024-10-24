"use client";
import * as gtag from "@/lib/ga";
import { usePathname, useSearchParams } from "next/navigation";
import { GoogleTagManager } from "@next/third-parties/google";
import { useEffect } from "react";

// INFO: https://stackoverflow.com/questions/60411351/how-to-use-google-analytics-with-next-js-app
const GoogleAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ?? "");

    gtag.pageview(url);
  }, [pathname, searchParams]);

  return (
    <>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID ?? ""} />
    </>
  );
};

export default GoogleAnalytics;
