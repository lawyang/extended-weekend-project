movieApp.controller('GenreController', function(service) {
vm = this;
vm.test = 'test';
vm.displayArray = [];


vm.count = function(){
    service.getCount()
    .then(function (response) {
        vm.displayArray = response;
        console.log(response);
        console.log(vm.displayArray);
    })
}


vm.submitButton = function () {
    console.log('in submit button');
    vm.genreToSend = {
        genre: vm.genre
    }
    console.log(vm.genreToSend);
    service.genreSubmit = vm.genreToSend;
    service.addGenre();
    vm.genre = '';
    vm.count();
}


vm.count();
})