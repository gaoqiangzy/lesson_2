// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options)
  },
  onUnload:function(){
    //进行页面返回操作时回来到这个函数
    //getCurrentPages 从栈中获取所有活跃的页面
    const pages = getCurrentPages()
    const navigatorPage = pages[0]
    navigatorPage.setData({
      title:'嘿嘿嘿'
    })
  }

 
})