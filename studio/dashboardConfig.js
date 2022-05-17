export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '628420133050d700928a1e0e',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-irgeduym',
                  apiId: '5add1de9-4887-48e8-bce7-6eea4e6809e2'
                },
                {
                  buildHookId: '628420142ce0aa0093d35d3b',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ds3f79ec',
                  apiId: '96747370-8b86-4ede-bcfd-95fac81d6c80'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ArmandoAmador/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ds3f79ec.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
