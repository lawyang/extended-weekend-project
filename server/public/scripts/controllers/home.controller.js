movieApp.controller('HomeController', function (service) {
    const vm = this;
    vm.test = 'test';
    vm.displayArray = [];
    vm.service = service;

    vm.genre = [
        'this', 'two'
    ];

    vm.inputGenre = vm.genreOption;
    console.log(vm.inputGenre);

    vm.getAll = function () {
        vm.service.getCollection()
            .then(function (response) {
                vm.displayArray = response.data;
                console.log(vm.displayArray)
            });
    }

    vm.submitButton = function(){
        console.log(`in submit button`);
        vm.sendToDb = {
            title: vm.title,
            release_date: vm.myDate,

        }
        
    }

    //GET GENRE
    //display genre to add to movie
    // DELETE ON CASCADE
    vm.getAll();
})