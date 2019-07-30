// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    msg:''
  },

  /**
   * 生命周期函数--监听页面加载
   * 通过event来获取my-event组件中事件传出来的数据
   */
  handleincrement(event){
    console.log(event.detail.name,'-----',event.detail.age)
    this.setData({
      num: this.data.num + 1
    })
  },

  handleitemclick(e){
    console.log(e.detail.index,'--',e.detail.item)
    const index = e.detail.index
    const item = e.detail.item
    this.setData({
      msg:'序号:'+index+item+'被点击了' 
    })
  },

  handelincrementcpn(){
    //1. 通过.类名、#id名获取my-select组件对象
    const my_sel = this.selectComponent('.select-class')
    //2. 通过setData修改组件数据 (不推荐这种直接修改组件内部数据的方式)
    // my_sel.setData({
    //   counter:my_sel.data.counter +1
    // })

    //3.通过方法对数据进行修改
    my_sel.incrementCounter()
  }
})