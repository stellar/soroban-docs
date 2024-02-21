module.exports = {
  myAutogeneratedSidebar: [
    {
      type: 'autogenerated',
      dirName: '.',
    },
    {
      type: 'link',
      label: 'Meeting Notes',
      href: '/meetings',
    },
    {
      type: 'html',
      value: '<hr />',
    },
    {
      type: 'html',
      value: 'Migrated Content:',
      className: 'sidebar-title',
    },
    {
      type: 'link',
      href: 'https://developers.stellar.org/docs/tools/developer-tools',
      label: 'Developer Tools',
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'SDKs',
          items: [
            {
              type: 'link',
              href: 'https://developers.stellar.org/docs/tools/sdks/library',
              label: 'Write Contracts',
            },
            {
              type: 'link',
              href: 'https://developers.stellar.org/docs/tools/sdks/library',
              label: 'Interact with Contracts',
            },
            {
              type: 'link',
              href: 'https://developers.stellar.org/docs/tools/sdks/build-your-own',
              label: 'Build Your Own SDK',
            },
          ],
        },
      ],
    },
  ],
};
