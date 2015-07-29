'use strict';

angular.module('myApp.view1', ['ngRoute', 'highcharts-ng'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

        //console.log("stop here");
        $scope.chartConfig = {
            options: {
                chart: {
                    type: 'bar',
                    backgroundColor:'rgba(255, 255, 255, 0)'
                }
            },
            colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9',
                '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],
            series: [{
                data: [{y:10, name:'Fred'},
                    {y: 15, name: 'Buster'},
                    {y: 12, name: 'Jesse'},
                    {y: 8, name: 'Jon'},
                    {y: 7, name: 'Melanie'}]
            }],
            title: {
                text: ''
            },
            yAxis: {
                labels: {
                    style: {
                        color: 'white'
                    }
                },
                gridLineColor: 'white'
            },
            xAxis: {
                labels: {
                    style: {
                        color: 'white'
                    }
                },
                gridLineColor: 'white'
            },
            loading: false
        }

    }]);