Component({
  properties: {
    bookData:Array,
  },
  methods: {
    clikBook(e){
      var id = e.currentTarget.dataset._id
      this.triggerEvent('toBookDetails',{id});
    }
  }
})
