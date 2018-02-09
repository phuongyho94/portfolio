app.controller('MainCtrl', ['$scope', '$location',
  function($scope, $location) {
    var bootstrap3_enabled = (typeof $().emulateTransitionEnd == 'function');
    console.log(bootstrap3_enabled)

  }
])
