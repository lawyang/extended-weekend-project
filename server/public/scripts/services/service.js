movieApp.service('service', function ($http) {
    const vm = this;

    vm.testservice = 'asdfasdf';
    vm.toArray = [];
    vm.genreArray = [];

    vm.getCollection = function () {
        return $http({
            method: 'GET',
            url: '/collection'
        }).then(function (response) {
            vm.toArray = response.data;
            return response;
        }).catch(function (error) {
            console.log('Error handling getCollection for /collection', error);
        })
    }

    vm.addMovie = function () {
        vm.objectToSend;
        console.log(vm.objectToSend);
        
        return $http({
            method: 'POST',
            url: '/collection',
            data: vm.objectToSend
        }).then(function (response) {
            console.log('object POSTED to DB from service');
        }).catch(function (error) {
            console.log('Error posting object', error);
        })
    }

    vm.getGenres = function () {
        return $http({
            method: 'GET',
            url: '/collection/genres'
        }).then(function(response){
            vm.genreArray = response.data;
            return vm.genreArray;
        }).catch(function(error){
            console.log('Error handling getGenres for /collection/genre', error);
        })
    }        

    vm.addGenre = function () {
        vm.genreToSend;
        console.log(vm.genreToSend);
        return $http({
            method: 'POST',
            url: '/collection/genre',
            data: vm.genreToSend
        }).then(function(response){
            console.log('succesful POST to genre table')
        }).catch(function(error){
            console.log('Error posting object to genre table', error); 
        })
    }
    
})