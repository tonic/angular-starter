function service($http) {
  'ngInject';

  return {
    getContent: getContent
  };

  function getContent() {
    return $http.get('/api/test');
  }
};

export default service;
