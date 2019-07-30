// componnents/practice-tabbar/practice-tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentindex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleitemclick(e){

      //获取index
      const index = e.currentTarget.dataset.index
      //修改currentindex
      this.setData({
        currentindex:index
      })

      //通知页面内部的点击事件
      this.triggerEvent('handleitemclick', { index: index, item: this.properties.titles[index]},{})
    }

  },
})
