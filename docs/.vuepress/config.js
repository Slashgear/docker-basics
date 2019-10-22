module.exports = {
  plugins: {
    sitemap: {
      hostname: "https://learn-docker.netlify.com"
    }
  },
  title: "Les bases de docker",
  description: "Appréhender docker en quelques heures",
  themeConfig: {
    editLinkText: "Edit cette page sur Github",
    lastUpdated: "Mis à jour le",
    repo: "Slashgear/docker-basics",
    repoLabel: "Contribue !",
    docsRepo: "Slashgear/docker-basics",
    docsDir: "docs",
    editLinks: true,
    sidebar: ["/", "Intro.md", "Workshops.md"],
    nav: [{ text: "Home", link: "/" }]
  }
};
