// pages/dialog/dialog.js
Page({

  handleShowToast(){
    wx.showToast({
      title: '加载中。。。',
      icon:'loading',
      duration:3000,
      // 添加mask后，弹出弹窗时，界面无法被操作
      mask:true,
      success(){
        console.log('弹窗展示成功')
      },
      fail(){
        console.log('弹窗展示失败')
      },
      complete(){
        console.log('点击后，complete（）立马调用，并非等图标结束后调用')
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '标题',
      content: '内容',
      // 设置取消按钮的文本
      cancelText:'反悔',
      // 设置取消按钮的文本颜色
      cancelColor:'#ff5777',
      success(res){
        console.log(res)
        if(res.cancel ){
          console.log('用户点击了取消')
        }if(res.confirm){
          console.log('用户点击了确定')
        }
      }
    })
  },
  // showLoading 出现一个加载的图标，需要手动隐藏，不然一直加载
  handleShowLoading(){
    wx.showLoading({
      title: '加载ing',
      mask:true
    }),
    setTimeout(function(){
      wx.hideLoading()
    },3000)
  },

  handleShowActionSheet(){
    wx.showActionSheet({
      itemList:['相册','拍照','视频'],
      itemColor:'#ff5777',
     success(res){
      switch(res.tapIndex){
        case 0:
        console.log('点击了相册')
        break;
        case 1:
        console.log("点击了拍照")
        break;
        case 2:
        console.log('点击了视频')
        break;
      }
     },
     fail(err){
       console.log(err.errMsg)
     }
    })
  }
})