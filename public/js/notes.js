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
  .controller("ShowNoteController", [
    "$stateParams",
    "NoteFactory",
    ShowNoteControllerFunction
  ])
  .controller("EditNoteController", [
    "$stateParams",
    "NoteFactory",
    EditNoteControllerFunction
  ])
  .factory("NoteFactory", [
    "$resource",
    NoteFactoryFunction
  ])



  function NoteFactoryFunction($resource) {
    return $resource("/api/notes/:title")
  }



  function NoteIndexControllerFunction(NoteFactory) {
    this.notes = NoteFactory.query()
  }
  function ShowNoteControllerFunction($stateParams, NoteFactory){
    this.note = NoteFactory.get({title: $stateParams.title})
  }
  function EditNoteControllerFunction($stateParams, NoteFactory){
    this.not = NoteFactory.get({title: $stateParams.title})
    this.update = function(){
      this.grumble.$update({title: $stateParams.title})
    }
  }

  function RouterFunction($stateParams) {
    $stateParams
    .state("noteIndex", {
      url: "/",
      templateUrl: "assets/js/ng-views/index.html",
      controller: "NoteIndexController",
      controllerAs: "vm"
    })
    .state("showNote", {
      url: "/:title",
      templateUrl: "assets/js/ng-views/show.html",
      controller: "ShowNoteController",
      controllerAs: "vm"
    })
    .state("editNote", {
      url: "/edit/:title",
      templateUrl: "assets/js/ng-views/edit.html",
      controller: "EditNoteController",
      controllerAs: "vm"
    })
  }
