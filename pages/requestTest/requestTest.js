// pages/request/request.js
import requestWrap from "../../utils/requestutil.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //------------------1原生发送网络请求------------------------
    // this.get_data_origin()

    //----------------2.使用封装的request发送网络请求-------------
    requestWrap({
      url:'http://123.207.32.32:8000/recommend',
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })

    // requestWrap({
    //   url:'http://httpbin.org/post',
    //   data:{
    //     name:'lisi',
    //     age:21
    //   },
    //   method: 'post',
    // })).then(res=>{
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })
  }
  // get_data_origin(){
     // 1. 最简单的请求
     // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //     success:(res)=>{
    //       console.log(res)
    //       const data = res.data.data.list
    //       this.setData({
    //         list:data
    //       })
    //     }
    // })

    //2. get请求带参数
    // wx.request({
    //   url: 'http://123.207.32.32:8000/home/data',
    //   data:{
    //     type:'sell',
    //     page:1
    //   },
    //   success:(res)=>{
    //     console.log(res)
    //     const data=res.data.data.list
    //     this.setData({
    //       list:data
    //     })
    //   }
    // })

    //3.post请求带参数
  //   wx.request({
  //     url: 'http://httpbin.org/post',
  //     method:'post',
  //     data:{
  //       name:'lisi',
  //       age:21
  //     },
  //     success:(res)=>{
  //       console.log(res)
  //     },
  //     fail:(err)=>{
  //       console.log("请求失败")
  //     },
  //     complete:(res)=>{
  //       console.log('request complete')
  //     }
  //   })
  // }

  
})