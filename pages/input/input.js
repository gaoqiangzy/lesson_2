// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputText:''
  },
 
  handerBindInput:function(res){
    // console.log(res)
    // console.log(this)
    this.setData({
      inputText:res.detail["value"]
    })
  },
  handerBindFocus:()=>{
    // console.log("input获取焦点")
  },
  handerBindBlur(){
    // console.log("失去焦点")
    // console.log(this)
    this.setData({
      inputText:''
    })
  }
})