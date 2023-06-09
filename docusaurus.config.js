// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FuxVault',
  tagline: 'Programming Tutorials and more!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://Fuxiune.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/fuxvault-tutorials/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Fuxiune', // Usually your GitHub org/user name.
  projectName: 'fuxvault-tutorials', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        /*blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: ['@docusaurus/theme-live-codeblock'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          /*{
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Blazor',
          },*/
          /*{
            type: 'docSidebar',  // docSidebar
            position: 'left',
            sidebarId: 'blazor', // foldername
            label: 'Blazor',     // navbar title
          },*/
          {
            type: 'docSidebar',  // docSidebar
            position: 'left',
            sidebarId: 'javascript', // foldername
            label: 'Javascript',     // navbar title
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Javascript',
                to: '/docs',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'Impressum',
                href: '/imprint',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fuxvault-Tutorials. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
    }),
};

module.exports = config;
