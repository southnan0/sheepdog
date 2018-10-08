const {add} = require("../../../utils/number.js")

// component/form/input-number/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      size: String,
      value: {
          type: Number,
          value: 1
      },
      min: {
          type: Number,
          value: -Infinity
      },
      max: {
          type: Number,
          value: Infinity
      },
      step: {
          type: Number,
          value: 1
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
      handleChangeStep(e, type){
          const {dataset={}} = e.currentTarget;
          const {disabled} = dataset;

          if(disabled) return;

          const {step} = this.data;
          let {value} = this.data;

          if(type === 'minus'){
            value = add(value,-step);
          }else if(type === 'plus'){
            value = add(value,step);
          }

        if (value < this.data.min || value > this.data.max) return null;
        this.handleEmit(value,type);
      },
      handleMinus(e){
          this.handleChangeStep(e,'minus');
      },
      handlePlus(e) {
          this.handleChangeStep(e, 'plus');
      },
      handleBlur(e){
          let { value } = e.detail;
          const { min, max } = this.data;

          if (!value) {
              setTimeout(() => {
                  this.handleEmit(value);
              }, 16);
              return;
          }

          value = +value;
          if (value > max) {
              value = max;
          } else if (value < min) {
              value = min;
          }

          this.handleEmit(value);
      },
      handleEmit(value,type){
        const data = {
          value
        };

        if(type){
          data.type = type
        }

        this.triggerEvent('change',data);
      }
  }
})
