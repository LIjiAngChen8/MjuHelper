const db=wx.cloud.database()
Page({
	data: {
        details:{
            bookName:'',
            bookCover:''
        },
        tabIndex:0,
        commentList:[
            // {
            //     commentId:'1649850122',
            //     nickName:'李江辰',
            //     time:'昨天 09:08',
            //     avatar:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/a8d297c5-2ddc-498a-96ba-a63166f8e6c7.jpg",
            //     content:"大多数人都生活在平静的绝望中",
            //     children:[
            //         {
            //             commentId:'1649850123',
            //             nickName:'彩霞',
            //             time:'13:31',
            //             avatar:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/a8d297c5-2ddc-498a-96ba-a63166f8e6c7.jpg",
            //             content:"加油！💕"
            //         },
            //         {
            //             commentId:'1649850123',
            //             nickName:'保留',
            //             time:'13:45',
            //             avatar:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/a8d297c5-2ddc-498a-96ba-a63166f8e6c7.jpg",
            //             content:"现在的我就很悲伤"
            //         },
            //         {
            //             commentId:'1649850123',
            //             nickName:'食物昏迷',
            //             time:'16:11',
            //             avatar:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/a8d297c5-2ddc-498a-96ba-a63166f8e6c7.jpg",
            //             content:"“没关系 都会过去的”",
            //             sendTo:{
            //                 userId:'12345678',
            //                 nickName:'保留'
            //             },
            //         },
            //     ]
            // },
            // {
            //     commentId:'1649850456',
            //     nickName:'YIhieHie',
            //     time:'03-05',
            //     avatar:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/a8d297c5-2ddc-498a-96ba-a63166f8e6c7.jpg",
            //     content:"《人间失格》里有句话：若能避开猛烈的欢喜,自然也不会有悲痛的来袭可是如果人生连喜怒哀乐的情绪都要压在心里不表现出来,那和机器又有什么区别呢？"
            // },
            // {
            //     commentId:'1649850457',
            //     nickName:'测试测试测试',
            //     time:'2028-01-01',
            //     avatar:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/a8d297c5-2ddc-498a-96ba-a63166f8e6c7.jpg",
            //     content:"表情测试～😏🪐📑🔖⭐️🍌"
            // },
        ]
    },
    changeTab(e){
        this.setData({
            tabIndex:e.currentTarget.dataset.index
        })
    },
	onLoad: function (options) {
        wx.cloud.callFunction({
            name: 'getComments',
            data: {course:'course00001'},
        }).then(res => {
            this.setData({
                commentList:res.result.list
            })
        }).catch(console.error)
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