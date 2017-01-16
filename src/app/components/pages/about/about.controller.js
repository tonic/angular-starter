import angular from 'angular';

function controller(PagesService) {
  'ngInject';

  const vm = this;

  angular.extend(vm, {
    $onInit: initialize
  });

  function initialize() {
    PagesService.getContent()
      .then((res) => {
        vm.content = res.data.content;
      });
  }
};

export default controller;
