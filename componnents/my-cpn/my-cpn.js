// componnents/my-cpn/my-cpn.js
Component({
  /**
   * 使用者(页面，组件)可以传递数据到这里
   */
  properties: {
    title:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    counter:0,
    info:{
      name:"zhangsan",
      age:21
    },
    nums:[1,2,3]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    incrament(e){
      this.setData({
        counter:++this.data.counter,
        'info.age':200,
        'nums[2]':123
      })
    }
  },

  // 监听属性
  observers:{
    counter:function(newvalue){
      console.log(newvalue)
    },
    'info.age':function(newvalue){
      console.log(newvalue)
    }
  },

  //options :一些特殊选项
  options:{
    styleIsolation:'shared',//组件和页面样式共享
    multipleSlots:true  //组件内包含多个插槽
  },

  //引用外部的类
  externalClasses:[],

  //组件中监听生命周期函数

  //1. 监听所在页面的生命周期
  pageLifetimes:{

    show(){
      console.log('监听组件所在页面显示出来时')
    },
    hide(){
      console.log('监听组件所在页面隐藏时')
    },
    resize(){
      console.log('监听组件所在页面尺寸改变')
    }
  },

  //2. 监听组件本身的生命周期

  lifetimes:{
    created(){
      console.log('组件被创建出来')
    },
    attached(){
      console.log('组件被添加到页面')
    },
    ready(){
      console.log('组件被渲染出来')
    },
    moved(){
      console.log('组件被移动到其它节点')
    },
    detached(){
      console.log('被从页面或组件中移除')
    }
  }
})
