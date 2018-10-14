// component/project/collapse-card/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        data: {
            type: Object,
            value: {}
        },
        active:{
            type:Boolean,
            value:false
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        classPrefix: 'collapse-card'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleCollapse(){
            this.setData({
                active:!this.data.active
            })
        }
    },
    created(){
        console.info(this.data)
    }
})
