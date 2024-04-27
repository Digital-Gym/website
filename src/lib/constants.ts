export const siteURL = new URL(
  process.env.NEXT_PUBLIC_SITE_URL as string | URL || 'http://localhost:3000'
);

export const siteOrigin = siteURL.origin;
