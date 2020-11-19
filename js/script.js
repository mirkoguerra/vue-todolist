// collego il codice di Vue all'html
const toDoListApp = new Vue ({
  el: "#to-do-list",
  data: {
    // inizializzo l'array che conterrà i list item che vengono generati al click del button
    toDoListArray: [],
    coloredArray: [],
    textInput: ""
  },
  methods: {
    // funzione che aggiunge, al click del button, il testo inserito come elemento dell'toDoListArray
    addToToDoListArray: function(){
      if (this.textInput != ""){
        this.toDoListArray.push(this.textInput);
        this.textInput = "";
        this.coloredArray.push(false);
      }
		},
    // funzione che rimuove, al click della X, l'elemento dall'array
    removeToToDoList: function(index){
      this.toDoListArray.splice(index, 1);
      this.coloredArray.splice(index, 1);
    },
    color: function(index){
      Vue.set(this.coloredArray, index, true);
    }
  }
});
