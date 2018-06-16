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

    vm.addMovie = function () {
        vm.objectToSend;
        return $http({
            method: 'POST',
            url: '/collection',
            data: vm.objectToSend
        }).then(function (response) {
            console.log('object POSTED to DB from service');
        }).catch(function (error) {
            console.log('Error posting object');
        })
    }

    vm.getGenres = function () {
        return $http({
            method: 'GET',
            url: '/collection/genre'
        })
    }

})