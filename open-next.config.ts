import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Minimal config: no incremental (ISR) cache override, since this site's
// pages are static or edge-rendered on demand. Add an R2 incremental cache
// here later if you introduce ISR / on-demand revalidation.
export default defineCloudflareConfig();
