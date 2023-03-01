// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Formable",
  tagline: "Formable",
  favicon: "img/favicon.ico",

  url: "https://owenjs.github.io", // Your website URL
  baseUrl: "/formable/",
  projectName: "owenjs.github.io",
  organizationName: "owenjs",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "owenjs", // Usually your GitHub org/user name.
  projectName: "formable", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/owenjs/formable/tree/main/apps/docs"
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Formable",
        // logo: {
        //   alt: "My Site Logo",
        //   src: "img/logo.svg"
        // },
        items: [
          {
            href: "https://github.com/owenjs/formable",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Please show support",
            items: [
              {
                label: "React Hook Form",
                href: "https://react-hook-form.com/"
              },
              {
                label: "Coded with ❤️ @owenjs",
                href: "https://github.com/owenjs"
              }
            ]
          }
        ],
        copyright: `Built with Docusaurus.`
      },
      prism: {
        theme: require("prism-react-renderer/themes/vsLight"),
        darkTheme: require("prism-react-renderer/themes/vsDark")
      }
    })
};

module.exports = config;
