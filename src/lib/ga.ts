// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  // @ts-ignore
  if (typeof window?.gtag !== "undefined") {
    // @ts-ignore
    window?.gtag(
      "config",
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string,
      {
        page_path: url,
        anonymize_ip: true,
      }
    );
  }
};

// Log specific events
export const event = ({ action, category, label, value }: any) => {
  // @ts-ignore
  if (typeof window?.gtag !== "undefined") {
    // @ts-ignore
    window?.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
