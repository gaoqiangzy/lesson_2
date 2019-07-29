// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:''
  },

  handleChooseImage(){
    // 让用户选择图片
    wx.chooseImage({
      success: (res)=> {
        this.setData({
          imagePath:res.tempFilePaths[0]
        })
      },
    })
  },
  
  handleLoadImage(){
    console.log('图片加载完成')
  }
})