var app = angular.module('snippetsApp', []);

app.controller('linkList', function($scope){
  $scope.title = "Code Snippets";
  $scope.site = {description:
    "A simple site for testing out some code"}

  $scope.info = [
    {title: "Free Code Camp - Fresno Github Org page",
    link: "https://github.com/freecodecamp-fresnoca"},
    {title: "Our Site | frescode.xyz",
    link: "http://frescode.xyz/"},
    {title: "The repo",
    link: "https://github.com/freecodecamp-fresnoca/code-snippets"},

  ]
})
