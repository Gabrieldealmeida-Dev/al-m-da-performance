import { createFileRoute } from "@tanstack/react-router";
import { absolutePublicUrl } from "@/lib/site-seo";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () => {
        const sitemapUrl = absolutePublicUrl("/sitemap.xml");
        const body = [
          "User-agent: *",
          "Allow: /",
          ...(sitemapUrl ? ["", `Sitemap: ${sitemapUrl}`] : []),
          "",
        ].join("\n");

        return new Response(body, {
          headers: { "content-type": "text/plain; charset=utf-8" },
        });
      },
    },
  },
});