import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'SAP Application User Guide',
  tagline: 'Complete guide for SAP application users and administrators',
  favicon: 'img/favicon.ico',

  url: 'https://your-sap-domain.com',
  baseUrl: '/',

  organizationName: 'coherent-research',
  projectName: 'sap-docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl:
            'https://github.com/coherent-research/sap-docusaurus/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/sap-social-card.jpg',
    navbar: {
      title: 'SAP User Guide',
      logo: {
        alt: 'SAP Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'User Guide',
        },
        {
          to: '/help/support',
          label: 'Support',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Getting Started',
          items: [
            {
              label: 'System Access',
              to: '/getting-started/system-access',
            },
            {
              label: 'First Login',
              to: '/getting-started/first-login',
            },
            {
              label: 'User Roles',
              to: '/getting-started/user-roles',
            },
          ],
        },
        {
          title: 'Daily Use',
          items: [
            {
              label: 'Managing Devices',
              to: '/daily-use/managing-devices',
            },
            {
              label: 'Managing Gateways',
              to: '/daily-use/managing-gateways',
            },
            {
              label: 'Filtering & Searching',
              to: '/daily-use/filtering-searching',
            },
          ],
        },
        {
          title: 'Admin Guide',
          items: [
            {
              label: 'Organizations',
              to: '/admin/managing-organizations',
            },
            {
              label: 'Sites',
              to: '/admin/managing-sites',
            },
            {
              label: 'User Accounts',
              to: '/admin/managing-accounts',
            },
          ],
        },
        {
          title: 'Help & Reference',
          items: [
            {
              label: 'Troubleshooting',
              to: '/help/troubleshooting',
            },
            {
              label: 'Field Definitions',
              to: '/reference/field-definitions',
            },
            {
              label: 'Support',
              to: '/help/support',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Coherent Research Ltd. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;