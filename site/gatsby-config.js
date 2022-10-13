module.exports = {
  siteMetadata: {
    description: "Personal page of Mustafa BAYIR",
    locale: "en",
    title: "Mustafa BAYIR",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "dark-blue",
      },
    },
  ],
}
