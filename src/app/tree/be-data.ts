
export const data = [
  {
    name: 'PROJECT-NAME',
    type: 'folder',
    children: [
      {
        name: 'config',
        type: 'folder',
        children: [
          { name: 'permission.js', type: 'file' }
        ]
      },
      {
        name: 'controllers',
        type: 'folder',
        children: [
          {
            name: 'Controller1',
            type: 'file'
          },
          {
            name: 'Controller2',
            type: 'file'
          },
          {
            name: 'Controller3',
            type: 'file'
          },
        ]
      },
      {
        name: 'models',
        type: 'folder',
        children: [
          { name: 'Model1', type: 'file' },
          { name: 'Model2', type: 'file' },
          { name: 'Model3', type: 'file' }
        ]
      },
      {
        name: 'helpers',
        type: 'folder',
        children: [
          { name: 'constants.js', type: 'file' }
        ]
      },
      {
        name: 'routes',
        type: 'folder',
        children: [
          { name: 'api.js(Bundle routes)', type: 'file' },
          { name: 'route1', type: 'file' },
          { name: 'route2', type: 'file' },
        ]
      },
      {
        name: 'services',
        type: 'folder',
        children: [
          { name: 'auth.js', type: 'file' },
          { name: '+ Database access', type: 'component' },
          { name: '+ External API', type: 'component' }
        ]
      },
      { name: 'app.js', type: 'file' },
      { name: 'package.json', type: 'file' },
      { name: 'README.md', type: 'file' },
      { name: '.env', type: 'file' },
    ]
  }
];
