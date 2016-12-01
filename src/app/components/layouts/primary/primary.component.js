import template from './primary.template.html';

const component = {
  template,
  transclude: true,
  bindings: {
    title: '@'
  }
};

export default component;
