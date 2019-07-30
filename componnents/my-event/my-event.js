// componnents/my-event/my-event.js
Component({
  /**
   * 组件的属性列表
   */
 
  /**
   * 组件的方法列表
   */
  methods:{
    handleincrement(){
      // triggerEvent('传出函数的名字'，{参数}，{额外的选项})
      this.triggerEvent('increment',{name:'张三',age:21},{})
    }
  }
})
