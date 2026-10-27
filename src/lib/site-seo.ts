const configuredUrl = import.meta.env["VITE_PUBLIC_SITE_URL"]?.trim();

function resolvePublicSiteUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;

  try {
    const url = new URL(value);
    const hostname = url.hostname.toLowerCase();
    if (
      url.protocol !== "https:" ||
      hostname === "localhost" ||
      hostname.endsWith(".localhost") ||
      hostname === "github.dev" ||
      hostname.endsWith(".github.dev")
    ) {
      return undefined;
    }
    return url.origin;
  } catch {
    return undefined;
  }
}

export const publicSiteUrl = resolvePublicSiteUrl(configuredUrl);

export function absolutePublicUrl(path: string): string | undefined {
  return publicSiteUrl ? new URL(path, publicSiteUrl).toString() : undefined;
}