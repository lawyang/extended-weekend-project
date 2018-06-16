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
        vm.service.getCollection()
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
        console.log(vm.sendToDb);
        service.objectToSend = vm.sendToDb;
        service.addMovie()
    }


    //display genre to add to movie
    // DELETE ON CASCADE
    vm.getAll();





})