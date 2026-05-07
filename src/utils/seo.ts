export interface PageSEOOptions {
  title: string;
  description: string;
  path: string;
}

const BASE_URL = 'https://cloudsurge.uk';

const upsertMetaTag = (
  selector: string,
  create: () => HTMLMetaElement,
  content: string,
) => {
  let tag = document.querySelector(selector) as HTMLMetaElement | null;
  if (!tag) {
    tag = create();
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const upsertCanonicalTag = (href: string) => {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', href);
};

export const setPageSEO = ({ title, description, path }: PageSEOOptions) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${BASE_URL}${normalizedPath}`;

  document.title = title;

  upsertMetaTag(
    'meta[name="description"]',
    () => {
      const tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      return tag;
    },
    description,
  );

  upsertMetaTag(
    'meta[property="og:url"]',
    () => {
      const tag = document.createElement('meta');
      tag.setAttribute('property', 'og:url');
      return tag;
    },
    canonicalUrl,
  );

  upsertMetaTag(
    'meta[property="twitter:url"]',
    () => {
      const tag = document.createElement('meta');
      tag.setAttribute('property', 'twitter:url');
      return tag;
    },
    canonicalUrl,
  );

  upsertCanonicalTag(canonicalUrl);
};
