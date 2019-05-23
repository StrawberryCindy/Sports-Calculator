//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')
var bmi, bmiC
var bmiMark = 0, lungMark = 0, reachMark = 0, jumpMark = 0, shortRunMark = 0, longRunMark = 0, upMark = 0;

Page({
  data: {
    bmi:['0'],
    bmiC:['低体重'],
    mark:['0.0'],
    items: [
      { name: 'boy', value: '男' },
      { name: 'girl', value: '女' }
    ],
    items2: [
      { name: '1', value: '大一' },
      { name: '2', value: '大二' },
      { name: '3', value: '大三' },
      { name: '4', value: '大四' }
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
    if (app.gender == 'girl') {
      this.setData({
        'listData[6].project': "800米跑",
        'listData[7].project': "仰卧起坐"
      })
    } else {
      this.setData({
        'listData[6].project': "1000米跑",
        'listData[7].project': "引体向上"
      })
    }
  },
  //获取年级
  radioChange2: function (e) {
    app.grade = parseInt(e.detail.value);
  },
  //事件处理函数(原程序自带)
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
  //获取当前用户输入的指标信息,并动态改变页面内容
  getInput: function (e) {
    console.log(e);
    let x = e.currentTarget.dataset.name;
    if (app.gender == 'girl') {
      switch (x) {
        case 1:
          app.height = parseInt (e.detail.value);
          bmi = util.dealBMI()
          bmiMark = util.dealBMIMarkG(bmi)[0]
          bmiC = util.dealBMIMarkG(bmi)[1]
          console.log(bmiMark)
          break;
        case 2:
          app.weight = parseInt (e.detail.value)
          bmi = util.dealBMI ()
          bmiMark = util.dealBMIMarkG (bmi)[0]
          bmiC = util.dealBMIMarkG (bmi)[1]
          break;
        case 3:
          lungMark = util.dealLungCapicityG (parseInt(e.detail.value));
          break;
        case 4:
          reachMark = util.dealSitReachG (parseInt(e.detail.value));
          break;
        case 5:
          jumpMark = util.dealJumpG (parseInt(e.detail.value));
          break;
        case 6:
          shortRunMark = util.deal50G (parseInt(e.detail.value));
          break;
        case 7:
          longRunMark = util.deal800(parseInt(e.detail.value));
          break;
        case 8:
          upMark = util.dealSitUp(parseInt(e.detail.value));
          break;
      }
    } else {
      switch (x) {
        case 1:
          app.height = parseInt (e.detail.value);
          bmi = util.dealBMI()
          bmiMark = util.dealBMIMarkB (bmi)[0]
          bmiC = util.dealBMIMarkB (bmi)[1]
          break;
        case 2:
          app.weight = parseInt (e.detail.value)
          bmi = util.dealBMI ()
          bmiMark = util.dealBMIMarkB (bmi)[0]
          bmiC = util.dealBMIMarkB (bmi)[1]
          break;
        case 3:
          lungMark = util.dealLungCapicityB(parseInt(e.detail.value));
          break;
        case 4:
          reachMark = util.dealSitReachB(parseInt(e.detail.value));
          break;
        case 5:
          jumpMark = util.dealJumpB(parseInt(e.detail.value));
          break;
        case 6:
          shortRunMark = util.deal50B(parseInt(e.detail.value));
          break;
        case 7:
          longRunMark = util.deal1000(parseInt(e.detail.value));
          break;
        case 8:
          upMark = util.dealPullUp(parseInt(e.detail.value));
          break;
      }
    }
    this.setData ({
      bmi: bmi,
      bmiC : bmiC,
      mark: (bmiMark + lungMark + reachMark + jumpMark + shortRunMark + longRunMark + upMark).toFixed(1)
    })
  }
})
