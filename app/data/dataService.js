angular.module('dataService', []).factory('dataService', function dataService($http) {
    var data = [];
    var dims = ['Name', 'pos', 'Team', 'season'];

    function getData() {
        return $http.get("data/data.json").then(function(dat) {
            data = dat;
        });
    }

    function getDimensions() {
        return dims;
    }

    function getMeasures() {
        var allAttr = Object.keys(data[0]);


    }

    return {
        getData: getData,
        getDimensions: getDimensions,
        getMeasures: getMeasures
    };
});