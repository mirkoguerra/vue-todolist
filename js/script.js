// collego il codice di Vue all'html
const toDoListApp = new Vue ({
  el: "#to-do-list",
  data: {
    // inizializzo l'array che conterrà i list item che vengono generati al click del button
    toDoListArray: [],
    textInput: ""
  },
  methods: {
    // funzione che aggiunge, al click del button, il list item generato al toDoListArray
    addToToDoListArray: function(){
      if (this.textInput != ""){
        this.toDoListArray.push(this.textInput);
      }
		}
  }
});
