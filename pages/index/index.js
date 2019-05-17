//index.js
//获取应用实例
const app = getApp()
var height;
var weight;
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
      { "id": 1,"project": "身高", "unit": "cm" },
      { "id": 2,"project": "体重", "unit": "kg" },
      { "id": 3,"project": "肺活量", "unit": "" },
      { "id": 4,"project": "坐位体前屈", "unit": "cm" },
      { "id": 5,"project": "跳远", "unit": "cm" },
      { "id": 6,"project": "50米跑", "unit": "秒" },
      { "id": 7,"project": "1000米跑", "unit": "秒" },
      { "id": 8,"project": "引体向上", "unit": "个" },
    ]
  },
  //性别判定
  radioChange1: function (e) {
    console.log(e);
    app.gender = e.detail.value;
    if (app.gender == 'boy') {
      console.log(app.gender);
      this.setData({
        'listData[6].project': "1000米跑",
        'listData[7].project': "引体向上"
      })
    } else {
      console.log(app.gender);
      this.setData({
        'listData[6].project': "800米跑",
        'listData[7].project': "仰卧起坐"
      })
    }
  },
  //年级判断
  radioChange2: function (e) {
    app.grade = e.detail.value;
    switch (app.grade) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
    }
  },
  //事件处理函数
  bindViewTap: function () {
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
    } else if (this.data.canIUse) {
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
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //获取输入的指标信息（男
  getInput: function (e) {
    console.log(e);
    let x = e.currentTarget.dataset.name;
    switch (x) {
      case 1:
        height = e.detail.value;
        break;
      case 2:
        weight = e.detail.value;
        break;
      case 3:
        this.dealLungCapicity (e.detail.value);
        break;
      case 4:
        this.dealSitReach (e.detail.value);
        break;
      case 5:
        this.dealJump (e,detail.value);
        break;
      case 6:
        this.deal50 (e.detail.value);
        break;
      case 7:
        this.deal1000 (e.detail.value);
        break;
      case 8:
        this.dealUp (e.detail.value);
        break;
    }
  }
})
