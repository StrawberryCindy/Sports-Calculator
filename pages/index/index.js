//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')
var bmi = 0, bmiC = '低体重'
var longRunMinute = 100, longRunSecond = 100
var lungVolume = 0, reachPosition = -20, jump = 0, shortRun = 100, up = 0 
Page({
  data: {
    bmi:['0'],
    bmiC:['低体重'],
    mark:['0.0'],
    items: [
      { name: 'boy', value: '男', checked:"true"},
      { name: 'girl', value: '女' }
    ],
    items2: [
      { name: '1', value: '大一', checked: "true" },
      { name: '2', value: '大二' },
      { name: '3', value: '大三' },
      { name: '4', value: '大四' }
    ],
    listData: [
      { "id": 1, "project": "身高", "unit": "cm" },
      { "id": 2, "project": "体重", "unit": "kg" },
      { "id": 3, "project": "肺活量", "unit": "" },
      { "id": 4, "project": "坐位体前屈", "unit": "cm" },
      { "id": 5, "project": "跳远", "unit": "cm" },
      { "id": 6, "project": "50米跑", "unit": "秒" },
      { "id1": 7, "id2":8, "project": "1000米跑", "unit1": "分","unit2":"秒" },
      { "id": 9, "project": "引体向上", "unit": "个" },
    ]
  },
  //性别判定 重新计算
  radioChange1: function (e) {
    console.log(e);
    app.gender = e.detail.value;
    if (app.gender == 'girl') {
      this.setData({
        'listData[6].project': "800米跑",
        'listData[7].project': "仰卧起坐"
      })
      bmi = util.dealBMI()
      app.globalData.bmiMark = util.dealBMIMarkG(bmi)[0]
      bmiC = util.dealBMIMarkG(bmi)[1]
      app.globalData.lungMark = util.dealLungCapicityG(lungVolume);
      app.globalData.reachMark = util.dealSitReachG(reachPosition);
      app.globalData.jumpMark = util.dealJumpG(jump);
      app.globalData.shortRunMark = util.deal50G(shortRun);
      app.globalData.longRunMark = util.deal800(longRunMinute, longRunSecond);
      app.globalData.upMark = util.dealSitUp(up);
    } else {
      this.setData({
        'listData[6].project': "1000米跑",
        'listData[7].project': "引体向上"
      })
      bmi = util.dealBMI()
      app.globalData.bmiMark = util.dealBMIMarkB(bmi)[0]
      bmiC = util.dealBMIMarkB(bmi)[1]
      app.globalData.lungMark = util.dealLungCapicityB(lungVolume);
      app.globalData.reachMark = util.dealSitReachB(reachPosition);
      app.globalData.jumpMark = util.dealJumpB(jump);
      app.globalData.shortRunMark = util.deal50B(shortRun);
      app.globalData.longRunMark = util.deal1000(longRunMinute, longRunSecond);
      app.globalData.upMark = util.dealPullUp(up);
     
    }
    console.log(bmi, app.globalData.bmiMark, bmiC, app.globalData.lungMark, app.globalData.reachMark, app.globalData.jumpMark, app.globalData.shortRunMark, app.globalData.longRunMark, app.globalData.upMark)
    this.setData({
      bmi: bmi,
      bmiC: bmiC,
      mark: (app.globalData.bmiMark + app.globalData.lungMark + app.globalData.reachMark + app.globalData.jumpMark + app.globalData.shortRunMark + app.globalData.longRunMark + app.globalData.upMark).toFixed(1)
    })
  },
  //获取年级 重新计算
  radioChange2: function (e) {
    app.grade = parseInt(e.detail.value);
    if (app.gender == 'girl') {
      bmi = util.dealBMI()
      util.dealBMIMarkG(bmi)[0]
      bmiC = util.dealBMIMarkG(bmi)[1]
      app.globalData.lungMark = util.dealLungCapicityG(lungVolume);
      app.globalData.reachMark = util.dealSitReachG(reachPosition);
      app.globalData.jumpMark = util.dealJumpG(jump);
      app.globalData.shortRunMark = util.deal50G(shortRun);
      app.globalData.longRunMark = util.deal800(longRunMinute, longRunSecond);
      app.globalData.upMark = util.dealSitUp(up);
    } else {
      bmi = util.dealBMI()
      app.globalData.bmiMark = util.dealBMIMarkB(bmi)[0]
      bmiC = util.dealBMIMarkB(bmi)[1]
      app.globalData.lungMark = util.dealLungCapicityB(lungVolume);
      app.globalData.reachMark = util.dealSitReachB(reachPosition);
      app.globalData.jumpMark = util.dealJumpB(jump);
      app.globalData.shortRunMark = util.deal50B(shortRun);
      app.globalData.longRunMark = util.deal1000(longRunMinute, longRunSecond);
      app.globalData.upMark = util.dealPullUp(up);
    }
    console.log(bmi, app.globalData.bmiMark, bmiC, app.globalData.lungMark, app.globalData.reachMark, app.globalData.jumpMark, app.globalData.shortRunMark, app.globalData.longRunMark, app.globalData.upMark)
    this.setData({
      bmi: bmi,
      bmiC: bmiC,
      mark: (app.globalData.bmiMark + app.globalData.lungMark + app.globalData.reachMark + app.globalData.jumpMark + app.globalData.shortRunMark + app.globalData.longRunMark + app.globalData.upMark).toFixed(1)
    })
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
          app.globalData.height = parseInt (e.detail.value);
          bmi = util.dealBMI()
          app.globalData.bmiMark = util.dealBMIMarkG(bmi)[0]
          bmiC = util.dealBMIMarkG(bmi)[1]
          console.log(app.globalData.bmiMark)
          break;
        case 2:
          app.globalData.weight = parseInt (e.detail.value)
          bmi = util.dealBMI ()
          app.globalData.bmiMark = util.dealBMIMarkG (bmi)[0]
          bmiC = util.dealBMIMarkG (bmi)[1]
          break;
        case 3:
          lungVolume = parseInt(e.detail.value);
          app.globalData.lungMark = util.dealLungCapicityG (lungVolume);

          break;
        case 4:
          reachPosition = parseInt(e.detail.value);
          app.globalData.reachMark = util.dealSitReachG (reachPosition);
          break;
        case 5:
          jump = parseInt(e.detail.value);
          app.globalData.jumpMark = util.dealJumpG (jump);
          break;
        case 6:
          shortRun = parseInt(e.detail.value);
          app.globalData.shortRunMark = util.deal50G (shortRun);
          break;
        case 7:
          longRunMinute = parseInt(e.detail.value);
          app.globalData.longRunMark = util.deal800(longRunMinute, longRunSecond);
          break;
        case 8:
          longRunSecond = parseInt(e.detail.value);
          app.globalData.longRunMark = util.deal800(longRunMinute, longRunSecond);
          break;
        case 9:
          up = parseInt(e.detail.value);
          app.globalData.upMark = util.dealSitUp(up);
          break;
      }
    } else {
      switch (x) {
        case 1:
          app.globalData.height = parseInt (e.detail.value);
          bmi = util.dealBMI()
          app.globalData.bmiMark = util.dealBMIMarkB (bmi)[0]
          bmiC = util.dealBMIMarkB (bmi)[1]
          break;
        case 2:
          app.globalData.weight = parseInt (e.detail.value)
          bmi = util.dealBMI ()
          app.globalData.bmiMark = util.dealBMIMarkB (bmi)[0]
          bmiC = util.dealBMIMarkB (bmi)[1]
          break;
        case 3:
          lungVolume = parseInt(e.detail.value);
          app.globalData.lungMark = util.dealLungCapicityB(lungVolume);
          console.log(app.globalData.lungMark)
          break;
        case 4:
          reachPosition = parseInt(e.detail.value);
          app.globalData.reachMark = util.dealSitReachB(reachPosition);
          break;
        case 5:
          jump = parseInt(e.detail.value);
          app.globalData.jumpMark = util.dealJumpB(jump);
          break;
        case 6:
          shortRun = parseInt(e.detail.value);
          app.globalData.shortRunMark = util.deal50B(shortRun);
          break;
        case 7:
          longRunMinute = parseInt(e.detail.value);
          app.globalData.longRunMark = util.deal1000(longRunMinute, longRunSecond);
          break;
        case 8:
          longRunSecond = parseInt(e.detail.value);
          app.globalData.longRunMark = util.deal1000(longRunMinute, longRunSecond);
          break;
        case 9:
          up = parseInt(e.detail.value);
          app.globalData.upMark = util.dealPullUp(up);
          break;
      }
    }
    console.log(bmi, app.globalData.bmiMark, bmiC, app.globalData.lungMark, app.globalData.reachMark, app.globalData.jumpMark, app.globalData.shortRunMark, app.globalData.longRunMark, app.globalData.upMark)
    this.setData ({
      bmi: bmi,
      bmiC : bmiC,
      mark: (app.globalData.bmiMark + app.globalData.lungMark + app.globalData.reachMark + app.globalData.jumpMark + app.globalData.shortRunMark + app.globalData.longRunMark + app.globalData.upMark).toFixed(1)
    })
  },
  logDetail: function(options){
    wx.navigateTo({
      url: '../detail/detail?upC=' + this.data.listData[7].project,
    })
  }
})
