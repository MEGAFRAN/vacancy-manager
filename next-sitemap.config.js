/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://clubtal.com",
  generateRobotsTxt: true,
  autoLastmod: true,
  exclude: ["/blog", "/blog/*", "/wiki", "/wiki/*"],
  changefreq: "weekly",
}
