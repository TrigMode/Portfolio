const app = angular.module('portfolioApp', []);

app.controller('PortfolioController', function ($scope) {
  $scope.sections = [
    { title: 'Home', description: 'Welcome to my portfolio website.' },
    { title: 'About', description: 'Hi! I am a student studying Computer Science.' },
    { title: 'Work', description: 'Work In Progress. Check out my latest projects.'},
  ];
  $scope.expandedSection = null;

  $scope.expand = function (section) {
    if ($scope.expandedSection) {
      $scope.expandedSection.expanded = false;
    }

    if ($scope.expandedSection === section) {
      $scope.expandedSection = null;
    } else {
      section.expanded = true;
      $scope.expandedSection = section;
    }
  };

  $scope.contract = function () {
    if ($scope.expandedSection) {
      $scope.expandedSection.expanded = false;
      $scope.expandedSection = null;
    }
  };
});
