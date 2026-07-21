import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Blog is hosted on Substack, not self-hosted. Redirect the (still-present)
  // local blog routes there at the routing layer so they never render MDX.
  // Temporary (307) redirects since the local blog infra is kept on disk.
  async redirects() {
    return [
      { source: '/blog', destination: 'https://substack.com/@jeannieshe', permanent: false },
      { source: '/blog/:slug*', destination: 'https://substack.com/@jeannieshe', permanent: false },
    ];
  },
};

export default nextConfig;

// Enables Cloudflare bindings (getCloudflareContext) during `next dev`.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
