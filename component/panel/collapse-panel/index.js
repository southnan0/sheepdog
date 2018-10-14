// component/panel/collapse-panel/index.js
Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    /**
     * 组件的属性列表
     */
    properties: {
        line: {
            type: String,
            value: "1"
        },
        open:{
          type:Boolean,
          value:false
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        classPrefix: 'collapse-panel'
    },

    /**
     * 组件的方法列表
     */
    methods: {
      handleCollapse(){
        this.setData({ open: !this.data.open});
      }
    }
})
