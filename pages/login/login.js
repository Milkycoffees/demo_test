// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['爸爸', '妈妈'],
    showView: true,
    choose_flag:true
  },

  choose_who: function(e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      index: e.detail.value,
      choose_flag: that.choose_flag = false
    })
  },

  show_that: function(e) {
    console.log(e)
    var that = this;
    console.log(e.currentTarget.dataset.text)
    if(e.currentTarget.dataset.text === '家长绑定'){
      that.setData({
        showView: that.data.showView = true
      }) 
    }else {
      that.setData({
        showView: that.data.showView = false
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})