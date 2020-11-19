// collego il codice di Vue all'html
const toDoListApp = new Vue ({
  el: "#to-do-list",
  data: {
    // inizializzo l'array che conterrà i list item che vengono generati al click del button
    toDoListArray: [],
    textInput: ""
  },
  methods: {
    // funzione che aggiunge, al click del button, il testo inserito come elemento dell'toDoListArray, l'array diventa di oggetti; le proprietà dell'oggetto sono il testo e colored, inizializzata a false
    addToToDoListArray: function(){
      if (this.textInput != ""){
        this.toDoListArray.push(
          {
            text: this.textInput,
            colored: false
        });
        this.textInput = "";
      }
		},
    // funzione che rimuove, al click della X, l'elemento dall'array
    removeToToDoList: function(index){
      this.toDoListArray.splice(index, 1);
    },
    // funzione che cambia la proprietà colored dell'oggetto che viene cliccato da false a true e viceversa
    color: function(index){
      this.toDoListArray[index].colored =  !this.toDoListArray[index].colored;
    }
  }
});
