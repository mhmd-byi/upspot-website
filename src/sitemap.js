import React from "react";
import { Helmet } from "react-helmet";

const Sitemap = () => {
  const baseUrl = "https://upspot.in";
  const paths = [
    "/https://upspot.in/about",
    "/https://upspot.in/service",
    "/https://upspot.in/service/software-web-development",
    "/https://upspot.in/service/social-media-optimization",
    "/https://upspot.in/service/seo-services",
    "/https://upspot.in/service/graphics-designs",
    "/https://upspot.in/service/marketplace-management",
    "/https://upspot.in/service/content-marketing",
    "/https://upspot.in/service/paid-marketing",
    "/https://upspot.in/service/editing",
    "/https://upspot.in/careers",
    "/https://upspot.in/blogs",
    "/https://upspot.in/blogs/ai-in-marketing",
    "/https://upspot.in/blogs/magician-of-web-development-services",
  ];

  const generateSitemap = () => {
    return paths.map((path) => `${baseUrl}${path}`).join("\n");
  };

  return (
    <Helmet>
      <meta name="description" content="Sitemap for My Website" />
      <meta name="robots" content="noindex, nofollow" />
      <link
        rel="sitemap"
        type="application/xml"
        title="Sitemap"
        href="./sitemap.xml"
      />
      <script type="application/ld+json">{generateSitemap()}</script>
    </Helmet>
  );
};

export default Sitemap;
