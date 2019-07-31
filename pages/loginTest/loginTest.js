// pages/loginTest/loginTest.js
const TOKEN = 'token'
Page({

  globalData:{
    token:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //1.先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)
    //2. 判断token是否有值
    if(token && token.length !==0){
      //验证token是否过期
      this.check_token(token)
    }else{
      // 登录操作
      this.login()
    }
  },

  //验证token是否否过期
  check_token(token){
    console.log('执行了验证token操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header:{
        token:token
      },
      success:(res)=>{
        console.log(123)
        console.log(res)
        if(!res.data.errCode){
          this.globalData.token=token;
        }else{
          this.login()
        }
      },
      fail:function(err){
        console.log(err)
      }
    })
  },

  //登录函数
  login(){
    console.log('执行了登录操作')
    wx.login({
      success: (res) => {
        //code只有5分钟有效期
        const code = res.code;

        //将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code: code
          },
          success: (res) => {
            // 取出token
            const token = res.data.token;
            //将token保存到globalData中
            this.globalData.token = token;
            //进行本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }
})