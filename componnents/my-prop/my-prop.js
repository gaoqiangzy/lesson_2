// componnents/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // title:String  第一种写法，必须传入值，

    //这种写法，当用户没有手动传入值时，显示默认值
    //observer()可以查看值的变化，既可以得到旧值，也能得到新值
    title:{
      type:String,
      value:"我是默认的标题",
      observer:function(newval,oldval){
      }
    }
  },
  externalClasses:['titleclass']

 
})
