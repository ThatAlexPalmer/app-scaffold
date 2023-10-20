/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: "https://poet.network",
    generateRobotsTxt: true, // (optional)
    exclude: ["/app*", "/_next/*"],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: "*",
                allow: ["/", "/elements"],
                disallow: ["/app*", "/_next/*"],
            },
        ],
    },
    // ...other options
};

module.exports = config;
