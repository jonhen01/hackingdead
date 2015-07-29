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
            series: [{
                color: 'black',
                borderColor: 'red',
                data: [{y:10, name:'Fred'},
                    {y: 15, name: 'Buster'},
                    {y: 12, name: 'Jesse'},
                    {y: 8, name: 'Jon'},
                    {y: 7, name: 'Melanie'}],
                dataLabels: {
                    inside: true,
                    color: 'red',
                    enabled: true

                }
            }],
            title: {
                text: ''
            },
            yAxis: {
                labels: {
                    style: {
                        color: 'red',
                        fontWeight: 'bold'

                    }
                },
                gridLineColor: 'red'
            },
            xAxis: {
                labels: {
                    style: {
                        color: 'red',
                        fontWeight: 'bold'
                    }
                },
                gridLineColor: 'red'
            },
            loading: false
        }

    }]);