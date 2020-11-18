const myList = new Vue({
  el: '#root',
  data:{
    inputToDo: [],
  },
  methods: {
    inputToArray: function(){
      this.inputToDo.push(this.textInput)
    },
    removeInput: function()
  }
})
