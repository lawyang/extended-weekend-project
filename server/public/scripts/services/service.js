movieApp.service('service', function ($http) {
    const vm = this;

    vm.testservice = 'asdfasdf';
    vm.toArray = [];

    vm.getCollection = function () {
        return $http({
            method: 'GET',
            url: '/collection'
        }).then(function (response) {
            console.log('handled getCollection for /collection');
            vm.toArray = response.data;
            console.log('vm.array:', vm.toArray);
            return response;
        }).catch(function (error) {
            console.log('Error handling getCollection for /collection', error);
        })
    }



})