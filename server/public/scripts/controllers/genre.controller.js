movieApp.controller('GenreController', function(service) {
vm = this;
vm.test = 'test';
vm.displayArray = [];

service.getCount()
.then(function (response) {
    vm.displayArray = response;
    console.log(response);
    console.log(vm.displayArray);
})


})