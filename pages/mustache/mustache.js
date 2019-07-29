// pages/mustache/mustache.js
Page({
  data: {
    firstname:"尼古拉斯",
    lastname:'赵四',
    age:41,
    nowDate:new Date().toLocaleString(),
    isActive:false,
    num:0,
    colorList:['red','green','blue','black','orange'],
    colorIndex:0,
    randomColor:'red',
    score:60,
    nums:[
      [1,2,3,4],
      [11,22,33,44],
      [111,222,333,444]
    ],
    letters:['a','b','c']

  },
  onLoad(){
    setInterval(
      ()=>{
        this.setData({
          nowDate: new Date().toLocaleString()
        })
      }
      ,1000)
  },
  handlerSwitchColor(){
    this.data.num+=1;
    if (this.data.num %2 ==0){
      this.setData({
        isActive: true
      })
    }else{
      this.setData({
        isActive: false
      })
    }
    // console.log(this.data.num)
  },
  handlerRandomColor(){
    this.data.colorIndex = parseInt(Math.random() * 5) ;
      this.setData({
        randomColor: "'" + this.data.colorList[this.data.colorIndex] + "'",
      })
      console.log(this.data.randomColor)
  }
})