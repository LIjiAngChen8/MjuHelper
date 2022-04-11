Component({
    /**
     * 组件的属性列表
     */
    properties: {
        nickName: {
            type: String,
            value: '无'
        },
        avatar:{
            type:String,
        },
        userInfo:{
            type:Object,
            value:{
                    nickName:'李江辰',
                    college:'数学与数据科学(软件学院)',
                    introduction:'💙视觉设计｜🧣：LIjiANgChen测试一段中等长度的文案。'
            }
        },
        userFans:{
            type:Object,
            value:{
                fans:0,
                attention:0,
                like:0,
            }
        },
        college:{
            type:String,
            value:'无认证'
        }
    },
    /**
     * 组件的初始数据
     */
    data: {

    },
    /**
     * 组件的方法列表
     */
    methods: {
        goToAttention(){wx.navigateTo({url: '../my/fans/fans?title='+'李江辰',})},
        goToFans(){wx.navigateTo({url: '../my/fans/fans?title='+'李江辰',})},
        
    },
    options: {
        addGlobalClass: true
    }
})
