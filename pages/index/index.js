//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    items: [
      { name: 'boy', value: '男' },
      { name: 'girl', value: '女' }
    ],
    items2: [
      { name: '1', value: '大一' },
      { name: '1', value: '大二' },
      { name: '2', value: '大三' },
      { name: '3', value: '大四' }
    ],
    listData: [
      { "project": "身高", "unit": "cm" },
      { "project": "体重", "unit": "kg" },
      { "project": "肺活量", "unit": "" },
      { "project": "坐位体前屈", "unit": "cm" },
      { "project": "跳远", "unit": "cm" },
      { "project": "50米跑", "unit": "秒" },
      { "project": "1000米跑", "unit": "秒" },
      { "project": "引体向上", "unit": "个" },
    ]
  },
  //性别判定
  radioChange1: function (e) {
    console.log(e);
    app.gender = e.detail.value;
    if (app.gender == 'boy'){
      console.log(app.gender);
      this.setData({
        'listData[6].project': "1000米跑",
        'listData[7].project': "引体向上"
      })
    } else {
      console.log(app.gender);  
      this.setData({
        'listData[6].project' : "800米跑",
        'listData[7].project' : "仰卧起坐" 
      })
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
