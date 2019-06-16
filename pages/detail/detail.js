// pages/detail/detail.js
const app = getApp()
const util = require('../../utils/util.js')
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
    
    //换算原始分
    bmiMark = util.initBmi()[0]
    lungMark = util.initLungMark()[0]
    reachMark = util.initReachMark()[0]
    jumpMark = util.initJumpMark()[0]
    shortRunMark = util.initShortRunMark()[0]
    longRunMark = util.initLongRunMark()[0]
    upMark = util.initUpMark()[0]
    
    //评级和加分
    var level = [util.initBmi()[1], util.initLungMark()[1], util.initReachMark()[1], util.initJumpMark()[1], util.initShortRunMark()[1], util.initLongRunMark()[1], util.initUpMark()[1]]
    var aMark = [util.initLongRunMark()[2], util.initUpMark()[2]]

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
      'listData[0].mark': app.globalData.bmiMark,
      'listData[1].mark': app.globalData.lungMark,
      'listData[2].mark': app.globalData.reachMark,
      'listData[3].mark': app.globalData.jumpMark,
      'listData[4].mark': app.globalData.shortRunMark,
      'listData[5].mark': app.globalData.longRunMark,
      'listData[6].mark': app.globalData.upMark,

    });

    //计算屏幕宽度比列
    windowW = this.data.imageWidth / 375;
    console.log(windowW);
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