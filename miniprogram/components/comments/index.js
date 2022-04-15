const db=wx.cloud.database()
Component({
    options:{
        addGlobalClass:true
    },
    properties: {
        commentList:Array
    },
    data: {
    },
    methods: {
        comment(e){
            console.log(e.currentTarget.dataset.item)
            console.log('二级下标',e.currentTarget.dataset.cindex)
            console.log('一级下标',e.currentTarget.dataset.index)
            this.setData({
                // commentList[index].push()
            })
        },
        goToUser(e){
            console.log('跳转至'+e.currentTarget.dataset.name +'的资料页')
        },
        ljc(){
            console.log(1)
        },
        showMore(e){
            console.log(1)
            // console.log(e.currentTarget.dataset.index)
        },
        changeTime(val){
            console.log(val)
        }
    }
})
