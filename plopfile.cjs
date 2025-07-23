module.exports = function (plop) {
  plop.setHelper('eq', (a, b) => a === b);

  plop.setGenerator('component', {
    description: 'Создания шаблона компонента в папку ui',
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
