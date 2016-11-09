// js/notes.js

angular
  .module("notesApp", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("NoteIndexController", [
    NoteIndexControllerFunction
  ])



  function NoteIndexControllerFunction() {
    console.log("INDEX CONotrLLLER FJOIUER Ounk");


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
