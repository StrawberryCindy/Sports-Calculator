//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')
//初始成绩
var bmi = 0, bmiC = '低体重'
var longRunMinute = 100, longRunSecond = 100
var lungVolume = 0, reachPosition = -20, jump = 0, shortRun = 100, up = 0 
//换算成绩初始化
var gender= 'boy', grade= 1, height= 0, weight= 0
//将换算成绩列为数组 bmiMark,lungMark,reachMark,jumpMark,shortRunMark,longRunMark,upMark
var marks = [0,0,0,0,0,0,0]

Page({
  data: {
    bmi:['0'],
    bmiC:['低体重'],
    mark:['0.0'],
    genders: [
      { name: 'boy', value: '男', checked:"true"},
      { name: 'girl', value: '女' }
    ],
    grades: [
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
    gender = e.detail.value;
    if (gender == 'girl') {
      this.setData({
        'listData[6].project': "800米跑",
        'listData[7].project': "仰卧起坐"
      })
      bmi = util.dealBMI(height,weight)
      marks[0] = util.dealBMIMarkG(bmi)[0]
      bmiC = util.dealBMIMarkG(bmi)[1]
      marks[1] = util.dealLungCapicityG(lungVolume, grade);
      marks[2] = util.dealSitReachG(reachPosition, grade);
      marks[3] = util.dealJumpG(jump, grade);
      marks[4] = util.deal50G(shortRun, grade);
      marks[5] = util.deal800(longRunMinute, longRunSecond,grade);
      marks[6] = util.dealSitUp(up, grade);
    } else {
      this.setData({
        'listData[6].project': "1000米跑",
        'listData[7].project': "引体向上"
      })
      bmi = util.dealBMI(height, weight)
      marks[0] = util.dealBMIMarkB(bmi)[0]
      bmiC = util.dealBMIMarkB(bmi)[1]
      marks[1] = util.dealLungCapicityB(lungVolume, grade);
      marks[2] = util.dealSitReachB(reachPosition, grade);
      marks[3] = util.dealJumpB(jump, grade);
      marks[4] = util.deal50B(shortRun, grade);
      marks[5] = util.deal1000(longRunMinute, longRunSecond,grade);
      marks[6] = util.dealPullUp(up, grade);
     
    }
    console.log(bmi, marks[0], bmiC, marks[1], marks[2], marks[3], marks[4], marks[5], marks[6])
    this.setData({
      bmi: bmi,
      bmiC: bmiC,
      mark: (marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5] + marks[6]).toFixed(1)
    })
  },
  //获取年级 重新计算
  radioChange2: function (e) {
    grade = parseInt(e.detail.value);
    if (gender == 'girl') {
      bmi = util.dealBMI(height, weight)
      util.dealBMIMarkG(bmi)[0]
      bmiC = util.dealBMIMarkG(bmi)[1]
      marks[1] = util.dealLungCapicityG(lungVolume, grade);
      marks[2] = util.dealSitReachG(reachPosition, grade);
      marks[3] = util.dealJumpG(jump, grade);
      marks[4] = util.deal50G(shortRun, grade);
      marks[5] = util.deal800(longRunMinute, longRunSecond,grade);
      marks[6] = util.dealSitUp(up, grade);
    } else {
      bmi = util.dealBMI(height, weight)
      marks[0] = util.dealBMIMarkB(bmi)[0]
      bmiC = util.dealBMIMarkB(bmi)[1]
      marks[1] = util.dealLungCapicityB(lungVolume, grade);
      marks[2] = util.dealSitReachB(reachPosition, grade);
      marks[3] = util.dealJumpB(jump, grade);
      marks[4] = util.deal50B(shortRun, grade);
      marks[5] = util.deal1000(longRunMinute, longRunSecond,grade);
      marks[6] = util.dealPullUp(up, grade);
    }
    console.log(bmi, marks[0], bmiC, marks[1], marks[2], marks[3], marks[4], marks[5], marks[6])
    this.setData({
      bmi: bmi,
      bmiC: bmiC,
      mark: (marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5] + marks[6]).toFixed(1)
    })
  },
  //事件处理函数(原程序自带)
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
   /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  }, 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
 
  //获取当前用户输入的指标信息,并动态改变页面内容
  getInput: function (e) {
    console.log(e);
    let x = e.currentTarget.dataset.name;
    if (gender == 'girl') {
      switch (x) {
        case 1:
          height = parseInt (e.detail.value)
          bmi = util.dealBMI(height, weight)
          marks[0] = util.dealBMIMarkG(bmi)[0]
          bmiC = util.dealBMIMarkG(bmi)[1]
          console.log(marks[0])
          break;
        case 2:
          weight = parseInt (e.detail.value)
          bmi = util.dealBMI(height, weight)
          marks[0] = util.dealBMIMarkG (bmi)[0]
          bmiC = util.dealBMIMarkG (bmi)[1]
          break;
        case 3:
          lungVolume = parseInt(e.detail.value);
          marks[1] = util.dealLungCapicityG (lungVolume, grade);
          break;
        case 4:
          reachPosition = parseInt(e.detail.value);
          marks[2] = util.dealSitReachG (reachPosition, grade);
          break;
        case 5:
          jump = parseInt(e.detail.value);
          marks[3] = util.dealJumpG (jump, grade);
          break;
        case 6:
          shortRun = parseInt(e.detail.value);
          marks[4] = util.deal50G (shortRun, grade);
          break;
        case 7:
          longRunMinute = parseInt(e.detail.value);
          marks[5] = util.deal800(longRunMinute, longRunSecond,grade);
          break;
        case 8:
          longRunSecond = parseInt(e.detail.value);
          marks[5] = util.deal800(longRunMinute, longRunSecond,grade);
          break;
        case 9:
          up = parseInt(e.detail.value);
          marks[6] = util.dealSitUp(up, grade);
          break;
      }
    } else {
      switch (x) {
        case 1:
          height = parseInt (e.detail.value)
          bmi = util.dealBMI(height, weight)
          console.log(bmi)
          marks[0] = util.dealBMIMarkB (bmi)[0]
          bmiC = util.dealBMIMarkB (bmi)[1]
          break;
        case 2:
          weight = parseInt (e.detail.value)
          bmi = util.dealBMI(height, weight)
          marks[0] = util.dealBMIMarkB (bmi)[0]
          bmiC = util.dealBMIMarkB (bmi)[1]
          break;
        case 3:
          lungVolume = parseInt(e.detail.value);
          marks[1] = util.dealLungCapicityB(lungVolume, grade);
          console.log(marks[1])
          break;
        case 4:
          reachPosition = parseInt(e.detail.value);
          marks[2] = util.dealSitReachB(reachPosition, grade);
          break;
        case 5:
          jump = parseInt(e.detail.value);
          marks[3] = util.dealJumpB(jump, grade);
          break;
        case 6:
          shortRun = parseInt(e.detail.value);
          marks[4] = util.deal50B(shortRun, grade);
          break;
        case 7:
          longRunMinute = parseInt(e.detail.value);
          marks[5] = util.deal1000(longRunMinute, longRunSecond,grade);
          break;
        case 8:
          longRunSecond = parseInt(e.detail.value);
          marks[5] = util.deal1000(longRunMinute, longRunSecond,grade);
          break;
        case 9:
          up = parseInt(e.detail.value);
          marks[6] = util.dealPullUp(up, grade);
          break;
      }
    }
    console.log(bmi, marks[0], bmiC, marks[1], marks[2], marks[3], marks[4], marks[5], marks[6])
    this.setData ({
      bmi: bmi,
      bmiC : bmiC,
      mark: (marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5] + marks[6]).toFixed(1)
    })
  },
  /**
   * 页面跳转
   */
  logDetail: function(options){
    var markArray = JSON.stringify(marks)
    wx.navigateTo({
      url: 'detail/detail?upC=' + this.data.listData[7].project + '&longRun=' + this.data.listData[6].project + '&markArray=' + markArray,
    })
  }
})
