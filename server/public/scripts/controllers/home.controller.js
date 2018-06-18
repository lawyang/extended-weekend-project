movieApp.controller('HomeController', function (service) {
    const vm = this;
    vm.test = 'test';
    vm.service = service;
    vm.displayArray = [];
    vm.genreArray = [];
    vm.inputGenre = vm.genreOption;

    vm.service.getGenres()
        .then(function (response) {
            vm.genreArray = response;
            console.log(vm.genreArray);
    })

    vm.getAll = function () {
        service.getCollection()
            .then(function (response) {
                vm.displayArray = response.data;
                console.log(vm.displayArray)
            });
    }

    vm.submitButton = function () {
        console.log(`in submit button`);
        vm.sendToDb = {
            title: vm.title,
            release_date: vm.myDate,
            runtime: vm.time,
            trailer: vm.trailer,
            genres_id: vm.genreToSend
        }
        service.objectToSend = vm.sendToDb;
        service.addMovie();
        vm.clearInputs();
        vm.getAll();
    }

    vm.deleteButton = function(id) {
        service.delete(id)
            .then(function(response){
                vm.getAll();
                console.log(id);
            })
    }

    vm.clearInputs = function() {
        vm.title='';
        vm.myDate = '';
        vm.time = '';
        vm.trailer = '';
        vm.genreToSend = '';
    }

    vm.getAll();
})