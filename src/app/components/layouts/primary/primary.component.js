import template from './primary.html';

const component = {
  template,
  transclude: true,
  bindings: {
    title: '@'
  }
};

export default component;
