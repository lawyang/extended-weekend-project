movieApp.controller('HomeController', function (service) {
    const vm = this;
    vm.test = 'test';
    vm.displayArray = [];
    vm.service = service;

    vm.genre = [
        {'name': 'Action'},
        {'name': 'Horror'},
        {'name': 'Comedy'},
        {'name': 'Scifi'},
        {'name': 'Kids'},
        {'name': 'Animation'},
        {'name': 'Romance'},
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

    vm.getAll();
})