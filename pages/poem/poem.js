Page({
  data: {
    poem: {
      title: null,
      poet: null,
      poemone: null,
      poemtwo: null,
      poemthree: null,
      poemfour: null
    },
    coll: [],
    collList: [],
    id: '',
    collStorage: [],
    collId: '',
    isCollect: false
  },
  onLoad: function (options) {
    var that = this;
    var poemData = JSON.parse(options.poemData);
    that.setData({
      poem : poemData
    })
    console.log(that.poem);//自己查查为什么这地方在setData后是undefined，睡着了？？？？？？
  },
  collect() {
    if(this.data.isCollect===false) {
      let collData = this.data.collStorage;
      collData.push({
        collid: collData.length,
        id: this.data.coll.id
      })
      wx.setStorageSync('collData', collData);//设置缓存
      wx.showToast({
        title: '已收藏',
      })
    }else
      wx.showToast({
        title: '已取消收藏',
      })
    this.setData({
      isCollect: !this.data.isCollect
    })
  }
})