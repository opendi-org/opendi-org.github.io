/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
//https://docusaurus.io/docs/sidebar

//MAIN!!!
const sidebars = {
  landingSidebar: [
    {
      type: 'doc',
      label: 'Glossary',
      id: 'index'
    },
    {
      type: 'category',
      label: 'OpenDI',
      items: [
        {
          type: 'link',
          label: 'Main Site',
          href: 'https://opendi.org'
        },
        {
          type: 'link',
          label: 'Roles and User Stories',
          href: 'https://opendi-org.github.io/roles-user-stories/'
        },
        {
          type: 'link',
          label: 'API Specification',
          href: 'https://opendi-org.github.io/api-specification/'
        },
        {
            type: 'link',
            label: 'CDM Authoring Tool',
            href: 'https://opendi-org.github.io/cdd-authoring-tool/'
        },
        {
            type: 'link',
            label: 'Glossary',
            href: 'https://opendi-org.github.io/glossary/'
        }
      ]
    }
  ],

};

export default sidebars;
