import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/system-access',
        'getting-started/first-login',
        'getting-started/changing-password',
        'getting-started/user-roles',
      ],
    },
    {
      type: 'category',
      label: 'Daily Use',
      collapsed: false,
      items: [
        'daily-use/filtering-searching',
        'daily-use/managing-devices',
        'daily-use/managing-gateways',
      ],
    },
    {
      type: 'category',
      label: 'Admin Area',
      collapsed: true,
      items: [
        'admin/managing-organizations',
        'admin/managing-sites',
        'admin/managing-accounts',
        'admin/bulk-operations',
      ],
    },
    {
      type: 'category',
      label: 'Help & Reference',
      collapsed: true,
      items: [
        'help/troubleshooting',
        'reference/field-definitions',
        'reference/user-roles',
        'reference/keyboard-shortcuts',
        'help/support',
      ],
    },
  ],
};

export default sidebars;