module.exports = function (plop) {
  plop.setHelper('eq', (a, b) => a === b);

  plop.setGenerator('component-ui-type', {
    description: 'Создания шаблона компонента в папку ui (styled, types, index, component, stories)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Названия компонента (CamelCase):',
        validate: (value) => {
          if (!/^[A-Z][a-zA-Z0-9]*$/.test(value)) {
            return 'Component name must be in CamelCase';
          }
          return true;
        },
      },
    ],
    data: {
      name: '{{pascalCase name}}',
    },
    actions: [
      {
        type: 'addMany',
        destination: 'src/ui/{{pascalCase name}}',
        templateFiles: 'plop-templates/component-ui-type/*.hbs',
        base: 'plop-templates/component-ui-type',
        abortOnFail: true,
      },
    ],
  });

  plop.setGenerator('component', {
    description: 'Создания шаблона компонента в папку ui (styled, index, component, stories)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Названия компонента (CamelCase):',
        validate: (value) => {
          if (!/^[A-Z][a-zA-Z0-9]*$/.test(value)) {
            return 'Component name must be in CamelCase';
          }
          return true;
        },
      },
    ],
    data: {
      name: '{{pascalCase name}}',
    },
    actions: [
      {
        type: 'addMany',
        destination: 'src/ui/{{pascalCase name}}',
        templateFiles: 'plop-templates/component/*.hbs',
        base: 'plop-templates/component',
        abortOnFail: true,
      },
    ],
  });
};
