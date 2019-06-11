// pages/detail/detail.js
const app = getApp()
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
    upC:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 屏幕宽度
    bmiMark = parseInt(app.globalData.bmiMark / 0.15)
    lungMark = parseInt(app.globalData.lungMark / 0.15)
    shortRunMark = parseInt(app.globalData.shortRunMark * 5)
    if (app.globalData.upMark > 10){
      upMark = 100
    } else{
      upMark = parseInt(app.globalData.upMark * 10)
    }
    jumpMark = parseInt(app.globalData.jumpMark * 10)
    if (app.globalData.longRunMark > 10) {
      longRunMark = 100
    } else {
      longRunMark = parseInt(app.globalData.longRunMark * 5)
    }
    reachMark = parseInt(app.globalData.reachMark * 10)
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth,
      upC:options.upC
    });
    console.log(this.data.imageWidth);

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