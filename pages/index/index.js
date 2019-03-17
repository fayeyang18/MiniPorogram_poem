//index.js
//获取应用实例
const app = getApp();
const util = require("../../utils/util.js");

// Page({
//   data: {
//     motto: '点击头像登录',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })
Page({
  data: {
    poem: {
      title: '秋思',
      poet: '宋·陆游',
      poemone: '利欲驱人万火牛，江湖浪迹一沙鸥。',
      poemtwo: '日长似岁闲方觉，事大如天醉亦休。',
      poemthree: '衣杵相望深巷月，井桐摇落故园秋。',
      poemfour: '欲舒老眼无高处，安得元龙百尺楼。'
    }
  },
  onLoad: function () {
    var DATE = util.formatTime(new Date());
    this.setData({
      date: DATE,
    });
  },
  intoPoem() {
  var that = this;
  var poemData = JSON.stringify(that.data.poem); 
    wx.navigateTo({
      url: '../poem/poem?poemData='+poemData    
    })
  }
})