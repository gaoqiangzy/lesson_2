//index.js


//获取应用实例
Page({
  data: {
    msg:"hello world",
    students:[
      {id:1,name:'張三',gender:'男'},
      { id: 2, name: '李四', gender: '女' },
      { id: 3, name: '王二', gender: '男' },
      { id: 4, name: '麻子', gender: '女' }
      ],
      count:1,
      list:[]
  },
  handleViewClick(){
    console.log("被点击了！！！")
  },
  add:function(){
    this.setData({
      count:this.data.count +1
    })
  },
  reduce(){
   this.setData({
     count:this.data.count -1
   })
  },

  onLoad(){
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success:(res)=>{
        const data = res.data.data.list
        this.setData({
          list:data
        })
      }
    })
  },
  // 监听页面滚动
  onPageScroll(obj){
    // console.log(obj)
  },
  onReachBottom(){
    // console.log("页面滚动到底部")
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // console.log("下拉刷新")
  },
  onTabItemTap(item) {
    // console.log(item.index)
    // console.log(item.pagePath)
    // console.log(item.text)
  }
 
}
)


