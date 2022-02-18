const withPWA = require("next-pwa")

module.exports = withPWA({
   reactStrictMode: true,
   images: { domains: ["avsdata.beget.tech"] },
   i18n: {
      locales: ["en"],
      defaultLocale: "en"
   },
   pwa: {
      dest: "public",
      register: true
   }
})
