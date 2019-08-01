// pages/navigator/navigator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'哈哈哈'
  },

  handleBtnNgt(){
    wx.navigateTo({
      url: '/pages/home/home',
    })
  }
})