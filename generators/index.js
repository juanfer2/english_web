export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/index.tsx',
        templateFile: 'component/tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/{{properCase name}}.spec.tsx',
        templateFile: 'component/test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/{{properCase name}}.stories.tsx',
        templateFile: 'component/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/{{properCase name}}.styles.tsx',
        templateFile: 'component/styles.tsx.hbs'
      }
    ]
  });

  plop.setGenerator('organism', {
    description: 'Create a organism',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your organism name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/organisms/{{properCase name}}/index.tsx',
        templateFile: 'component/tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/organisms/{{properCase name}}/{{properCase name}}.spec.tsx',
        templateFile: 'component/test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/organisms/{{properCase name}}/{{properCase name}}.stories.tsx',
        templateFile: 'component/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/organisms/{{properCase name}}/{{properCase name}}.styles.tsx',
        templateFile: 'component/styles.tsx.hbs'
      }
    ]
  });

  plop.setGenerator('molecule', {
    description: 'Create a molecule',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your molecule name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/molecules/{{properCase name}}/index.tsx',
        templateFile: 'component/tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/molecules/{{properCase name}}/{{properCase name}}.spec.tsx',
        templateFile: 'component/test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/molecules/{{properCase name}}/{{properCase name}}.stories.tsx',
        templateFile: 'component/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/molecules/{{properCase name}}/{{properCase name}}.styles.tsx',
        templateFile: 'component/styles.tsx.hbs'
      }
    ]
  });

  plop.setGenerator('hook', {
    description: 'Create a hook template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook template name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/hooks/{{camelCase name}}/index.tsx',
        templateFile: 'component/hook.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/hooks/{{camelCase name}}/{{camelCase name}}.spec.tsx',
        templateFile: 'component/hook-test.tsx.hbs'
      }
    ]
  });

  plop.setGenerator('reducer', {
    description: 'Create a reducer template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your reducer template name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/redux/reducers/{{snakeCase name}}_reducer/index.ts',
        templateFile: 'redux/reducer.ts.hbs'
      }
    ]
  });

  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: 'component/tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/pages/{{properCase name}}/{{properCase name}}.spec.tsx',
        templateFile: 'component/test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/pages/{{properCase name}}/{{properCase name}}.stories.tsx',
        templateFile: 'page/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/pages/{{properCase name}}/{{properCase name}}.styles.tsx',
        templateFile: 'component/styles.tsx.hbs'
      }
    ]
  });

  plop.setGenerator('template', {
    description: 'Create a template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your template name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/templates/{{properCase name}}/index.tsx',
        templateFile: 'component/tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/templates/{{properCase name}}/{{properCase name}}.spec.tsx',
        templateFile: 'component/test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/templates/{{properCase name}}/{{properCase name}}.stories.tsx',
        templateFile: 'template/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/templates/{{properCase name}}/{{properCase name}}.styles.tsx',
        templateFile: 'component/styles.tsx.hbs'
      }
    ]
  });
}
