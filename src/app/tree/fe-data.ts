export const data = [
  {
    name: 'PROJECT-NAME',
    type: 'folder',
    children: [
      {
        name: 'src',
        type: 'folder',
        children: [
          {
            name: 'app',
            type: 'folder',
            children: [
              { name: 'app(style)', type: 'file' },
              { name: 'app(template)', type: 'file' },
              { name: 'app(script)', type: 'file' },
              { name: 'app(module)', type: 'file' },
              { name: 'app(routing)', type: 'file' },
              {
                name: 'components',
                type: 'folder',
                children: [
                  { name: 'ComponentA', type: 'component' },
                  { name: 'ComponentB', type: 'component' },
                  { name: 'ComponentB', type: 'component' },
                ]
              },
              {
                name: 'layouts',
                type: 'folder',
                children: [
                  { name: 'footer', type: 'component' },
                  { name: 'navbar', type: 'component' },
                  { name: 'sidebar', type: 'component' },
                ]
              },
              {
                name: 'views',
                type: 'folder',
                children: [
                  { name: 'home', type: 'component' },
                  { name: 'login', type: 'component' },
                ]
              },
              {
                name: 'core',
                type: 'folder',
                children: [
                  {
                    name: 'http',
                    type: 'folder',
                    children: [
                      {
                        name: 'class',
                        type: 'folder',
                        children: [
                          { name: 'query-string-parameters', type: 'file' },
                          { name: 'url-builder', type: 'file' }
                        ]
                      },
                      {
                        name: 'endpoints',
                        type: 'folder',
                        children: [
                          { name: 'actions', type: 'file' },
                          { name: 'endpoint-service1', type: 'file' },
                          { name: 'endpoint-service2', type: 'file' },
                          { name: 'endpoint-service3', type: 'file' },
                        ]
                      },
                      {
                        name: 'services',
                        type: 'folder',
                        children: [
                          { name: 'api-endpoints.service', type: 'file' },
                          { name: 'api-http.service', type: 'file' }
                        ]
                      },
                    ]
                  },
                  { name: 'mocks', type: 'folder' },
                  { name: 'authentication/guards', type: 'folder' }
                ]
              },
              { name: 'modules', type: 'folder' },
              {
                name: 'shared',
                type: 'folder',
                children: [
                  { name: 'components', type: 'folder' },
                  { name: 'services', type: 'folder' },
                  { name: 'directives', type: 'folder' },
                  { name: 'pipes', type: 'folder' },
                  { name: 'models', type: 'folder' },
                  { name: 'states', type: 'folder' },
                  { name: 'constant', type: 'file' },
                ]
              },
            ]
          },
          {
            name: 'assets',
            type: 'folder',
            children: [
              { name: 'images', type: 'folder' },
              { name: 'scss', type: 'folder' },
            ]
          },
          {
            name: 'environments',
            type: 'folder',
            children: [
              { name: 'environment.prod', type: 'file' },
              { name: 'environment.dev', type: 'file' },
            ]
          },
          {
            name: 'index.html',
            type: 'file'
          },
          {
            name: '..................',
            type: 'file'
          }
        ]
      },
      { name: 'node_modules', type: 'folder' },
      { name: 'README.md', type: 'file' },
      { name: 'package.json', type: 'file' },
      { name: '.........................', type: 'file' },
    ]
  }
];
