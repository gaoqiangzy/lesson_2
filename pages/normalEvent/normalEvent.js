// pages/normalEvent/normalEvent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      clothes:['上衣','裤子','鞋子']
  },

  handlebtnclick(){
    console.log('按钮被点击了')
  },
  bindtouchstart(){
    console.log("手指触摸动作开始")
  },
  bindtouchmove() {
    console.log("手指触摸后移动")
  },
  bindtouchend() {
    console.log("手指触摸动作结束")
  },
  bindtouchcancel() {
    console.log("手指触摸动作被打断（弹窗、来电）")
  },
  bindtap() {
    console.log("手指触摸后马上离开")
  },
  bindlongtap() {
    console.log("手指触摸屏幕后超过350ms")
  },
  handleeventclick(event){
    console.log('bindtap',event)
  },
  handleeventend(event){
    console.log('bindtouchend',event)
  },
  handleoutter(event){
    console.log("outter",event)
  },
  handleinner(event){
    console.log("inner",event)
  },
  handleitemclick(event){
    console.log(event)
    const dataset = event.currentTarget.dataset
    const index = dataset.index
    const item = dataset.item
    console.log(index+'---'+item)

  }
})