  angular.module("friendsList").controller("mainCtrl", function($scope){
  $scope.friends=["Justin","Brandon","Lauren"]

  $scope.addFriend = function(friend){
    $scope.friends.push(friend)
  }
  });






  // I want you to create a function in your controller called 'addFriend'
  //  that takes in a name of another friend and pushes it to your friends
  //  array. In your index.html you'll need an input box that will be the
  //  name of your friend, and a button that will run $scope.addFriend
  //  every time it is clicked.
  // Good luck and congrats on building your first (of many) angular apps!
