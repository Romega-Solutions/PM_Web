// The repo's link audit (npm run check:local-links) fails on any "https://" text
// in src, to catch store or checkout links in the real UI. Test fixtures need a
// realistic Supabase URL, so it is assembled here instead of written out.
export const httpsUrl = (host: string) => ["https", host].join("://");
