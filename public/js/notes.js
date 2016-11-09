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
  // .controller("EditNoteController", [
  //   "$stateParams",
  //   "NoteFactory",
  //   EditNoteControllerFunction
  // ])
  .controller("NewNoteController", [
    "NoteFactory",
    NewNoteControllerFunction
  ])
  .factory("NoteFactory", [
    "$resource",
    NoteFactoryFunction
  ])



  function NoteFactoryFunction($resource) {
    return $resource("/api/notes/:title", {}, {
      create: {
        method: "POST"
      },
      update: {
        method: "POST"
      }
    })
  }



  function NoteIndexControllerFunction(NoteFactory) {
    this.notes = NoteFactory.query()
  }

  function ShowNoteControllerFunction($stateParams, NoteFactory){
    this.note = NoteFactory.get({title: $stateParams.title})
    this.update = function(){
      NoteFactory.update({
        title: this.note.title,
        content: this.note.content
      }).$promise.then(() => {
        this.note = NoteFactory.get({title: $stateParams.title})
      })
    }
  }

  function NewNoteControllerFunction(NoteFactory) {
    console.log("Note Controller");
    this.note = new NoteFactory()
    console.log(this.note);
    this.create = function(note) {
      console.log(note);
      // NoteFactory.create({
      //   title: note.title,
      //   content: note.content,
      //   date: Date.now
      // }).$promise.then( (note) => {
      //   console.log(note);
        // this.notes = NoteFactory.query()
      // })
    }
  }

  // function EditNoteControllerFunction($stateParams, NoteFactory){
  //   this.note = NoteFactory.get({title: $stateParams.title})
  //   this.update = function(){
  //     this.grumble.$update({title: $stateParams.title})
  //   }
  // }

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
    .state("newNote", {
      url: "/new",
      templateUrl: "assets/js/ng-views/new.html",
      controller: "NewNoteController",
      controllerAs: "vm"
    })
    // .state("editNote", {
    //   url: "/edit/:title",
    //   templateUrl: "assets/js/ng-views/edit.html",
    //   controller: "EditNoteController",
    //   controllerAs: "vm"
    // })
  }
