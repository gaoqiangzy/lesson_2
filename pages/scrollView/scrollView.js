// pages/scrollView/scrollView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handlerScroll(event){
    // 检测滚动属性
    console.log(event)
    //检测滚动相对位置
    console.log(event.detail)  
  },
  handlerScrollUpper(){
    console.log('滚动到顶部')
  },
  handlerScrollLower(){
    console.log('滚动到底部')
  }
  
})