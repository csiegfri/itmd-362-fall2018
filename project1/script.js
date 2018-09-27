var app = angular.module('myApp', []);
app.controller('MainCtrl', function($scope) 
{
    name = $scope.uname;
    mail = $scope.email;

    $scope.register=function(name, mail){
        alert("Congratulations, " + name + ", you're in. Expect an email at " + mail + " in the future.")
    }
});