//index.js
//获取应用实例
const app = getApp()
var height
var weight
var bmiBack //bmi指数，用于后台计算
//以下为每项成绩
var bmiMark = 0, lungMark = 0, sitReachMark = 0, jumpMark = 0, shortRunMark = 0, longRunMark = 0, upMark = 0
Page({
  data: {
    bmi:['0'],
    bmiC:['低体重'],
    mark:['0'],
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
    if (app.gender == 'girl') {
      console.log(app.gender);
      this.setData({
        'listData[6].project': "800米跑",
        'listData[7].project': "仰卧起坐"
      })
    } else {
      console.log(app.gender);
      this.setData({
        'listData[6].project': "1000米跑",
        'listData[7].project': "引体向上"
      })
    }
  },
  //获取年级
  radioChange2: function (e) {
    app.grade = e.detail.value;
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
  //获取输入的指标信息
  getInput: function (e) {
    console.log(e);
    let x = e.currentTarget.dataset.name;
    if (app.gender == 'girl') {
      switch (x) {
        case 1:
          height = e.detail.value;
          this.dealBMIGirl ();
          break;
        case 2:
          weight = e.detail.value;
          this.dealBMIGirl ();
          break;
        case 3:
          this.dealLungCapicityGirl (e.detail.value);
          break;
        case 4:
          this.dealSitReachGirl (e.detail.value);
          break;
        case 5:
          this.dealJumpGirl (e, detail.value);
          break;
        case 6:
          this.deal50Girl (e.detail.value);
          break;
        case 7:
          this.deal800 (e.detail.value);
          break;
        case 8:
          this.dealSitUp (e.detail.value);
          break;
      }
    } else {
      switch (x) {
        case 1:
          height = e.detail.value;
          this.dealBMIBoy ();
          break;
        case 2:
          weight = e.detail.value;
          this.dealBMIBoy ();
          break;
        case 3:
          this.dealLungCapicityBoy (e.detail.value);
          break;
        case 4:
          this.dealSitReachBoy (e.detail.value);
          break;
        case 5:
          this.dealJumpBoy (e,detail.value);
          break;
        case 6:
          this.deal50Boy (e.detail.value);
          break;
        case 7:
          this.deal1000 (e.detail.value);
          break;
        case 8:
          this.dealPullUp (e.detail.value);
          break;
      }
    }
  },
  //开始处理数据...
  dealBMIGirl: function () {
    if ( height&&weight ) {
      bmiBack = (weight / Math.pow(height / 100, 2)).toFixed(1);
      this.setData({
        bmi : bmiBack
      })
    }
    if (bmiBack <= 17.1) {
      bmiMark = 80 * 0.15
      this.setData({
        mark : bmiMark + lungMark + sitReachMark + jumpMark + shortRunMark + longRunMark + upMark,
        bmiC : '低体重'
      })
    } else if (bmiBack > 17.1 && bmiBack <= 23.9) {
      bmiMark = 100 * 0.15
      this.setData({
        mark: bmiMark + lungMark + sitReachMark + jumpMark + shortRunMark + longRunMark + upMark,
        bmiC: '正常'
      })
    } else if (bmiBack > 23.9 && bmiBack <= 27.9) {
      bmiMark = 80 * 0.15
      this.setData({
        mark: bmiMark + lungMark + sitReachMark + jumpMark + shortRunMark + longRunMark + upMark,
        bmiC: '超重'
      })
    } else if (bmiBack > 27.9) {
      bmiMark = 60 * 0.15
      this.setData({
        mark: bmiMark + lungMark + sitReachMark + jumpMark + shortRunMark + longRunMark + upMark,
        bmiC: '肥胖'
      })
    }
  },
  dealBMIBoy: function () {
    if (height && weight) {
      bmiBack = (weight / Math.pow(height / 100, 2)).toFixed(1);
      this.setData({
        bmi: bmiBack
      })
    }
    if (bmiBack <= 17.8) {
      bmiMark = 80 * 0.15
      this.setData({
        mark: bmiMark + lungMark + sitReachMark + jumpMark + shortRunMark + longRunMark + upMark,
        bmiC: '低体重'
      })
    } else if (bmiBack > 17.8 && bmiBack <= 23.9) {
      bmiMark = 100 * 0.15
      this.setData({
        mark: bmiMark + lungMark + sitReachMark + jumpMark + shortRunMark + longRunMark + upMark,
        bmiC: '正常'
      })
    } else if (bmiBack > 23.9 && bmiBack <= 27.9) {
      bmiMark = 80 * 0.15
      this.setData({
        mark: bmiMark + lungMark + sitReachMark + jumpMark + shortRunMark + longRunMark + upMark,
        bmiC: '超重'
      })
    } else if (bmiBack > 27.9) {
      bmiMark = 60 * 0.15
      this.setData({
        mark: bmiMark + lungMark + sitReachMark + jumpMark + shortRunMark + longRunMark + upMark,
        bmiC: '肥胖'
      })
    }
  }, 
  dealLungCapicityGirl: function (n) {
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
  }
})
