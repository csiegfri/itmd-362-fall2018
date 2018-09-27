var app = angular.module('myApp', []);
app.controller('MainCtrl', function($scope) 
{
    $scope.register=function(uname, email){
        alert("Congratulations, " + uname + ", you're in. Expect an email at " + email + " in the near future.");
    }
});