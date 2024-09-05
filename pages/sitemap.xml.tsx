import { GetServerSideProps } from "next";
import fs from "fs";
import path from "path";

export default function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const protocol = ctx.req.headers["x-forwarded-proto"] || "http";
  const host = ctx.req.headers.host;
  const domain = `${protocol}://${host}`;

  // Fetch all static pages and dynamic pages (like blog posts)
  const staticPages = await getAllStaticPages();
  const dynamicPages = await getBlogPosts({ order: "recent" });

  // Combine both static and dynamic pages to generate sitemap
  const xml = generateSitemap(domain, staticPages, dynamicPages);

  // Send the XML response
  ctx.res.setHeader("Content-Type", "text/xml");
  ctx.res.write(xml.trim());
  ctx.res.end();

  return {
    props: {},
  };
};

// Function to get all static pages by scanning the `pages` directory
async function getAllStaticPages() {
  const pagesDir = path.join(process.cwd(), "pages");
  const ignorePatterns = [
    "_app",
    "_document",
    "sitemap",
    "api", // Ignore API directory
    ".css", // Ignore CSS files
  ];

  let staticPages: string[] = [];

  // Recursively go through the pages directory
  const getPages = (dir: string) => {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);

      // Skip directories/files we don't want in the sitemap
      if (fs.statSync(filePath).isDirectory() && file === "api") {
        return; // Skip the `api` directory
      }

      if (fs.statSync(filePath).isDirectory()) {
        // Recursively fetch pages in subdirectories
        getPages(filePath);
      } else {
        const relativePath = path.relative(pagesDir, filePath);
        const pagePath = `/${relativePath
          .replace(/\.tsx|\.js/, "")
          .replace(/index/, "")}`;

        // Only include valid pages, and ignore certain files
        if (!ignorePatterns.some((pattern) => file.includes(pattern))) {
          staticPages.push(pagePath);
        }
      }
    });
  };

  getPages(pagesDir);

  return staticPages;
}

// Simulating blog post fetching (replace with your actual function)
async function getBlogPosts({ order }: { order: string }) {
  return [
    // Replace with actual dynamic page fetching logic
  ];
}

// Combine static pages and dynamic pages to create the XML sitemap
function generateSitemap(
  domain: string,
  staticPages: string[],
  dynamicPages: any[]
): string {
  // Define priorities
  const priorities: Record<string, number> = {
    "/": 1.0, // Homepage
    "/about": 0.8, // Example page
    // Add more static pages here with their priorities
  };

  const defaultPriority = 0.5; // Default priority for other pages

  // Function to get priority based on the page path
  const getPriority = (path: string): number => {
    return priorities[path] || defaultPriority;
  };

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((page) => {
      const priority = getPriority(page);
      return `<url>
        <loc>${domain}${page}</loc>
        <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
        <priority>${priority}</priority>
      </url>`;
    })
    .join("")}
  ${dynamicPages
    .map((page) => {
      const priority = 0.5; // Set a default priority for dynamic pages
      return `<url>
        <loc>${domain}${page.url}</loc>
        <lastmod>${page.updated_at}</lastmod>
        <priority>${priority}</priority>
      </url>`;
    })
    .join("")}
</urlset>`;
}
