//注冊小程序實例
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次） 初始化完成后，2h再次打开小程序并不会再次初始化
   */
  onLaunch: function () {
    console.log("小程序初始化完成")

    // setTimeout(function(){
    //   const err =new Error()
    //   throw err
    // },3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow,每次进入小程序都会触发
   */
  onShow: function (options) {
    console.log("界面显示出来")
    //1.0 判断小程序进入场景
    console.log(options)
    switch(options.scene){
      case 1001:
        console.log("发现栏小程序主入口")
      case 1005:
        console.log("顶部搜索栏搜索结果页")
    }
    //1.1 获取用户信息
    wx.getUserInfo({
      success:function(reg){
        console.log(reg)
      }
    })

    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("界面隐藏")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("小程序脚本出错")
  },
  //声明全局属性
  globalData:{
    name:'万一啊',
    age:23
  }
})
