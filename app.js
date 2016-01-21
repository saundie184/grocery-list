'use strict';

var app = angular.module('groceryApp', []);

app.controller('NewItemController', function() {
  var vm = this;
  vm.list = [];
  vm.item = '';

  vm.submit = function() {
//var item = {
// name: vm.itemName,
// checked: false
// }
//use ng-checked='item.checked'
//and ng-click='pass in function here'
//vm.groceries[index].checked = !vm.groceries[index].checked

//or you can jsut use ng-model='item.checked'
//use item in items | orderBy : 'checked' track by $index

 //try this:
// function removeItem(name){
//   vm.groceries.forEach(function(item, index, arr){
//     if(item.name === name){
//       arr.splice(index, 1);
//     }
//   });
// }

    if (vm.item) {
      vm.list.push(this.item);
      vm.item = '';
    }
  };



  vm.delete = function(index) {
    vm.list.splice(index, 1);
  };
});
