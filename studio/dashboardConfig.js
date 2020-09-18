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
                  buildHookId: '5f65177a60963e00a673bee0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cemo6bgj',
                  apiId: 'bbcd0aa2-8e1b-4336-b83a-62384b31bc1e'
                },
                {
                  buildHookId: '5f65177b4ac8330084e36aca',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-66ziz3dq',
                  apiId: '00b4caa3-6b99-454a-a1a5-22cb49682525'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/graemehoffman/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-66ziz3dq.netlify.app', category: 'apps'}
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
