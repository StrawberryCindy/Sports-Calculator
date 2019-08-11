// pages/detail/detail.js
const app = getApp()
const util = require('../../../utils/util.js')
//首先引入wxcharts.js插件
var wxCharts = require("wxcharts-min.js");
//定义记录初始屏幕宽度比例，便于初始化
var windowW = 0;

//全局变量(不加权值)
var bmiMark, lungMark, shortRunMark, upMark, jumpMark, longRunMark, reachMark
Page({

  /**
   * 页面的初始数据
   */
  data: {
    upC: null,
    itemArray: ['原始分','加权分','加分','评级' ],
    listData: [
      { title: '身体质量指数', iMark:0, mark: 0, aMark: '-', level:''},
      { title: '肺活量', iMark: 0, mark: 0, aMark: '-', level: ''},
      { title: '坐位体前屈', iMark: 0, mark: 0, aMark: '-', level: '' },
      { title: '立定跳远', iMark: 0, mark: 0, aMark: '-', level: ''},
      { title: '50米跑', iMark: 0, mark: 0, aMark: '-', level: ''},
      { title: '', iMark: 0, mark: 0, aMark: '-', level: ''},
      { title: '', iMark: 0, mark: 0, aMark: '-', level: ''},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var marks = JSON.parse(options.markArray)
    console.log(marks)
    //换算原始分 将换算成绩列为数组 bmiMark,lungMark,reachMark,jumpMark,shortRunMark,longRunMark,upMark
    bmiMark = util.initBmi(marks[0])[0]
    lungMark = util.initLungMark(marks[1])[0]
    reachMark = util.initReachMark(marks[2])[0]
    jumpMark = util.initJumpMark(marks[3])[0]
    shortRunMark = util.initShortRunMark(marks[4])[0]
    longRunMark = util.initLongRunMark(marks[5])[0]
    upMark = util.initUpMark(marks[6])[0]
    console.log(bmiMark, lungMark, reachMark, jumpMark, shortRunMark, longRunMark, upMark)
    //评级和加分
    var level = [util.initBmi(marks[0])[1], util.initLungMark(marks[1])[1], util.initReachMark(marks[2])[1], util.initJumpMark(marks[3])[1], util.initShortRunMark(marks[4])[1], util.initLongRunMark(marks[5])[1], util.initUpMark(marks[6])[1]]
    var aMark = [util.initLongRunMark(marks[5])[2], util.initUpMark(marks[6])[2]]

    //表单数据赋值
    var listData = [
      { title: '身体质量指数', iMark: bmiMark, mark: 0, aMark: '-', level: level[0] },
      { title: '肺活量', iMark: lungMark, mark: 0, aMark: '-', level: level[1] },
      { title: '坐位体前屈', iMark: reachMark, mark: 0, aMark: '-', level: level[2] },
      { title: '立定跳远', iMark: jumpMark, mark: 0, aMark: '-', level: level[3] },
      { title: '50米跑', iMark: shortRunMark, mark: 0, aMark: '-', level: level[4] },
      { title: options.longRun, iMark: longRunMark, mark: 0, aMark: aMark[0], level: level[5] },
      { title: options.upC, iMark: upMark, mark: 0, aMark: aMark[1], level: level[6] },
    ]

    //页面显示
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth,
      upC: options.upC,
      listData:listData,
      'listData[0].mark': marks[0].toFixed(1),
      'listData[1].mark': marks[1].toFixed(1),
      'listData[2].mark': marks[2].toFixed(1),
      'listData[3].mark': marks[3].toFixed(1),
      'listData[4].mark': marks[4].toFixed(1),
      'listData[5].mark': marks[5].toFixed(1),
      'listData[6].mark': marks[6].toFixed(1),

    });

    //计算屏幕宽度比列
    windowW = this.data.imageWidth / 375;
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
    new wxCharts({
      canvasId: 'radarCanvas',
      type: 'radar',
      categories: ['身体指数', '肺活量', '爆发力', this.data.upC, '立定跳远', '耐力', '柔韧性'],
      series: [{
        data: [bmiMark, lungMark, shortRunMark, upMark, jumpMark, longRunMark, reachMark]
      }],
      width: (375 * windowW),
      height: (375 * windowW),
      extra: {
        radar: {
          max: 100
        }
      }
    });
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

  }
})