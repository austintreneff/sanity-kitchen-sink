export default {
  widgets: [
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
                  buildHookId: '63347ca4ef0dc9184ae9b09e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-iypo3zvz',
                  apiId: '18554bc8-b462-4d03-85f1-6172947454da'
                },
                {
                  buildHookId: '63347ca5ab424517ce57fdb9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qffb1idk',
                  apiId: '08f2c95e-af22-42ed-80f1-a806519bb124'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/austintreneff/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qffb1idk.netlify.app', category: 'apps'}
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
