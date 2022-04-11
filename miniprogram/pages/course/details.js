Page({
	data: {
        details:{
            bookName:'',
            bookCover:''
        },
        tabIndex:0
    },
    changeTab(e){
        console.log(e.currentTarget.dataset.index)
        this.setData({
            tabIndex:e.currentTarget.dataset.index
        })
    },
	onLoad: function (options) {
        let bookCover=options.bookUrl
        let bookName=options.book
        this.setData({
            details:{
                bookCover,
                bookName,  
            }
        })
	},
})