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

  // Fetch all static and dynamic pages
  const staticPages = await getAllStaticPages();
  const dynamicPages = await getBlogPosts({ order: "recent" });

  // Combine both static and dynamic pages to generate sitemap
  const xml = generateSitemap(domain, staticPages, dynamicPages);

  // Send the XML response
  ctx.res.setHeader("Content-Type", "text/xml");
  ctx.res.write(xml.trim());
  ctx.res.end();

  return { props: {} };
};

// Function to get all static pages by scanning the `pages` directory
async function getAllStaticPages() {
  const pagesDir = path.join(process.cwd(), "pages");
  const ignorePatterns = ["_app", "_document", "sitemap", "api", ".css"];

  let staticPages: string[] = [];

  const getPages = (dir: string) => {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);

      // Skip directories or files we don't want
      if (fs.statSync(filePath).isDirectory() && file === "api") {
        return; // Skip API folder
      }

      if (fs.statSync(filePath).isDirectory()) {
        getPages(filePath);
      } else {
        const relativePath = path.relative(pagesDir, filePath);
        const pagePath = `/${relativePath
          .replace(/\.tsx|\.js/, "")
          .replace(/\/index$/, "")}`;

        if (!ignorePatterns.some((pattern) => file.includes(pattern))) {
          staticPages.push(pagePath);
        }
      }
    });
  };

  getPages(pagesDir);

  return staticPages;
}

// Simulating dynamic blog posts fetching (replace with real data fetching)
async function getBlogPosts({
  order,
}: {
  order: string;
}): Promise<{ url: string; updated_at: string }[]> {
  return [
    { url: "/ProjectFinance", updated_at: "2024-09-05" },
    { url: "/InquiryForm", updated_at: "2024-09-05" },
    { url: "/", updated_at: "2024-09-05" },
    // Add more dynamic URLs here
  ]; // Replace with actual logic for fetching posts
}

// Generate the XML sitemap with priority
function generateSitemap(
  domain: string,
  staticPages: string[],
  dynamicPages: { url: string; updated_at: string }[]
): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((page) => {
      // Set priority based on page type or URL
      const priority = determinePriority(page);
      return `<url>
        <loc>${domain}${page}</loc>
        <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
        <priority>${priority}</priority>
      </url>`;
    })
    .join("")}
  ${dynamicPages
    .map((page) => {
      // Set priority for dynamic pages
      const priority = determinePriority(page.url);
      return `<url>
        <loc>${domain}${page.url}</loc>
        <lastmod>${page.updated_at}</lastmod>
        <priority>${priority}</priority>
      </url>`;
    })
    .join("")}
</urlset>`;
}

// Function to determine the priority of a page
function determinePriority(url: string): string {
  // Example priority settings; adjust as needed
  if (url === "/") return "1.0"; // Home page
  if (url.startsWith("/blog")) return "0.8"; // Blog pages
  return "0.5"; // Default priority for other pages
}
