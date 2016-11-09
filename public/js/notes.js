// js/notes.js

angular
  .module("notesApp", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("NoteIndexController", [
    "NoteFactory",
    NoteIndexControllerFunction
  ])
  .factory("NoteFactory", [
    "$resource",
    NoteFactoryFunction
  ])



  function NoteFactoryFunction($resource) {
    return $resource("/api")
  }



  function NoteIndexControllerFunction(NoteFactory) {
    this.notes = NoteFactory.query()
  }


  function RouterFunction($stateParams) {
    $stateParams
    .state("noteIndex", {
      url: "/",
      templateUrl: "assets/js/ng-views/index.html",
      controller: "NoteIndexController",
      controllerAs: "vm"
    })
  }
